import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TIFFLoader } from 'three/examples/jsm/loaders/TIFFLoader.js';

const STAR_COUNT = 18000;

const SHOOTING_STAR_BURST_INTERVAL = 5;
const SHOOTING_STARS_PER_BURST = 4;
const MAX_ACTIVE_SHOOTING_STARS = 14;
const MIN_CAMERA_DISTANCE = 8.4;
const MAX_CAMERA_DISTANCE = 260;
const USER_STAR_MIN_SIZE = 8;
const USER_STAR_MAX_SIZE = 30;
const ZOOM_ANIMATION_DURATION_MS = 900;
const MOON_HINT_DELAY_MS = 90 * 1000;
const MOON_TEXTURE_URL = '/textures/lroc_color_poles_4k.tif';
const MOON_LANDING_IMAGE_URL = '/textures/moon.jpg';
const MOON_DISPLACEMENT_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg';

type UserStar = {
  username: string;
  star_count: number;
};

type UserStarsResponse = {
  users: UserStar[];
};

const envBackendUrl = (import.meta as any).env?.VITE_BACKEND_URL as string | undefined;
const isLocalHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const BACKEND_URL = envBackendUrl || (isLocalHost ? 'http://localhost:4000' : '');

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
function mapStarCountToSize(starCount: number) {
  // Log scaling keeps extreme star counts visually balanced while preserving growth.
  const safeCount = Math.max(0, starCount);
  const normalized = THREE.MathUtils.clamp(Math.log10(safeCount + 1) / 4, 0, 1);
  return THREE.MathUtils.lerp(USER_STAR_MIN_SIZE, USER_STAR_MAX_SIZE, normalized);
}

function drawStarPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, outerRadius: number, innerRadius: number) {
  ctx.beginPath();
  for (let index = 0; index < 10; index += 1) {
    const angle = -Math.PI / 2 + (index * Math.PI) / 5;
    const radius = index % 2 === 0 ? outerRadius : innerRadius;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
}

function createGlowStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return null;
  }

  const center = canvas.width / 2;

  const glow = ctx.createRadialGradient(center, center, 10, center, center, 120);
  glow.addColorStop(0, 'rgba(255, 245, 188, 0.95)');
  glow.addColorStop(0.4, 'rgba(255, 220, 102, 0.45)');
  glow.addColorStop(1, 'rgba(255, 170, 40, 0)');

  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.shadowColor = '#ffd95b';
  ctx.shadowBlur = 18;
  ctx.fillStyle = '#ffd95b';
  drawStarPath(ctx, center, center, 52, 24);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function hashString(text: string) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getStarPosition(username: string, index: number, total: number) {
  const hash = hashString(username);
  const baseAngle = (index / Math.max(total, 1)) * Math.PI * 2;
  const jitter = ((hash % 1000) / 1000) * 0.7;
  const radius = 52 + (hash % 28);
  const y = -20 + ((hash >> 3) % 44);

  return new THREE.Vector3(
    Math.cos(baseAngle + jitter) * radius,
    y,
    Math.sin(baseAngle + jitter) * radius
  );
}

