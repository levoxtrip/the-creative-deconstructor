import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";

const WelcomeCanvas = ({ isHomeActive, articles, onArticleSelect }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const frameRef = useRef(null);
  const tilesRef = useRef([]);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const mouseDownPosRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const hoveredTileRef = useRef(null);
  const labelRef = useRef(null);
  const isHomeActiveRef = useRef(isHomeActive);
  const onArticleSelectRef = useRef(onArticleSelect);
  const eventHandlersRef = useRef({});

  // Keep refs updated
  useEffect(() => {
    isHomeActiveRef.current = isHomeActive;
    
    if (!isHomeActive) {
      if (labelRef.current) {
        labelRef.current.style.opacity = "0";
      }
      document.body.style.cursor = "default";
      if (hoveredTileRef.current) {
        hoveredTileRef.current.material.opacity = hoveredTileRef.current.userData.baseOpacity;
        hoveredTileRef.current.userData.isHovered = false;
        hoveredTileRef.current = null;
      }
    }
  }, [isHomeActive]);

  useEffect(() => {
    onArticleSelectRef.current = onArticleSelect;
  }, [onArticleSelect]);

  // Initialize scene
  useEffect(() => {
    if (!canvasRef.current || !articles?.length) return;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.minDistance = 5;
    controls.maxDistance = 100;
    controlsRef.current = controls;

    // Create label element
    const label = document.createElement("div");
    label.style.cssText = `
      position: fixed;
      padding: 8px 16px;
      background: rgba(0,0,0,0.8);
      color: white;
      font-size: 14px;
      border-radius: 4px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 1000;
      max-width: 200px;
      text-align: center;
    `;
    document.body.appendChild(label);
    labelRef.current = label;

    // Layer config
    const layerCount = 3;
    const layerSpacing = 12;
    const tileSize = 3;
    const gridSize = 10;

    // Filter out index files and shuffle
    const validArticles = articles.filter(a => a.title !== 'index');
    const shuffledArticles = [...validArticles].sort(() => Math.random() - 0.5);

    // Create layers
    for (let layer = 0; layer < layerCount; layer++) {
      const zPos = -layer * layerSpacing;

      for (let gx = 0; gx < gridSize; gx++) {
        for (let gy = 0; gy < gridSize; gy++) {
          const x = (gx - gridSize / 2 + 0.5) * tileSize;
          const y = (gy - gridSize / 2 + 0.5) * tileSize;

          const tileIndex = layer * gridSize * gridSize + gx * gridSize + gy;
          const article = shuffledArticles[tileIndex % shuffledArticles.length];

          const geometry = new THREE.PlaneGeometry(tileSize * 0.95, tileSize * 0.95);

          const hue = Math.random();
          const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color().setHSL(hue, 0.5, 0.6),
            transparent: true,
            opacity: 0.05,
            side: THREE.DoubleSide,
          });

          const tile = new THREE.Mesh(geometry, material);
          tile.position.set(x, y, zPos);

          tile.userData = {
            article,
            baseOpacity: 0.05,
            hoverOpacity: 0.85,
            hue,
            isHovered: false,
          };

          const edges = new THREE.EdgesGeometry(geometry);
          const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({ color: 0x888888 })
          );
          tile.add(line);

          scene.add(tile);
          tilesRef.current.push(tile);
        }
      }
    }

    // Event handlers
    const onMouseDown = (event) => {
      mouseDownPosRef.current = { x: event.clientX, y: event.clientY };
      isDraggingRef.current = false;
    };

    const onMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / sizes.width) * 2 - 1;
      mouseRef.current.y = -(event.clientY / sizes.height) * 2 + 1;

      const dx = event.clientX - mouseDownPosRef.current.x;
      const dy = event.clientY - mouseDownPosRef.current.y;
      if (Math.sqrt(dx * dx + dy * dy) > 5) {
        isDraggingRef.current = true;
      }

      if (labelRef.current) {
        labelRef.current.style.left = event.clientX + 15 + "px";
        labelRef.current.style.top = event.clientY + 15 + "px";
      }
    };

    const onClick = (event) => {
      if (!isHomeActiveRef.current) return;
      if (event.target !== canvasRef.current) return;
      if (isDraggingRef.current) return;

      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObjects(tilesRef.current);

      if (intersects.length > 0) {
        const tile = intersects[0].object;
        if (tile.userData.article && onArticleSelectRef.current) {
          onArticleSelectRef.current(tile.userData.article);
        }
      }
    };

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    // Store handlers for cleanup
    eventHandlersRef.current = { onMouseDown, onMouseMove, onClick, handleResize };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", handleResize);

    // Initial render
    renderer.render(scene, camera);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("mousedown", onMouseDown);
      
      if (labelRef.current && document.body.contains(labelRef.current)) {
        document.body.removeChild(labelRef.current);
        labelRef.current = null;
      }
      
      tilesRef.current.forEach(tile => {
        tile.geometry.dispose();
        tile.material.dispose();
      });
      tilesRef.current = [];
      
      controls.dispose();
      renderer.dispose();
      
      sceneRef.current = null;
      cameraRef.current = null;
      controlsRef.current = null;
      rendererRef.current = null;
    };
  }, [articles]);

  // Animation loop
  useEffect(() => {
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const scene = sceneRef.current;

    if (!renderer || !camera || !controls || !scene) return;

    let animationId = null;

    if (isHomeActive) {
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        controls.update();

        raycasterRef.current.setFromCamera(mouseRef.current, camera);
        const intersects = raycasterRef.current.intersectObjects(tilesRef.current);

        // Reset previous hover
        if (hoveredTileRef.current && hoveredTileRef.current !== intersects[0]?.object) {
          hoveredTileRef.current.material.opacity = hoveredTileRef.current.userData.baseOpacity;
          hoveredTileRef.current.userData.isHovered = false;
          hoveredTileRef.current = null;
          if (labelRef.current) {
            labelRef.current.style.opacity = "0";
          }
          document.body.style.cursor = "default";
        }

        // Handle new hover
        if (intersects.length > 0) {
          const tile = intersects[0].object;
          if (!tile.userData.isHovered) {
            tile.material.opacity = tile.userData.hoverOpacity;
            tile.userData.isHovered = true;
            hoveredTileRef.current = tile;

            if (tile.userData.article && labelRef.current) {
              const article = tile.userData.article;
const section = article.section.charAt(0).toUpperCase() + article.section.slice(1);
labelRef.current.textContent = `${section} → ${article.category} → ${article.title}`;
              labelRef.current.style.opacity = "1";
            }
            document.body.style.cursor = "pointer";
          }
        }

        renderer.render(scene, camera);
      };
      animate();
      controls.enabled = true;
    } else {
      controls.enabled = false;
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHomeActive]);

  return (
    <div className={`welcome-canvas ${isHomeActive ? "" : "blurred"}`}>
      <canvas ref={canvasRef} id="WelcomeCanvas"></canvas>
    </div>
  );
};

export default WelcomeCanvas;