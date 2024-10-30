// setupScene.js

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
  bloomPass.strength = 0.812;
  bloomPass.radius = 0.35;
  composer.addPass(bloomPass);

  // Add Vignette Shader Pass
  const vignettePass = new ShaderPass(VignetteShader);
  vignettePass.uniforms['offset'].value = 0.5001; // Adjusts the extent of the vignette effect
  vignettePass.uniforms['darkness'].value = -9.00001; // Adjusts the darkness of the vignette
  composer.addPass(vignettePass);

  // Add lights
  const pointLight = new THREE.PointLight(0xffffff);
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
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
