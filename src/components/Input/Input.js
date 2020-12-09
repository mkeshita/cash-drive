import React from 'react';
import './Input.scss';

function Input({value, type, placeholder, handlechange}) {
  return (
    <>
      <input
        type={type || 'text'}
        className='custom-input'
        value={value}
        onChange={(e) => handlechange(e)}
        placeholder={placeholder || 'Enter Amount...'}
      />
    </>
  );
}

export default Input;
