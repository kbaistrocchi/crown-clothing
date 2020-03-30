import React from 'react';

import './custom-button.styles.scss';

// this will be a Presentational component (same as stateless functional comp)

const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>  
            {/* otherProps could include type='submit' for example */}
        {children}
            {/* children will be whatever is between the <CustomButton> tags
            i.e. the text we want on the button */}
    </button>
)

export default CustomButton;