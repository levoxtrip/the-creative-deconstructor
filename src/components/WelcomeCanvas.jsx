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
  const layersRef = useRef([]);
  const connectionsRef = useRef([]);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const mouseDownPosRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const hoveredTileRef = useRef(null);
  const labelRef = useRef(null);
  const isHomeActiveRef = useRef(isHomeActive);
  const onArticleSelectRef = useRef(onArticleSelect);
  const eventHandlersRef = useRef({});
  const isInitializedRef = useRef(false);
  const createTilesRef = useRef(null);
  const wasHomeActiveRef = useRef(isHomeActive);
  const timeRef = useRef(0);

  useEffect(() => {
    const wasHomeActive = wasHomeActiveRef.current;
    isHomeActiveRef.current = isHomeActive;
    wasHomeActiveRef.current = isHomeActive;

    if (!isHomeActive) {
      if (labelRef.current) {
        labelRef.current.style.opacity = "0";
      }
      document.body.style.cursor = "default";
      if (hoveredTileRef.current) {
        hoveredTileRef.current.material.opacity =
          hoveredTileRef.current.userData.baseOpacity;
        hoveredTileRef.current.userData.isHovered = false;
        hoveredTileRef.current = null;
      }
    } else if (!wasHomeActive && isHomeActive) {
      if (createTilesRef.current) {
        createTilesRef.current();
      }
    }

    if (controlsRef.current) {
      controlsRef.current.enabled = isHomeActive;
    }
  }, [isHomeActive]);

  useEffect(() => {
    onArticleSelectRef.current = onArticleSelect;
  }, [onArticleSelect]);

  useEffect(() => {
    if (!canvasRef.current || !articles?.length || isInitializedRef.current) return;
    
    isInitializedRef.current = true;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeeeeee);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.z = 30;
    cameraRef.current = camera;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.minDistance = 5;
    controls.maxDistance = 100;
    controls.enabled = isHomeActiveRef.current;
    controlsRef.current = controls;

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

    const createTiles = () => {
  // Clean up previous tiles
  tilesRef.current.forEach((tile) => {
    tile.geometry.dispose();
    tile.material.dispose();
  });
  layersRef.current.forEach((layer) => {
    scene.remove(layer);
  });
  // Clean up previous connections
  connectionsRef.current.forEach((conn) => {
    conn.line.geometry.dispose();
    conn.line.material.dispose();
    scene.remove(conn.line);
  });
  tilesRef.current = [];
  layersRef.current = [];
  connectionsRef.current = [];

  const layerCount = 3 + Math.floor(Math.random() * 3);
  const layerSpacing = 10 + Math.random() * 5;
  const tileSize = 3;
  
  // Either lots of gaps (80-100%) or no gaps at all
  let gapProbability;
  if (Math.random() < 0.5) {
    // 50% chance: sparse grid with lots of gaps
    gapProbability = 0.8 + Math.random() * 0.2; // 80-100% gaps
  } else {
    // 50% chance: full grid with no gaps
    gapProbability = 0;
  }

  const validArticles = articles.filter((a) => a.title !== "index");
  const shuffledArticles = [...validArticles].sort(() => Math.random() - 0.5);

  let articleIndex = 0;

      for (let layer = 0; layer < layerCount; layer++) {
        const zPos = -layer * layerSpacing;
        const gridSize = 8 + Math.floor(Math.random() * 2);
        
        const layerGroup = new THREE.Group();
        layerGroup.position.z = zPos;

        for (let gx = 0; gx < gridSize; gx++) {
          for (let gy = 0; gy < gridSize; gy++) {
            if (Math.random() < gapProbability) continue;

            const x = (gx - gridSize / 2 + 0.5) * tileSize;
            const y = (gy - gridSize / 2 + 0.5) * tileSize;

            const article = shuffledArticles[articleIndex % shuffledArticles.length];
            articleIndex++;

            const geometry = new THREE.PlaneGeometry(
              tileSize * 0.97,
              tileSize * 0.97
            );

            const hue = Math.random();
            const material = new THREE.MeshBasicMaterial({
              color: new THREE.Color().setHSL(hue, 0.5, 0.6),
              transparent: true,
              opacity: 0.05,
              side: THREE.DoubleSide,
            });

            const tile = new THREE.Mesh(geometry, material);
            tile.position.set(x, y, 0);

            tile.userData = {
              article,
              baseOpacity: 0.05,
              hoverOpacity: 1.0,
              hue,
              isHovered: false,
              worldPos: new THREE.Vector3(x, y, zPos),
            };

            const edges = new THREE.EdgesGeometry(geometry);
            const line = new THREE.LineSegments(
              edges,
              new THREE.LineBasicMaterial({ color: 0x888888 })
            );
            tile.add(line);

            layerGroup.add(tile);
            tilesRef.current.push(tile);
          }
        }

        scene.add(layerGroup);
        layersRef.current.push(layerGroup);
      }

      // Create connections between random tiles
      const numConnections = 15 + Math.floor(Math.random() * 20); // 15-35 connections
      const tiles = tilesRef.current;

      for (let i = 0; i < numConnections; i++) {
        const tileA = tiles[Math.floor(Math.random() * tiles.length)];
        const tileB = tiles[Math.floor(Math.random() * tiles.length)];
        
        if (tileA === tileB) continue;

        const posA = tileA.userData.worldPos;
        const posB = tileB.userData.worldPos;
        
        // Skip if tiles are too far apart
        const distance = posA.distanceTo(posB);
        if (distance > 40) continue;

        // Create line geometry
        const lineGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(6); // 2 points × 3 coordinates
        positions[0] = posA.x;
        positions[1] = posA.y;
        positions[2] = posA.z;
        positions[3] = posA.x; // Start at same point (will animate)
        positions[4] = posA.y;
        positions[5] = posA.z;
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const hue = Math.random();
        const lineMaterial = new THREE.LineBasicMaterial({
          color: new THREE.Color().setHSL(hue, 0.7, 0.5),
          transparent: true,
          opacity: 0,
        });

        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);

        connectionsRef.current.push({
          line,
          startPos: posA.clone(),
          endPos: posB.clone(),
          progress: 0,
          speed: 0.005 + Math.random() * 0.015, // Random speed
          delay: Math.random() * 5, // Random start delay (seconds)
          duration: 2 + Math.random() * 3, // How long line stays visible
          phase: 'waiting', // waiting, drawing, visible, fading
          timeInPhase: 0,
          hue,
        });
      }
    };

    createTilesRef.current = createTiles;
    createTiles();

    // Event handlers
    const onMouseDown = (event) => {
      mouseDownPosRef.current = { x: event.clientX, y: event.clientY };
      isDraggingRef.current = false;
    };

    const onMouseMove = (event) => {
      const currentSizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      mouseRef.current.x = (event.clientX / currentSizes.width) * 2 - 1;
      mouseRef.current.y = -(event.clientY / currentSizes.height) * 2 + 1;

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
      const newSizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      camera.aspect = newSizes.width / newSizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(newSizes.width, newSizes.height);
    };

    eventHandlersRef.current = {
      onMouseDown,
      onMouseMove,
      onClick,
      handleResize,
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", handleResize);

    // Animation loop
    let lastTime = performance.now();
    
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;

      if (isHomeActiveRef.current) {
        controls.update();
        timeRef.current += deltaTime;

        // Animate connections
        connectionsRef.current.forEach((conn) => {
          conn.timeInPhase += deltaTime;

          switch (conn.phase) {
            case 'waiting':
              if (conn.timeInPhase >= conn.delay) {
                conn.phase = 'drawing';
                conn.timeInPhase = 0;
                conn.progress = 0;
              }
              break;

            case 'drawing':
              conn.progress += conn.speed * 60 * deltaTime;
              if (conn.progress >= 1) {
                conn.progress = 1;
                conn.phase = 'visible';
                conn.timeInPhase = 0;
              }
              // Update line endpoint
              const positions = conn.line.geometry.attributes.position.array;
              positions[3] = conn.startPos.x + (conn.endPos.x - conn.startPos.x) * conn.progress;
              positions[4] = conn.startPos.y + (conn.endPos.y - conn.startPos.y) * conn.progress;
              positions[5] = conn.startPos.z + (conn.endPos.z - conn.startPos.z) * conn.progress;
              conn.line.geometry.attributes.position.needsUpdate = true;
              conn.line.material.opacity = 0.6;
              break;

            case 'visible':
              if (conn.timeInPhase >= conn.duration) {
                conn.phase = 'fading';
                conn.timeInPhase = 0;
              }
              break;

            case 'fading':
              const fadeProgress = conn.timeInPhase / 1; // 1 second fade
              conn.line.material.opacity = 0.6 * (1 - fadeProgress);
              if (fadeProgress >= 1) {
                // Reset and start again
                conn.phase = 'waiting';
                conn.timeInPhase = 0;
                conn.delay = Math.random() * 5;
                conn.progress = 0;
                conn.line.material.opacity = 0;
                
                // Reset line to start position
                const pos = conn.line.geometry.attributes.position.array;
                pos[3] = conn.startPos.x;
                pos[4] = conn.startPos.y;
                pos[5] = conn.startPos.z;
                conn.line.geometry.attributes.position.needsUpdate = true;
              }
              break;
          }
        });

        // Raycaster hover logic
        raycasterRef.current.setFromCamera(mouseRef.current, camera);
        const intersects = raycasterRef.current.intersectObjects(tilesRef.current);

        if (
          hoveredTileRef.current &&
          hoveredTileRef.current !== intersects[0]?.object
        ) {
          hoveredTileRef.current.material.opacity =
            hoveredTileRef.current.userData.baseOpacity;
          hoveredTileRef.current.userData.isHovered = false;
          hoveredTileRef.current = null;
          if (labelRef.current) {
            labelRef.current.style.opacity = "0";
          }
          document.body.style.cursor = "default";
        }

        if (intersects.length > 0) {
          const tile = intersects[0].object;
          if (!tile.userData.isHovered) {
            tile.material.opacity = tile.userData.hoverOpacity;
            tile.userData.isHovered = true;
            hoveredTileRef.current = tile;

            if (tile.userData.article && labelRef.current) {
              const article = tile.userData.article;
              const section =
                article.section.charAt(0).toUpperCase() +
                article.section.slice(1);
              labelRef.current.textContent = `${section} → ${article.category} → ${article.title}`;
              labelRef.current.style.opacity = "1";
            }
            document.body.style.cursor = "pointer";
          }
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", handleResize);

      if (labelRef.current && document.body.contains(labelRef.current)) {
        document.body.removeChild(labelRef.current);
        labelRef.current = null;
      }

      tilesRef.current.forEach((tile) => {
        tile.geometry.dispose();
        tile.material.dispose();
      });

      connectionsRef.current.forEach((conn) => {
        conn.line.geometry.dispose();
        conn.line.material.dispose();
      });

      controls.dispose();
      renderer.dispose();

      isInitializedRef.current = false;
      createTilesRef.current = null;
    };
  }, [articles]);

  return (
    <div className={`welcome-canvas ${isHomeActive ? "" : "blurred"}`}>
      <canvas ref={canvasRef} id="WelcomeCanvas"></canvas>
    </div>
  );
};

export default WelcomeCanvas;