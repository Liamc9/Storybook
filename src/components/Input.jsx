// src/components/Input.jsx

import React, { useState, useEffect } from 'react';

const Input = ({ name, type, value, onChange, colour, label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  // Re-render the component when 'colour' changes
  useEffect(() => {
    if (isFocused) {
      setRenderKey((prevKey) => prevKey + 1);
    }
  }, [colour, isFocused]);

  const inputStyle = {
    borderColor: isFocused ? colour : '#D1D5DB', // Default border color when not focused
  };

  const labelStyle = {
    color: isFocused ? colour : '#6B7280', // Default label color when not focused
  };

  const inputElement =
    type === 'textarea' ? (
      <textarea
        key={renderKey} // Use the key prop to force re-render
        name={name}
        id={name}
        required
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full rounded-lg border-2 bg-transparent p-2 text-base outline-none"
        style={inputStyle}
      />
    ) : (
      <input
        key={renderKey} // Use the key prop to force re-render
        name={name}
        id={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer w-full rounded-lg border-2 bg-transparent p-2 text-base outline-none"
        style={inputStyle}
      />
    );

  return (
    <div className="relative my-4 font-sans">
      {inputElement}
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-0 m-1 ml-2.5 transform bg-white p-1.5 text-base text-gray-500 transition-transform duration-300 ease-in-out peer-focus:ml-5 peer-focus:-translate-y-[70%] peer-focus:scale-90 peer-focus:px-1 peer-focus:py-0 ${
          value ? 'ml-5 translate-y-[-70%] scale-90 px-1 py-0' : ''
        }`}
        style={labelStyle}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
