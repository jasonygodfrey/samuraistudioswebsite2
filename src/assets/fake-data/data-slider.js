import bgImg1 from '../images/background/bg-1.jpg';
import bgImg2 from '../images/background/bg-3.jpg';
import bgImg3 from '../images/background/bg-4.jpg';
import img1 from '../images/common/itemslider.png';


const dataSlider = [
    {
        id: 1,
        title: 'The Future of Web Development',
        desc : 'I am a full-stack software engineer specializing in creating immersive web and game experiences. My work blends innovation and creativity, bringing your digital visions to life.',
        bgImg: bgImg1,
        img : img1
    },
    {
        id: 2,
        title: 'CYbox nft collectionS for everyone',
        desc : 'Nulla ornare sagittis placerat nunc sit tempus enim. Accumsan pellentesque ipsum felis tristique at proin vel turpis.',
        bgImg: bgImg2,
        classAction: 'two'
    },
    {
        id: 3,
        title: (
            <>
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <img
                        src="/logo69.png"
                        alt="Logo 69"
                        style={{
                            width: '550px',
                            height: 'auto',
                            filter: 'drop-shadow(0px 0px 4px rgba(0, 0, 0, 1.6))',
                            display: 'block',  // Ensures image takes its own line
                            margin: '25px auto'
                        }}
                    />
                </div>
               
            </>
        ),
        
        desc: (
            <>
                 <div
                    style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        fontSize: '24px',
                        color: '#fff',  // Adjust color if needed
                        filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 2.6))',  // Same shadow effect as image
                    }}
                >
                    Game and Web Development
                </div>
               
            </>
        ),
        bgImg: bgImg3,
        classAction: 'three'
    }
,    
    {
        id: 4,
        title: 'CYbox nft collectionS for everyone',
        desc : 'Nulla ornare sagittis placerat nunc sit tempus enim. Accumsan pellentesque ipsum felis tristique at proin vel turpis.',
        bgImg: bgImg1,
        img : img1
    },
    {
        id: 5,
        title: 'CYbox nft collectionS for everyone',
        desc : 'Nulla ornare sagittis placerat nunc sit tempus enim. Accumsan pellentesque ipsum felis tristique at proin vel turpis.',
        bgImg: bgImg2,
        classAction: 'two'
    },

]

export default dataSlider;