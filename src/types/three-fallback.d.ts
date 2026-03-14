declare module 'three';
declare module 'three/examples/jsm/controls/OrbitControls.js';
declare module 'three/examples/jsm/loaders/GLTFLoader.js';
declare module 'three/examples/jsm/utils/SkeletonUtils.js';
declare module '*.glb?url' {
  const url: string;
  export default url;
}
