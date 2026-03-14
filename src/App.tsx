import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const STAR_COUNT = 18000;

const SHOOTING_STAR_BURST_INTERVAL = 5;
const SHOOTING_STARS_PER_BURST = 4;
const MAX_ACTIVE_SHOOTING_STARS = 14;
const MIN_CAMERA_DISTANCE = 18;
const MAX_CAMERA_DISTANCE = 260;

type ShootingStar = {
  line: {
    geometry: { dispose: () => void };
    material: { opacity: number; dispose: () => void };
    position: { copy: (value: unknown) => void; set: (x: number, y: number, z: number) => void };
    quaternion: { setFromUnitVectors: (a: unknown, b: unknown) => void };
  };
  start: { x: number; y: number; z: number };
  direction: { x: number; y: number; z: number };
  speed: number;
  life: number;
  age: number;
};

function App() {
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<any>(null);
  const [isCardOpen, setIsCardOpen] = useState(true);

  useEffect(() => {
    const mount = canvasWrapRef.current;
    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x030910);
    scene.fog = null;

    const camera = new THREE.PerspectiveCamera(
      62,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1200
    );
    camera.position.set(0, 0, 120);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minDistance = MIN_CAMERA_DISTANCE;
    controls.maxDistance = MAX_CAMERA_DISTANCE;
    controls.enabled = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.38;
    controls.minPolarAngle = 0.05;
    controls.maxPolarAngle = Math.PI - 0.05;
    controls.target.set(0, 0, 0);

    const moonLight = new THREE.PointLight(0xb6d1ff, 1.25, 500);
    moonLight.position.set(0, 0, 0);
    scene.add(moonLight);

    const skyFillLight = new THREE.HemisphereLight(0x6f9fff, 0x030910, 0.28);
    scene.add(skyFillLight);

    const blueBackLight = new THREE.DirectionalLight(0x4f8fff, 0.35);
    blueBackLight.position.set(75, 40, -120);
    scene.add(blueBackLight);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(7.6, 48, 48),
      new THREE.MeshStandardMaterial({ color: 0xd5e6ff, emissive: 0x3b66a8, emissiveIntensity: 0.35 })
    );
    moon.position.copy(moonLight.position);
    scene.add(moon);

    controls.target.copy(moon.position);
    controls.update();

    const starGeometry = new THREE.BufferGeometry();
    const starVertices = new Float32Array(STAR_COUNT * 3);

    for (let index = 0; index < STAR_COUNT; index += 1) {
      // Uniformly fill a large 3D volume so stars cover the entire screen in any direction.
      starVertices[index * 3] = THREE.MathUtils.randFloatSpread(1600);
      starVertices[index * 3 + 1] = THREE.MathUtils.randFloatSpread(1600);
      starVertices[index * 3 + 2] = THREE.MathUtils.randFloatSpread(1600);
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starVertices, 3));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xb8d7ff,
      size: 1.12,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false
    });

    const stars = new THREE.Points(starGeometry, starsMaterial);
    scene.add(stars);

    const shootingStars: ShootingStar[] = [];

    const upVector = new THREE.Vector3(0, 1, 0);
    let nextShootingStarTime = SHOOTING_STAR_BURST_INTERVAL;

    const spawnShootingStar = () => {
      const start = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(420),
        THREE.MathUtils.randFloat(95, 250),
        THREE.MathUtils.randFloatSpread(420)
      );

      const direction = new THREE.Vector3(
        THREE.MathUtils.randFloat(-1.1, -0.25),
        THREE.MathUtils.randFloat(-0.42, -0.18),
        THREE.MathUtils.randFloat(-0.55, 0.55)
      ).normalize();

      const tail = THREE.MathUtils.randFloat(20, 32);
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, tail, 0)
      ]);
      const material = new THREE.LineBasicMaterial({
        color: 0xffd7fd,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });

      const line = new THREE.Line(geometry, material);
      line.position.copy(start);
      line.quaternion.setFromUnitVectors(upVector, direction.clone().negate());
      scene.add(line);

      shootingStars.push({
        line,
        start,
        direction,
        speed: THREE.MathUtils.randFloat(120, 180),
        life: THREE.MathUtils.randFloat(0.55, 1.05),
        age: 0
      });
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

    window.addEventListener('resize', onResize);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const t = clock.elapsedTime;

      stars.rotation.y = t * 0.008;
      starsMaterial.opacity = 0.9 + Math.sin(t * 0.7) * 0.06;

      if (t > nextShootingStarTime) {
        const canSpawn = Math.max(0, MAX_ACTIVE_SHOOTING_STARS - shootingStars.length);
        const burstCount = Math.min(SHOOTING_STARS_PER_BURST, canSpawn);
        for (let index = 0; index < burstCount; index += 1) {
          spawnShootingStar();
        }
        nextShootingStarTime = t + SHOOTING_STAR_BURST_INTERVAL;
      }

      for (let index = shootingStars.length - 1; index >= 0; index -= 1) {
        const star = shootingStars[index];
        star.age += delta;
        const progress = star.age / star.life;

        const travel = star.speed * star.age;
        star.line.position.set(
          star.start.x + star.direction.x * travel,
          star.start.y + star.direction.y * travel,
          star.start.z + star.direction.z * travel
        );
        star.line.material.opacity = Math.max(0, 0.9 * (1 - progress * 1.15));

        if (progress >= 1) {
          scene.remove(star.line);
          star.line.geometry.dispose();
          star.line.material.dispose();
          shootingStars.splice(index, 1);
        }
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);

      shootingStars.forEach((star) => {
        scene.remove(star.line);
        star.line.geometry.dispose();
        star.line.material.dispose();
      });

      controls.dispose();
      controlsRef.current = null;
      starGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();

      scene.traverse((child: { geometry?: { dispose: () => void }; material?: { dispose: () => void } | Array<{ dispose: () => void }> }) => {
        const mesh = child;
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }

        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((material: { dispose: () => void }) => material.dispose());
        } else if (mesh.material) {
          mesh.material.dispose();
        }
      });

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) {
      return;
    }

    const isOrbitEnabled = !isCardOpen;
    controls.enabled = isOrbitEnabled;
    controls.enableZoom = isOrbitEnabled;
  }, [isCardOpen]);

  return (
    <main className="page">
      <div className="canvas-wrap is-visible" ref={canvasWrapRef} />
      <section className={`world-card ${!isCardOpen ? 'world-card--hidden' : ''}`}>
        <h2>The GitSky</h2>
        <div className="world-card__actions">
          <button type="button">Login/Create</button>
          <button
            className="world-card__orbit"
            type="button"
            onClick={() => setIsCardOpen(false)}
          >
            Orbit 🚀
          </button>
        </div>
      </section>
      <button
        className={`world-card-toggle ${!isCardOpen ? 'world-card-toggle--visible' : ''}`}
        type="button"
        aria-label="Open controls card"
        onClick={() => setIsCardOpen(true)}
      >
        ˅
      </button>
    </main>
  );
}

export default App;
