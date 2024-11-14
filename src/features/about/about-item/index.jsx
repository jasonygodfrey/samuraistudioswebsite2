import React from 'react';
import PropTypes from 'prop-types';

AboutItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        class: PropTypes.string,
        style: PropTypes.object,
    }).isRequired,
};

function AboutItem(props) {
    const { item } = props;

    return (
        <div 
            key={item.id} 
            className={`box-text corner-box ${item.class}`} 
            style={item.style} // Apply item.style here
        >
            <div className="h7">{item.title}</div>
            <p>{item.desc} </p>
           

            
        </div>

        
        
    );
}

export default AboutItem;
