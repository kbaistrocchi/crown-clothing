import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl, size }) => (
    // React passes a property called 'style' to each html tag
    // style can take an object value that can take props
    <div 
    style={{
        backgroundImage: `url(${imgUrl})`
        // now, if our img url changes then our style changes
        // to make larger, can add a size prop that won't get used if no size prop exists
    }}
    // can add the size as a class name passed from props
    className={`menu-item ${size}`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;