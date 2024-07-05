import React from 'react';
import './textinput.css';

const TextInput = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div className="text-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
