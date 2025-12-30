import { useEffect, useRef, memo } from 'react'
import * as THREE from 'three'

function GLSLShader({ code }) {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const materialRef = useRef(null)
  const frameRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const startTimeRef = useRef(Date.now())
  const initializedRef = useRef(false)

  // Initialize Three.js scene ONCE
  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return
    initializedRef.current = true

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
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Initial shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        gl_FragColor = vec4(uv, 0.0, 1.0);
      }
    `

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
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = height - (e.clientY - rect.top)
      material.uniforms.u_mouse.value.set(x, y)
    }
    renderer.domElement.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      if (!rendererRef.current) return
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      if (materialRef.current) {
        materialRef.current.uniforms.u_time.value = elapsed
      }
      renderer.render(scene, camera)
      frameRef.current = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup on unmount only
    return () => {
      cancelAnimationFrame(frameRef.current)
      renderer.domElement.removeEventListener('mousemove', handleMouseMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      initializedRef.current = false
      rendererRef.current = null
    }
  }, [])

  // Update shader code separately
  useEffect(() => {
    if (!materialRef.current) return

    // Extract main body from user code
    const mainMatch = code.match(/void\s+main\s*\(\s*\)\s*\{([\s\S]*)\}\s*$/)
    const userMainBody = mainMatch ? mainMatch[1] : `gl_FragColor = vec4(vUv, 0.0, 1.0);`

    const newFragmentShader = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 vUv;
      
      void main() {
        vec2 uv = vUv;
        ${userMainBody}
      }
    `

    materialRef.current.fragmentShader = newFragmentShader
    materialRef.current.needsUpdate = true
  }, [code])

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
        padding: '20px',
        background: '#1a1a1a',
        borderRadius: '8px',
        minHeight: '440px'
      }}
    />
  )
}

// Export with memo separately
export default memo(GLSLShader)