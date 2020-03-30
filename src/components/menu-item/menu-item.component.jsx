import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => ( //history prop comes from Route

    <div 
    // can add the size as a class name passed from props
    className={`menu-item ${size}`} 
    // we get history and match from Route
    // push() is a function that comes with Route
    onClick={() => {history.push(`${match.url}${linkUrl}`)}}
    >
        <div className='background-image'
        // React passes a property called 'style' to each html tag
        // style can take an object value that can take props
        style={{
            backgroundImage: `url(${imageUrl})`
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

// this gives us access to props from Route (history, location, match)
export default withRouter(MenuItem);