import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input 
            className='form-input' 
            onChange={handleChange}
            {...otherProps} 
        />
        {/* selectively render a label element if the props was passed  */}
        {
            label ?
            // we want to dynamically add a className if a user has typed something in the input
            // this way we can shrink the size of the label in css
            // so we check that the user input (value) exists
            <label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
                {label}
            </label> :   
            null
        }
    </div>
)

export default FormInput;

