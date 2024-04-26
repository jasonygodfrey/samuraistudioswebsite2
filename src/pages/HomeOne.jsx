import React, { useRef, useState, useEffect } from 'react';

// Import styles and components
import '../scss/components/section.scss';
import '../scss/components/box.scss';
import Slider from '../components/slider';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about';
import Project from '../features/project';
import dataProject from '../assets/fake-data/dataProject';
import dataAbout from '../assets/fake-data/data-about';
import RoadMap from '../features/roadmap';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Work from '../features/work';
import dataWork from '../assets/fake-data/data-work';
import Team from '../features/team';
import dataTeam from '../assets/fake-data/data-team';
import Blog from '../features/blog';
import dataBlog from '../assets/fake-data/data-blog';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import FAQ from '../features/faq';
import dataFaq from '../assets/fake-data/data-faq';
import ThreeBackground from '../components/ThreeBackground';

function HomeOne(props) {
    const threeBackgroundRef = useRef(null);

    // State to hold the dynamic style for the Project component
    const [projectStyle, setProjectStyle] = useState({ position: 'relative', top: '-400px' });

    // Effect to update style based on window size
    useEffect(() => {
        const updateStyle = () => {
            // Assuming 'mobile' as screens smaller than or equal to 768px width
            if (window.innerWidth <= 768) {
                setProjectStyle({ position: 'relative', top: '-150px' }); // Adjust top value as needed
            } else {
                setProjectStyle({ position: 'relative', top: '-400px' });
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', updateStyle);

        // Call the function to set initial style
        updateStyle();

        // Clean up listener on component unmount
        return () => {
            window.removeEventListener('resize', updateStyle);
        };
    }, []);

    const homeStyle = {
        position: 'relative',
        zIndex: 1,
    };

    return (
        <div className='home-1' style={homeStyle}>
            <ThreeBackground style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
                zIndex: -1,
                objectFit: 'cover',
            }} />
            <Slider data={dataSlider} />

            <div style={projectStyle}>
                <Project data={dataProject} />
            </div>
            <About data={dataAbout} style={{ position: 'relative', top: '-150px' }} />
            <Blog data={dataBlog} />
            {/* Uncomment these sections if needed */}
            {/* <RoadMap data={dataRoadmap} /> */}
            {/* <Work data={dataWork} /> */}
            {/* <Team data={dataTeam} /> */}
            {/* <Partner data={dataPartner} /> */}
            {/* <FAQ data={dataFaq} /> */}
        </div>
    );
}

export default HomeOne;
