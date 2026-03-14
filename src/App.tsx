import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const STAR_COUNT = 6500;

const SHOOTING_STAR_MIN_DELAY = 2.2;
const SHOOTING_STAR_MAX_DELAY = 7.5;

function createNebulaTexture(colorA: string, colorB: string) {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext('2d');
  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = context.createRadialGradient(
    size * 0.5,
    size * 0.5,
    size * 0.1,
    size * 0.5,
    size * 0.5,
    size * 0.5
  );
  gradient.addColorStop(0, colorA);
  gradient.addColorStop(0.45, colorB);
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function App() {
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = canvasWrapRef.current;
    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x120a1f);
    scene.fog = new THREE.Fog(0x120a1f, 180, 520);

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
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.45;
    controls.minPolarAngle = 0.05;
    controls.maxPolarAngle = Math.PI - 0.05;
    controls.target.set(0, 2.2, -20);
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
        color: 0x28193f,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.84
      })
    );
    scene.add(skyDome);

    const horizonRing = new THREE.Mesh(
      new THREE.RingGeometry(130, 520, 100),
      new THREE.MeshBasicMaterial({
        color: 0x513f93,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.14
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

    const nebulaTexturePink = createNebulaTexture('rgba(255, 166, 230, 0.24)', 'rgba(229, 126, 241, 0.12)');
    const nebulaTexturePurple = createNebulaTexture('rgba(214, 157, 255, 0.21)', 'rgba(153, 119, 255, 0.1)');
    const nebulaMaterialPink = new THREE.SpriteMaterial({
      map: nebulaTexturePink,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const nebulaMaterialPurple = new THREE.SpriteMaterial({
      map: nebulaTexturePurple,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const nebulaSprites: { material: { opacity: number } }[] = [];
    const nebulaConfigs = [
      { x: -140, y: 120, z: -280, scale: 250, material: nebulaMaterialPink },
      { x: 120, y: 150, z: -220, scale: 220, material: nebulaMaterialPurple },
      { x: 220, y: 95, z: 90, scale: 180, material: nebulaMaterialPink },
      { x: -210, y: 110, z: 160, scale: 200, material: nebulaMaterialPurple }
    ] as const;

    nebulaConfigs.forEach((config) => {
      const sprite = new THREE.Sprite(config.material);
      sprite.position.set(config.x, config.y, config.z);
      sprite.scale.set(config.scale, config.scale * 0.7, 1);
      sprite.material.rotation = Math.random() * Math.PI;
      nebulaSprites.push(sprite);
      scene.add(sprite);
    });

    const shootingStars: Array<{
      line: { geometry: { dispose: () => void }; material: { opacity: number; dispose: () => void }; position: { copy: (value: unknown) => void; set: (x: number, y: number, z: number) => void }; quaternion: { setFromUnitVectors: (a: unknown, b: unknown) => void } };
      start: { x: number; y: number; z: number };
      direction: { x: number; y: number; z: number };
      speed: number;
      life: number;
      age: number;
      tail: number;
    }> = [];

    const upVector = new THREE.Vector3(0, 1, 0);
    let nextShootingStarTime = THREE.MathUtils.randFloat(
      SHOOTING_STAR_MIN_DELAY,
      SHOOTING_STAR_MAX_DELAY
    );

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
        age: 0,
        tail
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

      stars.rotation.y = t * 0.005;
      starBand.rotation.y = 0.28 + t * 0.002;
      nebulaSprites[0].material.opacity = 0.15 + Math.sin(t * 0.22) * 0.02;
      nebulaSprites[1].material.opacity = 0.14 + Math.sin(t * 0.18 + 0.5) * 0.02;
      nebulaSprites[2].material.opacity = 0.13 + Math.sin(t * 0.2 + 0.8) * 0.015;
      nebulaSprites[3].material.opacity = 0.12 + Math.sin(t * 0.26 + 1.3) * 0.02;
      skyDome.material.opacity = 0.82 + Math.sin(t * 0.08) * 0.02;

      starsMaterial.opacity = 0.86 + Math.sin(t * 0.7) * 0.05;
      bandMaterial.opacity = 0.32 + Math.sin(t * 0.5 + 0.7) * 0.04;

      if (t > nextShootingStarTime && shootingStars.length < 3) {
        spawnShootingStar();
        nextShootingStarTime = t + THREE.MathUtils.randFloat(
          SHOOTING_STAR_MIN_DELAY,
          SHOOTING_STAR_MAX_DELAY
        );
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
          scene.remove(star.line as unknown as THREE.Object3D);
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
        scene.remove(star.line as unknown as THREE.Object3D);
        star.line.geometry.dispose();
        star.line.material.dispose();
      });

      controls.dispose();
      starGeometry.dispose();
      bandGeometry.dispose();
      starsMaterial.dispose();
      bandMaterial.dispose();
      nebulaTexturePink.dispose();
      nebulaTexturePurple.dispose();
      nebulaMaterialPink.dispose();
      nebulaMaterialPurple.dispose();
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
