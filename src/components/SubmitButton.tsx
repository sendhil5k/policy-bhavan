import { FC } from "react";

// Reusable SubmitButton component
type submitbtnProps = {
  text:string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?:boolean;
  className?:string;
  style?:React.CSSProperties
}
const SubmitButton:FC<submitbtnProps> = ({ text, onClick, disabled = false, className = '', style = {} }) => {
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
