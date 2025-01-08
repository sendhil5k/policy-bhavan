import React from 'react';

// Reusable SubmitButton component
const SubmitButton = ({ text, onClick, disabled = false, className = '', style = {} }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`submit-button ${className}`}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: disabled ? '#ccc' : '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style, // Allow inline styles to override defaults
      }}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
