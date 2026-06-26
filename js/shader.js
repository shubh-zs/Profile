// ─── Vertex Shader ───────────────────────────────────────────────────────────
const vertexShader = `
  uniform float uTime;
  uniform vec2  uMouse;
  uniform float uFrequency;
  uniform float uAmplitude;

  varying float vElevation;
  varying vec3  vPosition;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    float x = modelPosition.x;
    float z = modelPosition.z;

    // Wave 1 — primary grid wave
    float wave1 = sin(x * uFrequency + uTime * 0.75)
                * cos(z * uFrequency * 0.7 + uTime * 0.6);

    // Wave 2 — diagonal cross-wave
    float wave2 = sin((x + z) * uFrequency * 0.45 - uTime * 0.5) * 0.55;

    // Wave 3 — circular ripple from origin
    float dc = length(vec2(x, z));
    float wave3 = sin(dc * 0.7 - uTime * 1.1) * 0.35 / (dc * 0.12 + 1.0);

    float elevation = (wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * uAmplitude;

    // Mouse ripple
    vec2 mw = uMouse * 12.0;
    float dm = distance(vec2(x, z), mw);
    elevation += sin(dm * 2.5 - uTime * 5.0) * 0.45 / (dm * 0.35 + 1.0);

    modelPosition.y += elevation;

    vec4 viewPosition      = viewMatrix       * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position  = projectedPosition;
    gl_PointSize = 2.0;

    vElevation = elevation;
    vPosition  = modelPosition.xyz;
  }
`;

// ─── Fragment Shader ──────────────────────────────────────────────────────────
const fragmentShader = `
  uniform vec3  uColorA;
  uniform vec3  uColorB;
  uniform vec3  uColorC;
  uniform vec2  uMouse;

  varying float vElevation;
  varying vec3  vPosition;

  void main() {
    // Circular point — discard corners
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;

    // Map elevation → 0..1
    float t = clamp((vElevation / 0.8 + 1.0) * 0.5, 0.0, 1.0);
    vec3 color = t < 0.5
      ? mix(uColorA, uColorB, t * 2.0)
      : mix(uColorB, uColorC, (t - 0.5) * 2.0);

    // Mouse proximity glow
    vec2  mw   = uMouse * 12.0;
    float glow = 1.0 - smoothstep(0.0, 3.5, distance(vPosition.xz, mw));
    color = mix(color, uColorC, glow * 0.65);

    // Edge fade so grid dissolves at extremes
    float edgeFade = 1.0 - smoothstep(0.68, 1.0, length(vPosition.xz) / 12.0);

    float alpha = (1.0 - smoothstep(0.32, 0.5, d)) * 0.92 * edgeFade;
    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── Three.js bootstrap ──────────────────────────────────────────────────────
let scene, camera, renderer, particles, clock;
let mouse       = { x: 0, y: 0 };
let targetMouse = { x: 0, y: 0 };

function initShader() {
  const canvas = document.getElementById('webgl');

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 5, 10);
  camera.lookAt(0, 0, 0);

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setClearColor(0x050510, 1);

  // ── Particle grid (200 × 200 = 40 k points) ──
  const SEG  = 199;
  const geometry = new THREE.PlaneGeometry(22, 22, SEG, SEG);
  geometry.rotateX(-Math.PI / 2);          // lay flat on XZ plane

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime:      { value: 0 },
      uMouse:     { value: new THREE.Vector2(0, 0) },
      uFrequency: { value: 1.1 },
      uAmplitude: { value: 0.55 },
      uColorA:    { value: new THREE.Color('#0d0d2b') },   // deep navy
      uColorB:    { value: new THREE.Color('#6c63ff') },   // purple
      uColorC:    { value: new THREE.Color('#00d4ff') },   // cyan
    },
    transparent: true,
    depthWrite:  false,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  clock = new THREE.Clock();

  window.addEventListener('resize',    onResize);
  window.addEventListener('mousemove', onMouseMove);

  animate();
}

function onResize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}

function onMouseMove(e) {
  targetMouse.x =  (e.clientX / innerWidth  - 0.5) * 2;
  targetMouse.y = -(e.clientY / innerHeight - 0.5) * 2;
}

function animate() {
  requestAnimationFrame(animate);

  const t = clock.getElapsedTime();

  // Smooth mouse lag
  mouse.x += (targetMouse.x - mouse.x) * 0.045;
  mouse.y += (targetMouse.y - mouse.y) * 0.045;

  particles.material.uniforms.uTime.value = t;
  particles.material.uniforms.uMouse.value.set(mouse.x, mouse.y);

  // Slow camera drift
  camera.position.x = Math.sin(t * 0.04) * 1.8;
  camera.position.z = 10 + Math.cos(t * 0.06) * 1.2;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', initShader);
