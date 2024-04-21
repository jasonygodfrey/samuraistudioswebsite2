
import React, { useRef } from 'react';

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
    // Define threeBackgroundRef here
    const threeBackgroundRef = useRef(null);

    // Inline styles for the home-1 container
    const homeStyle = {
        position: 'relative',
        zIndex: 1,
        // Add any other styles you need for home-1 here
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
                zIndex: -1, // Ensures the Three.js canvas stays in the background
                objectFit: 'cover', // Cover the screen without losing aspect ratio
            }} />
            <Slider data={dataSlider} />  


            <div style={{ position: 'relative', top: '-400px' }}>
  <Project data={dataProject} />
</div>


 <About data={dataAbout} /> 

<Blog data={dataBlog} />

           {/*  <RoadMap data={dataRoadmap} />  */}
          {/*   <Work data={dataWork} /> */}
          {/*   <Team data={dataTeam} /> */}
            
          {/*  <Partner data={dataPartner} /> */}
          {/*   <FAQ data={dataFaq} /> */}
          </div>
    );
}

export default HomeOne;