import React, { useState } from 'react'; 
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import './styles.scss';

SliderItem.propTypes = {
    item: PropTypes.object,
};

function SliderItem(props) {
    const { item } = props;
    const [isOpen, setOpen] = useState(false);
    const [hover, setHover] = useState(null);

    const buttonStyles = {
        color: 'white',
        textShadow: '0px 0px 8px rgba(173, 216, 230, 1)',  // Light blue text shadow
        backgroundColor: 'transparent',
        padding: '10px 20px',
        fontSize: '28px',
        fontFamily: '"Open Sans", sans-serif', // Font family set to Open Sans
        fontWeight: 600,  // Font weight set to 600
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, text-shadow 0.3s ease',
        border: 0,
    };

    const hoverStyles = {
        backgroundColor: 'linear-gradient(90deg, #ADD8E6, #1E90FF)',  // Light blue to dark blue transition
        textShadow: '0px 0px 12px rgba(30, 144, 255, 1)',  // Darker blue glow on hover
    };

    return (
        <div className={`box-slider ${item.classAction}`}>
            <img className='bg-slider' src={item.bgImg} alt="cybox" />
            <div className="box-slider__main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="content-box">
                                <h1 className="title">{item.title}</h1>
                                <p className="sub-title">{item.desc}</p>
                                <div className="wrap-btn">
                                    <button
                                        style={hover === 'about' ? { ...buttonStyles, ...hoverStyles } : buttonStyles}
                                        onMouseEnter={() => setHover('about')}
                                        onMouseLeave={() => setHover(null)}
                                        onClick={() => setOpen(true)}
                                    >
                                    
                                    </button>
                                    <button
                                        style={hover === 'work' ? { ...buttonStyles, ...hoverStyles } : buttonStyles}
                                        onMouseEnter={() => setHover('work')}
                                        onMouseLeave={() => setHover(null)}
                                        onClick={() => alert("Work Section")}
                                    >
                                        
                                    </button>
                                    <button
                                        style={hover === 'contact' ? { ...buttonStyles, ...hoverStyles } : buttonStyles}
                                        onMouseEnter={() => setHover('contact')}
                                        onMouseLeave={() => setHover(null)}
                                        onClick={() => alert("Contact Section")}
                                    >
                                        
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderItem;
