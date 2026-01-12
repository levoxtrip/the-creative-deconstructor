import { useEffect, useRef, useState, memo } from 'react'
import * as THREE from 'three'

function GLSLShader({ code }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const materialRef = useRef(null)
  const frameRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const startTimeRef = useRef(null)
  const geometryRef = useRef(null)
  const meshRef = useRef(null)
  const mouseMoveHandlerRef = useRef(null)
  
  const [isVisible, setIsVisible] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [shaderError, setShaderError] = useState(null)

  // Intersection Observer - detect when shader enters/leaves viewport
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      }
    )

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Build fragment shader from user code
const buildFragmentShader = (userCode) => {
  // Remove user's uniform declarations (we provide them)
  let cleaned = userCode
    .replace(/uniform\s+vec2\s+u_resolution\s*;[^\n]*/g, '')
    .replace(/uniform\s+float\s+u_time\s*;[^\n]*/g, '')
    .replace(/uniform\s+vec2\s+u_mouse\s*;[^\n]*/g, '')

  // Replace gl_FragCoord with our varying
  cleaned = cleaned.replace(/gl_FragCoord\.xy/g, 'vFragCoord')

  return `
    precision mediump float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    varying vec2 vUv;
    varying vec2 vFragCoord;
    
    ${cleaned}
  `
}

  // Initialize Three.js scene when first becoming visible
  useEffect(() => {
    if (!isVisible || isInitialized || !containerRef.current) return

    const container = containerRef.current
    const width = 400
    const height = 400

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    sceneRef.current = scene
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Vertex shader
   const vertexShader = `
  precision mediump float;
  varying vec2 vUv;
  varying vec2 vFragCoord;
  uniform vec2 u_resolution;
  void main() {
    vUv = uv;
    vFragCoord = uv * u_resolution;
    gl_Position = vec4(position, 1.0);
  }
`
    // Build fragment shader from user code
    const fragmentShader = buildFragmentShader(code)
    
    // Debug: log shader
    console.log('Compiled fragment shader:', fragmentShader)

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(width, height) },
        u_mouse: { value: new THREE.Vector2(0, 0) }
      }
    })
    
    materialRef.current = material

    const geometry = new THREE.PlaneGeometry(2, 2)
    geometryRef.current = geometry
    
    const mesh = new THREE.Mesh(geometry, material)
    meshRef.current = mesh
    scene.add(mesh)

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = height - (e.clientY - rect.top)
      material.uniforms.u_mouse.value.set(x, y)
    }
    mouseMoveHandlerRef.current = handleMouseMove
    renderer.domElement.addEventListener('mousemove', handleMouseMove)

    // Set start time
    startTimeRef.current = Date.now()
    
    // Do initial render to catch any errors
    try {
      renderer.render(scene, camera)
      setShaderError(null)
    } catch (e) {
      console.error('Shader compilation error:', e)
      setShaderError(e.message)
    }
    
    setIsInitialized(true)

    // // Cleanup on unmount
    // return () => {
    //   cleanup()
    // }
  }, [isVisible, isInitialized])
// Cleanup only on unmount
  useEffect(() => {
  return () => {
    cleanup()
  }
}, [])

  // Animation loop - only runs when visible
  useEffect(() => {
    if (!isInitialized || !isVisible) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
      return
    }

    const animate = () => {
      if (!rendererRef.current || !materialRef.current || !sceneRef.current || !cameraRef.current) {
        return
      }
      
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      materialRef.current.uniforms.u_time.value = elapsed
      
      rendererRef.current.render(sceneRef.current, cameraRef.current)
      frameRef.current = requestAnimationFrame(animate)
    }
    
    animate()

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [isVisible, isInitialized])

  // Update shader code when it changes
  useEffect(() => {
    if (!materialRef.current || !isInitialized) return

    const newFragmentShader = buildFragmentShader(code)
    materialRef.current.fragmentShader = newFragmentShader
    materialRef.current.needsUpdate = true
  }, [code, isInitialized])

  // Cleanup function
  const cleanup = () => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
    }

    if (rendererRef.current && mouseMoveHandlerRef.current) {
      rendererRef.current.domElement.removeEventListener('mousemove', mouseMoveHandlerRef.current)
    }

    if (geometryRef.current) {
      geometryRef.current.dispose()
      geometryRef.current = null
    }

    if (materialRef.current) {
      materialRef.current.dispose()
      materialRef.current = null
    }

    if (rendererRef.current) {
      rendererRef.current.dispose()
      if (containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      rendererRef.current = null
    }

    sceneRef.current = null
    cameraRef.current = null
    meshRef.current = null
  }

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
        padding: '20px',
        background: '#1a1a1a',
        borderRadius: '8px',
        minHeight: '440px',
        minWidth: '440px'
      }}
    >
      {!isInitialized && (
        <div style={{ 
          color: '#666', 
          fontSize: '14px',
          textAlign: 'center'
        }}>
          {isVisible ? 'Loading shader...' : 'Scroll to view shader'}
        </div>
      )}
      {shaderError && (
        <div style={{ 
          color: '#ff6b6b', 
          fontSize: '12px',
          textAlign: 'center',
          padding: '10px'
        }}>
          Shader error: {shaderError}
        </div>
      )}
    </div>
  )
}

export default memo(GLSLShader)