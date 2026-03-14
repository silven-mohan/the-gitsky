import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import pineTreeUrl from './media/models/pine_tree.glb?url';
import grassUrl from './media/models/grass.glb?url';

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
  gradient.addColorStop(0.34, colorB);
  gradient.addColorStop(0.68, 'rgba(120, 90, 180, 0.08)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  // Layer extra bright lobes so nebula spots read with clearer contrast at runtime.
  const hotspotA = context.createRadialGradient(
    size * 0.34,
    size * 0.38,
    0,
    size * 0.34,
    size * 0.38,
    size * 0.3
  );
  hotspotA.addColorStop(0, 'rgba(255, 196, 246, 0.38)');
  hotspotA.addColorStop(1, 'rgba(255, 196, 246, 0)');
  context.fillStyle = hotspotA;
  context.fillRect(0, 0, size, size);

  const hotspotB = context.createRadialGradient(
    size * 0.66,
    size * 0.58,
    0,
    size * 0.66,
    size * 0.58,
    size * 0.28
  );
  hotspotB.addColorStop(0, 'rgba(186, 142, 255, 0.34)');
  hotspotB.addColorStop(1, 'rgba(186, 142, 255, 0)');
  context.fillStyle = hotspotB;
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
    scene.background = new THREE.Color(0x060f22);
    scene.fog = new THREE.FogExp2(0x0b1a38, 0.0042);

    const camera = new THREE.PerspectiveCamera(
      62,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1200
    );
    camera.position.set(0, 5.2, 8);

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
    controls.target.set(0, 30, 0);
    controls.update();

    const moonLight = new THREE.PointLight(0xa8c7ff, 1.1, 500);
    moonLight.position.set(-60, 95, -140);
    scene.add(moonLight);

    const skyFillLight = new THREE.HemisphereLight(0x5c78a8, 0x0a1a09, 0.32);
    scene.add(skyFillLight);

    const terrainLight = new THREE.DirectionalLight(0x8ca8d8, 0.22);
    terrainLight.position.set(45, 70, 35);
    scene.add(terrainLight);

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

    const terrainBaseY = -4.6;
    const terrainSize = 720;
    const terrainDetail = 190;
    const terrainHeightAt = (x: number, z: number) => {
      const waveA = Math.sin(x * 0.012) * 5.8;
      const waveB = Math.cos(z * 0.014) * 5.1;
      const ridge = Math.sin((x + z) * 0.007) * 3.9;
      const basin = Math.cos((x - z) * 0.004) * 1.8;
      const centerRise = Math.max(0, 1 - Math.sqrt(x * x + z * z) / 420) * 4.2;
      return terrainBaseY + waveA + waveB + ridge + basin + centerRise;
    };

    const terrainGeometry = new THREE.PlaneGeometry(
      terrainSize,
      terrainSize,
      terrainDetail,
      terrainDetail
    );
    terrainGeometry.rotateX(-Math.PI / 2);
    const terrainVertices = terrainGeometry.attributes.position;

    for (let index = 0; index < terrainVertices.count; index += 1) {
      const x = terrainVertices.getX(index);
      const z = terrainVertices.getZ(index);
      terrainVertices.setY(index, terrainHeightAt(x, z));
    }

    terrainGeometry.computeVertexNormals();

    const terrain = new THREE.Mesh(
      terrainGeometry,
      new THREE.MeshStandardMaterial({
        color: 0x1e4f27,
        roughness: 0.96,
        metalness: 0.02,
        flatShading: false
      })
    );
    scene.add(terrain);

    const treeCount = 30;
    const minTreeRadius = 54;
    const maxTreeRadius = 315;
    const treeLoader = new GLTFLoader();
    const treeInstances: Array<{ position: { set: (x: number, y: number, z: number) => void }; rotation: { y: number }; scale: { setScalar: (value: number) => void } }> = [];

    treeLoader.load(pineTreeUrl, (gltf: { scene: unknown }) => {
      const baseTree = gltf.scene;

      for (let index = 0; index < treeCount; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const radius = THREE.MathUtils.lerp(minTreeRadius, maxTreeRadius, Math.sqrt(Math.random()));
        const x = Math.cos(angle) * radius + THREE.MathUtils.randFloatSpread(20);
        const z = Math.sin(angle) * radius + THREE.MathUtils.randFloatSpread(20);
        const groundY = terrainHeightAt(x, z);

        const tree = clone(baseTree) as unknown as {
          position: { set: (tx: number, ty: number, tz: number) => void };
          rotation: { y: number };
          scale: { setScalar: (value: number) => void };
        };
        tree.position.set(x, groundY, z);
        tree.rotation.y = Math.random() * Math.PI * 2;
        tree.scale.setScalar(THREE.MathUtils.randFloat(0.048, 0.076));

        treeInstances.push(tree);
        scene.add(tree as never);
      }
    });

    // ── Grass GLB ─────────────────────────────────────────────────────
    const GRASS_INSTANCE_COUNT = 250;
    const grassLoader = new GLTFLoader();
    const grassInstances: Array<{
      position: { set: (x: number, y: number, z: number) => void };
      rotation: { y: number };
      scale: { setScalar: (v: number) => void };
    }> = [];

    grassLoader.load(grassUrl, (gltf: { scene: unknown }) => {
      const baseGrass = gltf.scene;
      for (let index = 0; index < GRASS_INSTANCE_COUNT; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const radius = THREE.MathUtils.randFloat(4, 280);
        const gx = Math.cos(angle) * radius;
        const gz = Math.sin(angle) * radius;
        const gy = terrainHeightAt(gx, gz);
        const grass = clone(baseGrass) as unknown as {
          position: { set: (tx: number, ty: number, tz: number) => void };
          rotation: { y: number };
          scale: { setScalar: (v: number) => void };
        };
        grass.position.set(gx, gy, gz);
        grass.rotation.y = Math.random() * Math.PI * 2;
        grass.scale.setScalar(THREE.MathUtils.randFloat(0.06, 0.12));
        grassInstances.push(grass);
        scene.add(grass as never);
      }
    });

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

    const nebulaTexturePink = createNebulaTexture('rgba(255, 153, 230, 0.27)', 'rgba(220, 124, 242, 0.15)');
    const nebulaTexturePurple = createNebulaTexture('rgba(208, 154, 255, 0.25)', 'rgba(140, 112, 250, 0.13)');
    const nebulaMaterialPink = new THREE.SpriteMaterial({
      map: nebulaTexturePink,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });
    const nebulaMaterialPurple = new THREE.SpriteMaterial({
      map: nebulaTexturePurple,
      transparent: true,
      opacity: 0.36,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending
    });

    const nebulaSprites: { material: { opacity: number } }[] = [];
    const nebulaConfigs = [
      { x: 130, y: 170, z: -210, scale: 240, material: nebulaMaterialPurple },
      { x: 225, y: 110, z: 92, scale: 170, material: nebulaMaterialPink }
    ] as const;

    nebulaConfigs.forEach((config) => {
      const sprite = new THREE.Sprite(config.material);
      sprite.position.set(config.x, config.y, config.z);
      sprite.scale.set(config.scale * 1.14, config.scale * 0.82, 1);
      sprite.material.rotation = Math.random() * Math.PI;
      sprite.renderOrder = 3;
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
      for (let index = 0; index < nebulaSprites.length; index += 1) {
        const sprite = nebulaSprites[index];
        const pulse = 0.29 + Math.sin(t * (0.2 + index * 0.03) + index * 0.7) * 0.08;
        sprite.material.opacity = pulse;
      }
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
          scene.remove(star.line as never);
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

      treeInstances.forEach((tree) => {
        scene.remove(tree as never);
      });

      grassInstances.forEach((g) => {
        scene.remove(g as never);
      });

      shootingStars.forEach((star) => {
        scene.remove(star.line as never);
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
