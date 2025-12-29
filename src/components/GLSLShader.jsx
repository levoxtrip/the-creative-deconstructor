import {useEffect, useRef} from 'react'
import * as THREE from 'three'

function GLSLShader({code}){
	const containerRef = useRef(null)
	const sceneRef = useRef(null)
	const rendererRef = useRef(null)
	const startTimeRef = useRef(Date.now())

	useEffect(()=>{

	 while (containerRef.current?.firstChild) {
    containerRef.current.removeChild(containerRef.current.firstChild)
  }

	//Set Canvas size
	const width = 400
	const height = 400

	//Create Scene
	const scene = new THREE.Scene()
	const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1)

	//Create Renderer
	const renderer = new THREE.WebGLRenderer({antialias:true})
	renderer.setSize(width,height)
	containerRef.current.appendChild(renderer.domElement)

	//Default Vertex Shader

const vertexShader = `
  varying vec2 v_uv;  // Output - different name!
  void main(){
    v_uv = uv;  // uv comes from Three.js geometry
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  varying vec2 v_uv;  // Must match vertex shader

  #define uv v_uv  // Let users write 'uv' in their code

  ${code}
`
	
	const material = new THREE.ShaderMaterial({
		vertexShader,
		fragmentShader,
		uniforms: {
			u_time: {value:0},
			u_resolution: {value: new THREE.Vector2(width,height)},
			u_mouse: {value: new THREE.Vector2(0,0)}
		}
	})

	// Create Plane geometry

	const geometry = new THREE.PlaneGeometry(2,2)
	const mesh = new THREE.Mesh(geometry,material)
	scene.add(mesh)

	
	//mouse tracking
	const handleMousemove = (e) => {
		const rect = renderer.domElement.getBoundingClientRect()
		const x = e.clientX - rect.left
		const y = height - (e.clientY - rect.top) // flip Y
		material.uniforms.u_mouse.value.set(x,y)
	}

	renderer.domElement.addEventListener('mousemove',handleMousemove)

	//animation loop

	const animate = () => {
		const elapsed = (Date.now()-startTimeRef.current) /1000
		material.uniforms.u_time.value = elapsed
		renderer.render(scene,camera)
		requestAnimationFrame(animate)
	}
	animate()

	//Store refs
	sceneRef.current = scene
	rendererRef.current = renderer

	//cleanup
	return () => {
		renderer.domElement.removeEventListener("mousemove",handleMousemove)
		containerRef.current?.removeChild(renderer.domElement)
		geometry.dispose()
		material.dispose()
		renderer.dispose()
	}

	
	
	},[code])

  return (
    <div 
      ref={containerRef} 
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0',
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '8px'
      }}
    />
  )
}

export default GLSLShader