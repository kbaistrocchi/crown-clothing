import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl }) => (
    // React passes a property called 'style' to each html tag
    // style can take an object value that can take props
    <div 
    style={{
        backgroundImage: `url(${imgUrl})`
        // now, if our img url changes then our style changes
    }}
    className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;