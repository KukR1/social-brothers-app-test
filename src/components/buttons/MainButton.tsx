import React from 'react';

interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const MainButton: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        disabled ? 'bg-slate-800' : 'bg-orange-500'
      }  text-white font-bold text-xs py-2 w-[12rem] m-auto rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none`}
      type="submit"
      disabled={disabled}
      style={{ transition: 'all .15s ease' }}
    >
      {text}
    </button>
  );
};

export default MainButton;
