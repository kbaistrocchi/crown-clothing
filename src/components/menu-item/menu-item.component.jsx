import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl, size }) => (
    

    // can add the size as a class name passed from props
    <div className={`menu-item ${size}`}>
        <div className='background-image'
        // React passes a property called 'style' to each html tag
        // style can take an object value that can take props
        style={{
            backgroundImage: `url(${imgUrl})`
            // now, if our img url changes then our style changes
            // to make larger, can add a size prop that won't get used if no size prop exists
        }}></div>
        
        <div className='content'>  
            {/* seeing as {title is JS, we can use any JS methods we want on it} */}
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;