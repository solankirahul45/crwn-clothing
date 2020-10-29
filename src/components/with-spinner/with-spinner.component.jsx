import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = (WrapperComponent) => {
    const Spinner = ({ isloading, ...otherProps }) => {
        return isloading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrapperComponent {...otherProps} />
        )
    }   
    return Spinner; 
}
 
export default WithSpinner;