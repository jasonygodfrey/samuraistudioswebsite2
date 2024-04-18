import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const ThreeBackground = forwardRef((props, ref) => {
  const mountRef = useRef(null);
  let mixers = [];

  useImperativeHandle(ref, () => ({
    playDragonAnimationOnce: () => {
      const dragonMixer = mixers[0]; // Adjust this based on your actual logic
      if (dragonMixer && dragonMixer._actions && dragonMixer._actions.length > 0) {
        const action = dragonMixer.clipAction(dragonMixer._actions[0]._clip);
        action.reset();
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.play();
      }
    }
  }));

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Camera initial rotation
    const initialBeta = -0;
    const degtorad = Math.PI / 180;
    camera.rotation.x = initialBeta * degtorad;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.21;
    bloomPass.strength = 1.12;
    bloomPass.radius = 0.55;
    composer.addPass(bloomPass);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.0);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    

    loader.load('/wonderful_world/scene.gltf', (gltf) => {
      scene.add(gltf.scene);
      gltf.scene.scale.set(80, 80, 80);
      gltf.scene.position.set(0, -0, -400);
      gltf.scene.rotation.set(0.65, 0, 0);

      if (gltf.animations && gltf.animations.length > 0) {
        const dragonMixer = new THREE.AnimationMixer(gltf.scene);
        const windAnimation = gltf.animations[0]; // Assuming this is the animation you want to slow down
        const action = dragonMixer.clipAction(windAnimation);
        action.play();
        action.setEffectiveTimeScale(0.1); // Set the speed to half
        mixers.push(dragonMixer);
      }
    });

    camera.position.z = 5;

    const clock = new THREE.Clock();
    const animate = function () {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixers.forEach((mixer) => mixer.update(delta));
      composer.render(delta);
    };
    animate();

    // Define the function in a scope accessible to both the if block and the return function
    const onDocumentMouseMove = (event) => {
      var mouseX = (event.clientX - window.innerWidth / 2) / 100;
      var mouseY = (event.clientY - window.innerHeight / 2) / 100;
      camera.position.x += (mouseX - camera.position.x) * 0.1;
      camera.position.y += (-mouseY - camera.position.y) * 0.1;
      camera.lookAt(scene.position);
    };

    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isMobile) {
      document.addEventListener('mousemove', onDocumentMouseMove, false);
    }

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      composer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mixers = [];
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ ...props.style, width: '100%', height: '100%' }} />
  );
});

export default ThreeBackground;
