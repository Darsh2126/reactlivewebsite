import React from 'react';
import { useState } from 'react';
import './Forms.scss';

const FormInput = (props) => {

    const[focused, setFocused] = useState(false);

    const{errorMessage, onChange, id, ...inputProps} = props;
    
    const handleFocus =(e) =>{
        setFocused(true);
    }
  
    return (
    <>
        <input 
        className="Fieldtext"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        />
        <span>{errorMessage}</span>    
    </>
  )
}

export default FormInput