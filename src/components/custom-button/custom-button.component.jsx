import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

import './custom-button.styles.scss';

// this will be a Presentational component (same as stateless functional comp)

const CustomButton = ({ children, ...otherProps }) => (
    <CustomButtonContainer {...otherProps}> 
        {/* otherProps could include type='submit' for example */}

        {children}
            {/* children will be whatever is between the <CustomButton> tags
            i.e. the text we want on the button */}
    </CustomButtonContainer>
)

export default CustomButton;