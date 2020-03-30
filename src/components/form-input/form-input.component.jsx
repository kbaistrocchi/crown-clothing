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
            <label>{label}</label> :
            null
        }
    </div>
)

export default FormInput;

