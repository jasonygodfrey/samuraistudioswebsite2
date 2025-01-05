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
    
    // If you only want to remove className for `id === 1`:
    const classNames = item.id === 1 
        ? '' 
        : `box-text corner-box ${item.class || ''}`; 

    return (
        <div 
            key={item.id}
            className={classNames}
            style={item.style}
        >
            <div className="h7">{item.title}</div>
            <p>{item.desc}</p>
        </div>
    );
}

export default AboutItem;
