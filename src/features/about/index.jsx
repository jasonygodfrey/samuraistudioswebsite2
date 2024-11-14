import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import PropTypes from 'prop-types';
import './styles.scss';
import Button from '../../components/button';
import AboutItem from './about-item';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

About.propTypes = {
    data: PropTypes.array,
    style: PropTypes.object,
};

// Function to load and render the GLTF model with animation handling
// Function to load and render the GLTF model in wireframe mode
function loadDragon(scene) {
    const loader = new GLTFLoader();
  
    loader.load(
      'blue_dragon/scene.gltf',
      (gltf) => {
        const dragon = gltf.scene;
        dragon.scale.set(20000, 20000, 20000);
        dragon.position.set(-220, -250, -500);
        dragon.rotation.set(0, 180, 0);
  
        // Set the dragon's material to wireframe
        dragon.traverse((child) => {
          if (child.isMesh) {
           // child.material.wireframe = true;
            child.material.color = new THREE.Color('white'); // Set wireframe color if needed
          }
        });
  
        scene.add(dragon);
      },
      undefined,
      (error) => {
        console.error('An error happened loading the GLTF model:', error);
      }
    );
  }

// Three.js setup inside React component
function DragonCanvas() {
    const canvasRef = useRef();
  
    useEffect(() => {
      // Set up scene, camera, and renderer
      const scene = new THREE.Scene();
  
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      camera.position.set(0, 0.5, 1); // Positioned to view the model
  
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight); // Set canvas size to full window
      renderer.setPixelRatio(window.devicePixelRatio); // Ensure high quality rendering

       // Set up post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Unreal Bloom Pass parameters
    const bloomParams = {
      strength: 1.0, // Intensity of the bloom
      radius: 0.4,   // Bloom radius
      threshold: 0.1 // Threshold luminance to apply bloom
    };

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      bloomParams.strength,
      bloomParams.radius,
      bloomParams.threshold
    );
    composer.addPass(bloomPass);

     const resizeRenderer = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
      
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', resizeRenderer);
      resizeRenderer();

      canvasRef.current.appendChild(renderer.domElement);
  
      // Lighting setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambientLight);
  
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 10, 7.5);
      scene.add(directionalLight);

        // Add a green circle at the dragon's position
    const circleGeometry = new THREE.CircleGeometry(3, 32);
    const circleMaterial = new THREE.MeshBasicMaterial({ color: 'green' });
    const greenCircle = new THREE.Mesh(circleGeometry, circleMaterial);
    greenCircle.rotation.x = -Math.PI / 2; // Rotate to lie flat on the ground
    greenCircle.position.set(0, -1, 0); // Same position as the dragon
    //scene.add(greenCircle);
  
      // Load the dragon model without animations
      loadDragon(scene);
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
              // Render the scene with bloom effect
      composer.render();
      };
      animate();
  
    // Clean up on component unmount
    return () => {
        window.removeEventListener('resize', resizeRenderer);
        renderer.dispose();
        scene.clear();
      };
    }, []);
    return (
        <div
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
          }}
        />
      );
      
  }
  
// Define dataAbout within the same file
const dataAbout = [
    {
        id: 1,
        element: <DragonCanvas />, // Use the isolated DragonCanvas component here
        class: 'active',
    },
    {
        id: 2,
        title: '3d 2',
        class: 'active',
        style: { textShadow: '2px 2px 5px black' }
    },
    {
        id: 3,
        title: '3d 3',
        class: 'active',
        style: { textShadow: '2px 2px 5px black' }
    },
];

function About(props) {
    const { data, style } = props;

    const [dataBlocks] = useState([
        {
            subtitle: '',
            title: 'About',
            desc: 'I am a full-stack software engineer specialized in crafting immersive web and game experiences. My work blends innovation and creativity, bringing your digital visions to life.',
        },
        {
            subtitle: '',
            title: 'Full-Stack Web Development',
            desc: 'Welcome to Samurai Studios – where cutting-edge technology meets creativity. Specializing in Three.js and React, we create immersive, interactive web experiences that push the boundaries of user engagement and digital art. From backend logic to 3D interactive frontends, we handle all aspects of web application development. Custom Web Applications Tailored solutions that meet the unique needs of your business. Interactive Animations Utilizing Three.js to create engaging visual experiences that bring your brand to life. React · JavaScript · Next.js · Three.js · Node.js · GitHub · Vercel · HTML · CSS · GLSL · Full-stack Web Development Python · Django · AWS · Docker · Git',
        },
        {
            subtitle: '',
            title: 'Game Engineering',
            desc: 'C++ MMORPG Game Server Development Hosted and managed MMORPG Massively multiplayer online game servers. Designed and balanced new gameplay elements, spells, and Player interaction dynamics using C++ and Lua. Managed MySQL databases for player authentication and game interactions. Team contributions using Jira and Git, implementing innovative gameplay features. Resolved server-side bugs and exploits to ensure quality player experiences. Developed APIs for streamlined account sign-ups and user interface enhancements. Meta Oculus Rift VR Demo Oculus Rift VR Demo Oculus, Unity, C##, C++ · SQL, UNREAL ENGINE 5, Blender',
        },
    ]);

    return (
        <>
          {dataBlocks.map((dataBlock, index) => (
            <section
              key={index}
              className="tf-section tf-about"
              style={{ backgroundColor: 'black', color: 'white', ...style }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-md-12">
                    <div
                      className="content-about mobie-40"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      <div className="tf-title st2">
                        <p className="h8 sub-title">{dataBlock.subtitle}</p>
                        <h4 className="title">{dataBlock.title}</h4>
                      </div>
                      <p>{dataBlock.desc}</p>
                    </div>
                  </div>
                  <div className="col-xl-7 col-md-12">
                    <div
                      className="wrap-about2"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      {/* Render DragonCanvas only if the title is 'About' */}
                      {dataBlock.title === 'About' && (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                          }}
                        >
                          <AboutItem
                            item={dataAbout.find((item) => item.id === 1)}
                          />
                          <div
                            style={{
                              width: '100%',
                              maxWidth: '900px',
                              height: '0',
                              paddingBottom: '75%', // Adjust the aspect ratio (height / width * 100%)
                              position: 'relative',
                            }}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                              }}
                            >
                              {dataAbout.find((item) => item.id === 1).element}
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Render other sections as AboutItem components */}
                      {dataBlock.title !== 'About' &&
                        dataAbout
                          .filter((item) => item.id !== 1)
                          .map((item) => (
                            <AboutItem key={item.id} item={item} />
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </>
      );
    }
    
    export default About;