function App() {
  const canvasWrapRef = useRef<HTMLDivElement | null>(null);
  const moonHintRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const userStarEntriesRef = useRef<Array<{ data: UserStar; baseSize: number; points: any }>>([]);
  const [isCardOpen, setIsCardOpen] = useState(true);
  const [selectedUserStar, setSelectedUserStar] = useState<UserStar | null>(null);
  const [availableUsers, setAvailableUsers] = useState<UserStar[]>([]);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [userSearchFeedback, setUserSearchFeedback] = useState('');
  const [isInitialStarHintVisible, setIsInitialStarHintVisible] = useState(true);
  const [isMoonHintVisible, setIsMoonHintVisible] = useState(false);
  const [isMoonLandingVisible, setIsMoonLandingVisible] = useState(false);
  const moonLandingVisibleRef = useRef(false);
  const hasDiscoveredMoonLandingRef = useRef(false);
  const moonHintVisibleRef = useRef(false);

  const zoomAnimationRef = useRef<{
    active: boolean;
    startTime: number;
    duration: number;
    fromPosition: any;
    toPosition: any;
    fromTarget: any;
    toTarget: any;
  } | null>(null);

  const startCameraTransition = (destinationPosition: any, destinationTarget: any) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (!camera || !controls) {
      return;
    }

    zoomAnimationRef.current = {
      active: true,
      startTime: performance.now(),
      duration: ZOOM_ANIMATION_DURATION_MS,
      fromPosition: camera.position.clone(),
      toPosition: destinationPosition.clone(),
      fromTarget: controls.target.clone(),
      toTarget: destinationTarget.clone()
    };
  };

  const zoomToUserStar = (username: string) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const entries = userStarEntriesRef.current;

    if (!camera || !controls || entries.length === 0) {
      return;
    }

    const entry = entries.find((item) => item.data.username.toLowerCase() === username.toLowerCase());
    if (!entry) {
      return;
    }

    const target = entry.points.position.clone();
    const viewDirection = new THREE.Vector3();
    camera.getWorldDirection(viewDirection);

    const focusDistance = THREE.MathUtils.clamp(entry.baseSize * 2.2, MIN_CAMERA_DISTANCE + 2, 42);
    const cameraPosition = target.clone().add(viewDirection.multiplyScalar(-focusDistance));

    startCameraTransition(cameraPosition, target);
  };

  const resetFocusToCenter = () => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (!camera || !controls) {
      return;
    }

    const center = new THREE.Vector3(0, 0, 0);
    const cameraOffset = camera.position.clone().sub(controls.target);
    const destinationPosition = center.clone().add(cameraOffset);

    startCameraTransition(destinationPosition, center);
  };

  const handleUserSearch = () => {
    const trimmedQuery = userSearchQuery.trim();
    if (!trimmedQuery) {
      setUserSearchFeedback('Please enter a username to search.');
      setSelectedUserStar(null);
      return;
    }

    const foundUser = availableUsers.find(
      (user) => user.username.toLowerCase() === trimmedQuery.toLowerCase()
    );

    if (!foundUser) {
      setUserSearchFeedback(`No user found for "${trimmedQuery}".`);
      setSelectedUserStar(null);
      return;
    }

    setUserSearchFeedback('');
    setSelectedUserStar(foundUser);
    zoomToUserStar(foundUser.username);
  };

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      if (!hasDiscoveredMoonLandingRef.current) {
        setIsMoonHintVisible(true);
      }
    }, MOON_HINT_DELAY_MS);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    moonHintVisibleRef.current = isMoonHintVisible;
  }, [isMoonHintVisible]);

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
    cameraRef.current = camera;

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
    controls.zoomSpeed = 2.4;
    controls.rotateSpeed = 0.38;
    controls.minPolarAngle = 0.05;
    controls.maxPolarAngle = Math.PI - 0.05;
    controls.target.set(0, 0, 0);

    const moonLight = new THREE.PointLight(0xffffff, 1.2, 500);
    moonLight.position.set(0, 0, 0);
    scene.add(moonLight);

    const skyFillLight = new THREE.HemisphereLight(0xffffff, 0x0b0b0b, 0.22);
    scene.add(skyFillLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.24);
    backLight.position.set(75, 40, -120);
    scene.add(backLight);

    const textureLoader = new THREE.TextureLoader();
    const tiffLoader = new TIFFLoader();
    const moonTexture = tiffLoader.load(MOON_TEXTURE_URL);
    moonTexture.colorSpace = THREE.SRGBColorSpace;
    const moonDisplacementTexture = textureLoader.load(MOON_DISPLACEMENT_URL);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(7.6, 64, 64),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: moonTexture || undefined,
        displacementMap: moonDisplacementTexture || undefined,
        displacementScale: 0.2,
        bumpMap: moonDisplacementTexture || undefined,
        bumpScale: 0.09,
        roughness: 0.96,
        metalness: 0,
        emissive: 0x111111,
        emissiveIntensity: 0.05
      })
    );
    moon.position.copy(moonLight.position);
    scene.add(moon);

    controls.target.copy(moon.position);
    controls.update();

    const userStarsGroup = new THREE.Group();
    scene.add(userStarsGroup);

    const starTexture = createGlowStarTexture();
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 8;
    const pointer = new THREE.Vector2();

    const userStarEntries: Array<{
      points: any;
      material: any;
      geometry: any;
      data: UserStar;
      baseSize: number;
      basePosition: any;
      twinkleOffset: number;
    }> = [];
    userStarEntriesRef.current = userStarEntries as Array<{ data: UserStar; baseSize: number; points: any }>;

    const clearUserStars = () => {
      for (let index = userStarEntries.length - 1; index >= 0; index -= 1) {
        const entry = userStarEntries[index];
        userStarsGroup.remove(entry.points);
        entry.geometry.dispose();
        entry.material.dispose();
      }
      userStarEntries.length = 0;
    };

    const createUserStarPoint = (user: UserStar, index: number, total: number) => {
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3));

      const baseSize = mapStarCountToSize(user.star_count);
      const material = new THREE.PointsMaterial({
        color: 0xffd95b,
        map: starTexture || undefined,
        transparent: true,
        opacity: 0.96,
        depthWrite: false,
        sizeAttenuation: true,
        size: baseSize,
        alphaTest: 0.06,
        blending: THREE.AdditiveBlending
      });

      const points = new THREE.Points(geometry, material);
      const basePosition = getStarPosition(user.username, index, total);
      points.position.copy(basePosition);
      points.userData = user;
      userStarsGroup.add(points);

      userStarEntries.push({
        points,
        material,
        geometry,
        data: user,
        baseSize,
        basePosition,
        twinkleOffset: ((index + 1) * 0.47) % (Math.PI * 2)
      });
    };

    const loadUserStars = async () => {
      const token = localStorage.getItem('auth_token');
      if (!BACKEND_URL) {
        setSelectedUserStar(null);
        return;
      }

      try {
        const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
        const response = await fetch(`${BACKEND_URL}/api/stars`, { headers });

        if (!response.ok) {
          setSelectedUserStar(null);
          return;
        }

        const payload = (await response.json()) as UserStarsResponse;
        const users = Array.isArray(payload.users) ? payload.users : [];
        const normalizedUsers = users.map((user) => ({
          username: user.username,
          star_count: Number(user.star_count) || 0
        }));

        setAvailableUsers(normalizedUsers);

        clearUserStars();
        normalizedUsers.forEach((user, index) => {
          createUserStarPoint(
            user,
            index,
            normalizedUsers.length
          );
        });
      } catch {
        // Silent failure keeps the world usable even when auth data is unavailable.
        setAvailableUsers([]);
        setSelectedUserStar(null);
      }
    };

    const pickUserStar = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      const intersects = raycaster.intersectObjects(
        userStarEntries.map((entry) => entry.points),
        false
      );

      if (intersects.length === 0) {
        return null;
      }

      const hit = intersects[0].object;
      const entry = userStarEntries.find((star) => star.points === hit);
      return entry || null;
    };

    const handleCanvasClick = (event: MouseEvent) => {
      const selected = pickUserStar(event.clientX, event.clientY);
      if (selected) {
        setUserSearchFeedback('');
        setSelectedUserStar(selected.data);
        zoomToUserStar(selected.data.username);
        return;
      }

      resetFocusToCenter();

      setUserSearchFeedback('');
      setSelectedUserStar(null);
    };

    const handleCanvasMove = (event: MouseEvent) => {
      const selected = pickUserStar(event.clientX, event.clientY);
      renderer.domElement.style.cursor = selected ? 'pointer' : 'default';
    };

    renderer.domElement.addEventListener('click', handleCanvasClick);
    renderer.domElement.addEventListener('mousemove', handleCanvasMove);

    loadUserStars();

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

      for (let index = 0; index < userStarEntries.length; index += 1) {
        const entry = userStarEntries[index];
        entry.material.size = entry.baseSize * (1 + Math.sin(t * 1.5 + entry.twinkleOffset) * 0.12);
        entry.points.position.x = entry.basePosition.x + Math.sin(t * 0.16 + entry.twinkleOffset) * 1.3;
        entry.points.position.y = entry.basePosition.y + Math.cos(t * 0.18 + entry.twinkleOffset) * 0.8;
        entry.points.position.z = entry.basePosition.z + Math.cos(t * 0.15 + entry.twinkleOffset) * 1.3;
      }

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

      const zoomAnimation = zoomAnimationRef.current;
      if (zoomAnimation?.active) {
        const elapsed = performance.now() - zoomAnimation.startTime;
        const progress = THREE.MathUtils.clamp(elapsed / zoomAnimation.duration, 0, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        camera.position.lerpVectors(zoomAnimation.fromPosition, zoomAnimation.toPosition, eased);
        controls.target.lerpVectors(zoomAnimation.fromTarget, zoomAnimation.toTarget, eased);

        if (progress >= 1) {
          zoomAnimation.active = false;
        }
      }

      const moonDistance = camera.position.distanceTo(moon.position);
      const shouldShowMoonLanding = moonDistance <= MIN_CAMERA_DISTANCE + 0.7;
      if (shouldShowMoonLanding !== moonLandingVisibleRef.current) {
        moonLandingVisibleRef.current = shouldShowMoonLanding;
        setIsMoonLandingVisible(shouldShowMoonLanding);
      }

      if (shouldShowMoonLanding && !hasDiscoveredMoonLandingRef.current) {
        hasDiscoveredMoonLandingRef.current = true;
        setIsMoonHintVisible(false);
      }

      if (moonHintRef.current && moonHintVisibleRef.current && !shouldShowMoonLanding) {
        const hintPosition = moon.position.clone().project(camera);
        const hintX = (hintPosition.x * 0.5 + 0.5) * mount.clientWidth;
        const hintY = (-hintPosition.y * 0.5 + 0.5) * mount.clientHeight - 96;

        moonHintRef.current.style.left = `${THREE.MathUtils.clamp(hintX, 24, mount.clientWidth - 24).toFixed(1)}px`;
        moonHintRef.current.style.top = `${THREE.MathUtils.clamp(hintY, 24, mount.clientHeight - 24).toFixed(1)}px`;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('click', handleCanvasClick);
      renderer.domElement.removeEventListener('mousemove', handleCanvasMove);

      shootingStars.forEach((star) => {
        scene.remove(star.line);
        star.line.geometry.dispose();
        star.line.material.dispose();
      });

      clearUserStars();

      controls.dispose();
      controlsRef.current = null;
      cameraRef.current = null;
      userStarEntriesRef.current = [];
      starGeometry.dispose();
      starsMaterial.dispose();

      if (starTexture) {
        starTexture.dispose();
      }

      if (moonTexture) {
        moonTexture.dispose();
      }

      if (moonDisplacementTexture) {
        moonDisplacementTexture.dispose();
      }

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

    const isOrbitEnabled = !isCardOpen || isMoonLandingVisible;
    controls.enabled = isOrbitEnabled;
    controls.enableZoom = isOrbitEnabled;
  }, [isCardOpen, isMoonLandingVisible]);

  useEffect(() => {
    if (selectedUserStar && isInitialStarHintVisible) {
      setIsInitialStarHintVisible(false);
    }
  }, [selectedUserStar, isInitialStarHintVisible]);

  return (
    <main className="page">
      <div className="canvas-wrap is-visible" ref={canvasWrapRef} />
      <section className={`world-card ${!isCardOpen || isMoonLandingVisible ? 'world-card--hidden' : ''}`}>
        <h2>The GitSky</h2>
        <form
          className="world-card__search"
          onSubmit={(event) => {
            event.preventDefault();
            handleUserSearch();
          }}
        >
          <input
            type="text"
            value={userSearchQuery}
            onChange={(event) => {
              setUserSearchQuery(event.target.value);
              if (userSearchFeedback) {
                setUserSearchFeedback('');
              }
            }}
            placeholder="Enter the username.."
            aria-label="Search user by username"
          />
          <button type="submit">Search</button>
        </form>
        {userSearchFeedback ? <p className="world-card__search-feedback">{userSearchFeedback}</p> : null}
        <div className="world-card__actions">
          <button type="button" onClick={() => { window.location.href = '/login'; }}>
            🔐 Login/Create
          </button>
          <button
            className="world-card__orbit"
            type="button"
            onClick={() => setIsCardOpen(false)}
          >
            🚀 Orbit
          </button>
        </div>
      </section>
      <button
        className={`world-card-toggle ${!isCardOpen && !isMoonLandingVisible ? 'world-card-toggle--visible' : ''}`}
        type="button"
        aria-label="Open controls card"
        onClick={() => setIsCardOpen(true)}
      >
        ˅
      </button>
      <div
        ref={moonHintRef}
        className={`moon-discovery-hint ${isMoonHintVisible && !isMoonLandingVisible ? 'moon-discovery-hint--visible' : ''}`}
      >
        Zoom in to reveal the project story.
      </div>
      <section className={`moon-landing ${isMoonLandingVisible ? 'moon-landing--visible' : ''}`}>
        <img src={MOON_LANDING_IMAGE_URL} alt="Moon landing" />
        <div className="moon-landing__description">
          <h3>The GitSky</h3>
          <p>
            The GitSky maps GitHub users into a living constellation where each star reflects real repository impact.
            Search for a username, jump across stellar clusters, and explore the project from orbit down to the moon.
          </p>
        </div>
      </section>
      {(selectedUserStar || isInitialStarHintVisible) && !isMoonLandingVisible && (
        <section className="star-info-panel">
          {selectedUserStar ? (
            <>
              <a
                className="star-info-panel__username"
                href={`https://github.com/${selectedUserStar.username}`}
                target="_blank"
                rel="noreferrer"
              >
                👤 {selectedUserStar.username}
              </a>
              <span>⭐ Stars: {selectedUserStar.star_count}</span>
            </>
          ) : (
            <span>Click a user star to view username and star count.</span>
          )}
        </section>
      )}
    </main>
  );
}

export default App;
