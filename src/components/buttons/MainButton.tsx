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
        disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'
      }  text-white bg-orange-500 font-bold text-xs py-2 w-[12rem] m-auto rounded-3xl shadow  outline-none focus:outline-none`}
      type="submit"
      disabled={disabled}
      style={{ transition: 'all .15s ease' }}
    >
      {text}
    </button>
  );
};

export default MainButton;
