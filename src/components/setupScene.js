import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader.js';

export function setupScene(rendererRef) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: rendererRef.current,
    antialias: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.position.setZ(30);
  camera.position.setX(-3);

  // Create composer for post-processing
  const composer = new EffectComposer(renderer);
  composer.setSize(window.innerWidth, window.innerHeight);

  // Add RenderPass
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  // Add UnrealBloomPass
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );
  bloomPass.threshold = 0.21;
  bloomPass.strength = 0.252;
  bloomPass.radius = -0.25;
  composer.addPass(bloomPass);

  // Add Vignette Shader Pass
  const vignettePass = new ShaderPass(VignetteShader);
  vignettePass.uniforms['offset'].value = 0.4001;
  vignettePass.uniforms['darkness'].value = -16.00001;
  //composer.addPass(vignettePass);

  // Custom Desaturation Shader Pass
  const desaturationShader = {
    uniforms: {
      tDiffuse: { value: null },
      desaturationAmount: { value: 0.3 }, // Adjust this value (0 to 1) to control desaturation
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float desaturationAmount;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        float gray = dot(color.rgb, vec3(0.3, 0.59, 0.11)); // Standard grayscale conversion
        color.rgb = mix(color.rgb, vec3(gray), desaturationAmount);
        gl_FragColor = color;
      }
    `,
  };

  const desaturationPass = new ShaderPass(desaturationShader);
  composer.addPass(desaturationPass);

  // Custom Brightness Shader Pass
  const brightnessShader = {
    uniforms: {
      tDiffuse: { value: null },
      brightness: { value: 0. }, // Adjust this value (default 1.0) to control brightness
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float brightness;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        color.rgb *= brightness; // Apply brightness factor
        gl_FragColor = color;
      }
    `,
  };

  const brightnessPass = new ShaderPass(brightnessShader);
  brightnessPass.uniforms['brightness'].value = 1.5; // Adjust to desired brightness level
  composer.addPass(brightnessPass);

  // Add lights
  const pointLight = new THREE.PointLight(0xffffff);
  const ambientLight = new THREE.AmbientLight(0xffffff, 16.8);
  scene.add(pointLight, ambientLight);

  // Set background texture
  const spaceTexture = new THREE.TextureLoader().load('space.jpg');
  scene.background = spaceTexture;

  // Handle window resize
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  return { scene, camera, composer, renderer };
}
