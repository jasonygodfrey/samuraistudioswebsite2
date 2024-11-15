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
function loadDragon(scene, camera) {
    const loader = new GLTFLoader();

    loader.load(
        'blue_dragon/scene.gltf',
        (gltf) => {
            const dragon = gltf.scene;
            dragon.scale.set(23000, 23000, 23000);
            dragon.position.set(0, -600, 0);
            dragon.rotation.set(0, -0.2, 0);

            dragon.traverse((child) => {
                if (child.isMesh) {
                    child.material.color = new THREE.Color('white');
                }
            });

            scene.add(dragon);

            if (gltf.animations && gltf.animations.length > 0) {
                const mixer = new THREE.AnimationMixer(dragon);
                const action = mixer.clipAction(gltf.animations[0]);
                action.play();
                const clock = new THREE.Clock();
                function animateDragon() {
                    requestAnimationFrame(animateDragon);
                    const delta = clock.getDelta();
                    mixer.update(delta);
                }
                animateDragon();
            }
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
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000
        );
        camera.position.set(0, -40, 700);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        const bloomParams = {
            strength: 0.40,
            radius: 0.4,
            threshold: 0.2
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
            renderer.setSize(width / 3, height / 3);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', resizeRenderer);
        resizeRenderer();

        canvasRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        loadDragon(scene, camera);

        const animate = () => {
            requestAnimationFrame(animate);
            composer.render();
        };
        animate();

        return () => {
            window.removeEventListener('resize', resizeRenderer);
            renderer.dispose();
            scene.clear();
        };
    }, []);
    return (
        <div ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '30%', height: '30%' }} />
    );
}

// Define dataAbout within the same file
const dataAbout = [
    {
        id: 1,
        element: <DragonCanvas />,
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
        title: '',
        desc: 'Carosel',
        class: 'active',
        style: { textShadow: '2px 2px 5px black' }
    },
     // New section for Additional Skills
     {
        id: 4,
        title: 'Projects/Education/Skills/Software Engineering',
        desc: 'Proficient in Agile methodologies, with experience in Scrum and Kanban. Skilled in DevOps practices, including CI/CD pipelines and containerization with Docker. Strong understanding of cloud services, particularly AWS and Azure. Experienced in database management with SQL and NoSQL databases. roficient in Agile methodologies, with experience in Scrum and Kanban. Skilled in DevOps practices, including CI/CD pipelines and containerization with Docker. Strong understandieraction dynamics using C++ and Lua. Managed MySQL databases for player authentication and game interactions. Team contributions using Jira and Git, implementing innovative gameplay features. Resolved server-side bugs and exploits to ensure quality player experiences. Developed APIs for streamlined account sign-ups and user interface enhancements. Meta Oculus Rift VR Demo Oculus Rift VR Demo Oculus, Unity, C##, C++ · SQL, UNREAL ENGINE 5, Blender',
        class: 'active',
        style: { textShadow: '2px 2px 5px black' },
    
    },
];

function About(props) {
    const { data, style } = props;

    const [dataBlocks] = useState([
        {
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
        {
            subtitle: '',
            title: 'Additional',
            desc: '',
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
                                                overflow: 'hidden',
                                                alignItems: 'center',
                                                width: '75%',
                                                height: '75%',
                                            }}
                                        >
                                            <AboutItem
                                                item={dataAbout.find((item) => item.id === 1)}
                                            />
                                            <div
                                                style={{
                                                    width: '50%',
                                                    maxWidth: '600px',
                                                    height: '0',
                                                    paddingBottom: '75%',
                                                    position: 'relative',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        top: '0',
                                                        left: '0',
                                                        width: '50%',
                                                        height: '50%',
                                                    }}
                                                >
                                                    {dataAbout.find((item) => item.id === 1).element}
                                                </div>
                                            </div>
                                        </div>
                                    )}
{/* Render 3D sections specifically for Full-Stack Web Development, Game Engineering, and Additional Skills */}
{dataBlock.title === 'Full-Stack Web Development' && (
    <AboutItem key={dataAbout[1].id} item={dataAbout[1]} />
)}
{dataBlock.title === 'Game Engineering' && (
    <AboutItem key={dataAbout[2].id} item={dataAbout[2]} />
)}
{dataBlock.title === 'Additional' && (
    <AboutItem key={dataAbout[3].id} item={dataAbout[3]} />
)}
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
