// Create.js
import React from 'react';
import './Create.css';

const Create = ({ placeholder, required = false, onChange, value, type }) => {
  return (
    <input 
      type={type}
      onChange={onChange} 
      placeholder={placeholder} 
      required={required} 
      value={value} 
      className='ui-create' 
    />
  );
};

export default Create;
