import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// This is a Higher Order Component (HOC)
    //  so it takes in another component (WrappedComponent) and 
    //  returns a new functional component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} /> 
    )
}

export default WithSpinner;

// This could also be written more explicity like so:

// const WithSpinner = WrappedComponent => {
//     const Spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer />
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...otherProps} /> 
//     );
// };
// return Spinner;
// };

