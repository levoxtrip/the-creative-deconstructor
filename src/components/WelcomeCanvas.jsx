import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";

const WelcomeCanvas = () => {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const mouseRef = useRef(new THREE.Vector2())
  const raycasterRef = useRef(new THREE.Raycaster())

  useEffect(() => {
    if (!canvasRef.current) return;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

	// ROOM Config
	const roomSize = 20;
	const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
	const tilesPerWall = randomInt(4, 15)
	const tileSize = roomSize/tilesPerWall;




    // Set up scene
    const scene = new THREE.Scene();
	scene.background = new THREE.Color(0xeeeeee)
	
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      2000
    );
    camera.position.z = 5;  // Move camera back so we can see the box
	const ranRotation = (Math.random() - 0.5)*180
	console.log(ranRotation)
	
    scene.add(camera);

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    // Orbit controls
    const orbControl = new OrbitControls(camera, renderer.domElement);
    orbControl.enableDamping = true;
	orbControl.enableZoom = false;

	orbControl.minDistance = 0.1
	orbControl.maxDistance = 0.1

	const randomTheta = Math.random() * Math.PI * 2; 
	const randomPhi = Math.random() * Math.PI * 0.6 + 0.2; 

	camera.position.setFromSphericalCoords(0.1, randomPhi, randomTheta);
	orbControl.update();

    // // Geometry
    // const environmentBox = new THREE.BoxGeometry(1);
    // const environmentMaterial = new THREE.MeshBasicMaterial({
    //   wireframe: true,
    //   color: 0x888888,
    // });


	// Material
	const tileMaterial = new THREE.MeshBasicMaterial({
	color:0xeeeeee,
	side:THREE.DoubleSide
	})
	const edgeMaterial = new THREE.LineBasicMaterial({
	color: 0x888888})

	//CREATE WALL
	const halfRoom = roomSize/2;


	const createWall = (name,getPosition,getRotation) => {
		for(let i = 0; i< tilesPerWall;i++){
		for(let j = 0;j<tilesPerWall;j++){
			const geometry = new THREE.PlaneGeometry(tileSize*0.999,tileSize*0.999)
			const tile = new THREE.Mesh(geometry,tileMaterial)

			//get position from callback
			const pos = getPosition(i,j)
			tile.position.set(pos.x,pos.y,pos.z)

			//get rotation from callback
			const rot = getRotation();
			tile.rotation.set(rot.x,rot.y,rot.z)


			//Add edges
			const edges = new THREE.EdgesGeometry(geometry);
			const line = new THREE.LineSegments(edges,edgeMaterial)
			tile.add(line)

			tile.userData = {wall:name,gridX:i,girdY:j}

			scene.add(tile)
	
	}

		
		}
	
	}

	// === BACK WALL (Z-) ===
    createWall(
      'back',
      (i, j) => ({
        x: -halfRoom + (i + 0.5) * tileSize,
        y: -halfRoom + (j + 0.5) * tileSize,
        z: -halfRoom
      }),
      () => ({ x: 0, y: 0, z: 0 })
    );

    // === FRONT WALL (Z+) ===
    createWall(
      'front',
      (i, j) => ({
        x: -halfRoom + (i + 0.5) * tileSize,
        y: -halfRoom + (j + 0.5) * tileSize,
        z: halfRoom
      }),
      () => ({ x: 0, y: Math.PI, z: 0 })  // Rotated to face inward
    );

    // === LEFT WALL (X-) ===
    createWall(
      'left',
      (i, j) => ({
        x: -halfRoom,
        y: -halfRoom + (j + 0.5) * tileSize,
        z: -halfRoom + (i + 0.5) * tileSize
      }),
      () => ({ x: 0, y: Math.PI / 2, z: 0 })
    );

    // === RIGHT WALL (X+) ===
    createWall(
      'right',
      (i, j) => ({
        x: halfRoom,
        y: -halfRoom + (j + 0.5) * tileSize,
        z: -halfRoom + (i + 0.5) * tileSize
      }),
      () => ({ x: 0, y: -Math.PI / 2, z: 0 })
    );

    // === FLOOR (Y-) ===
    createWall(
      'floor',
      (i, j) => ({
        x: -halfRoom + (i + 0.5) * tileSize,
        y: -halfRoom,
        z: -halfRoom + (j + 0.5) * tileSize
      }),
      () => ({ x: -Math.PI / 2, y: 0, z: 0 })
    );

    // === CEILING (Y+) ===
    createWall(
      'ceiling',
      (i, j) => ({
        x: -halfRoom + (i + 0.5) * tileSize,
        y: halfRoom,
        z: -halfRoom + (j + 0.5) * tileSize
      }),
      () => ({ x: Math.PI / 2, y: 0, z: 0 })
    );





    // const boxMesh = new THREE.Mesh(environmentBox, environmentMaterial);
    // scene.add(boxMesh);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      orbControl.update();  // Required for damping
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    //   environmentBox.dispose();
    //   environmentMaterial.dispose();
    }
  }, [])

  return (
    <div className="welcome-canvas">
      <canvas ref={canvasRef} id="WelcomeCanvas"></canvas>
    </div>
  )
}

export default WelcomeCanvas