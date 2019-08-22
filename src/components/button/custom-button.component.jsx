import React from 'react';

const CustomButton =({children, isGoogleSignin,...otherProps})=>{
    return(
        <button className={`${isGoogleSignin ? 'google-sign-in': ''} custom-button`} 
        {...otherProps}
        >
            {children}
        </button>
    )
}

export default CustomButton;