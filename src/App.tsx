import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const STAR_COUNT = 6500;

function App() {
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = canvasWrapRef.current;
    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060f22);
    scene.fog = new THREE.Fog(0x060f22, 180, 520);

    const camera = new THREE.PerspectiveCamera(
      62,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1200
    );
    camera.position.set(0, 2.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.zoomSpeed = 0.4;
    controls.rotateSpeed = 0.35;
    controls.minDistance = 0.01;
    controls.maxDistance = 0.01;
    controls.minPolarAngle = 0.2;
    controls.maxPolarAngle = Math.PI / 2.02;
    controls.target.set(0, 16, -20);
    controls.update();

    const moonLight = new THREE.PointLight(0xa8c7ff, 1.1, 500);
    moonLight.position.set(-60, 95, -140);
    scene.add(moonLight);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(4.6, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xbfd7ff })
    );
    moon.position.copy(moonLight.position);
    scene.add(moon);

    const moonGlow = new THREE.Mesh(
      new THREE.SphereGeometry(9, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x8fb7ff, transparent: true, opacity: 0.15 })
    );
    moonGlow.position.copy(moon.position);
    scene.add(moonGlow);

    const skyDome = new THREE.Mesh(
      new THREE.SphereGeometry(560, 48, 32),
      new THREE.MeshBasicMaterial({
        color: 0x0a1b3f,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.86
      })
    );
    scene.add(skyDome);

    const horizonRing = new THREE.Mesh(
      new THREE.RingGeometry(130, 520, 100),
      new THREE.MeshBasicMaterial({
        color: 0x1a3f87,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.12
      })
    );
    horizonRing.rotation.x = -Math.PI / 2;
    horizonRing.position.y = -1.2;
    scene.add(horizonRing);

    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(700, 72),
      new THREE.MeshBasicMaterial({ color: 0x010308 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.3;
    scene.add(ground);

    const starGeometry = new THREE.BufferGeometry();
    const starVertices = new Float32Array(STAR_COUNT * 3);

    for (let index = 0; index < STAR_COUNT; index += 1) {
      const radius = THREE.MathUtils.randFloat(180, 500);
      const theta = Math.random() * Math.PI * 2;
      const y = THREE.MathUtils.randFloat(15, 300);
      const horizontalRadius = Math.sqrt(Math.max(radius * radius - y * y, 0));

      starVertices[index * 3] = Math.cos(theta) * horizontalRadius;
      starVertices[index * 3 + 1] = y;
      starVertices[index * 3 + 2] = Math.sin(theta) * horizontalRadius;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xe4efff,
      size: 0.9,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.92,
      depthWrite: false
    });

    const stars = new THREE.Points(starGeometry, starsMaterial);
    scene.add(stars);

    const bandGeometry = new THREE.BufferGeometry();
    const bandCount = 2200;
    const bandVertices = new Float32Array(bandCount * 3);

    for (let index = 0; index < bandCount; index += 1) {
      const radius = THREE.MathUtils.randFloat(220, 510);
      const angle = Math.random() * Math.PI * 2;
      const bandHeight = THREE.MathUtils.randFloatSpread(34) + 130;

      bandVertices[index * 3] = Math.cos(angle) * radius;
      bandVertices[index * 3 + 1] = bandHeight;
      bandVertices[index * 3 + 2] = Math.sin(angle) * radius * 0.4;
    }

    bandGeometry.setAttribute('position', new THREE.BufferAttribute(bandVertices, 3));

    const bandMaterial = new THREE.PointsMaterial({
      color: 0x9fbaff,
      size: 0.7,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.38,
      depthWrite: false
    });

    const starBand = new THREE.Points(bandGeometry, bandMaterial);
    starBand.rotation.z = -0.36;
    starBand.rotation.y = 0.28;
    scene.add(starBand);

    const mouse = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const onResize = () => {
      if (!canvasWrapRef.current) {
        return;
      }

      camera.aspect = canvasWrapRef.current.clientWidth / canvasWrapRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasWrapRef.current.clientWidth, canvasWrapRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onResize);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      stars.rotation.y = t * 0.005;
      starBand.rotation.y = 0.28 + t * 0.002;

      starsMaterial.opacity = 0.86 + Math.sin(t * 0.7) * 0.05;
      bandMaterial.opacity = 0.32 + Math.sin(t * 0.5 + 0.7) * 0.04;

      camera.position.x += (mouse.x * 1.4 - camera.position.x) * 0.02;
      camera.position.y += (2.2 + mouse.y * 0.8 - camera.position.y) * 0.02;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);

      controls.dispose();
      starGeometry.dispose();
      bandGeometry.dispose();
      starsMaterial.dispose();
      bandMaterial.dispose();
      renderer.dispose();

      scene.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }

        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material) => material.dispose());
        } else if (mesh.material) {
          mesh.material.dispose();
        }
      });

      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <main className="page">
      <div className="canvas-wrap" ref={canvasWrapRef} />
      <div className="overlay">
        <h1>Night Sky</h1>
        <p>Look around to explore a bluish real-world-inspired sky from the ground.</p>
      </div>
    </main>
  );
}

export default App;
