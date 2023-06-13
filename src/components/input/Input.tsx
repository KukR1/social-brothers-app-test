interface InputProps {
  placeholder?: string;
  required: boolean;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  placeholder,
  name,
  value,
  onChange,
  required,
}: InputProps) => {
  const baseClass = 'bg-gray-200 px-3 w-full py-3 text-sm outline-none';
  const inputStyle = {
    fontStyle: value ? 'normal' : 'italic',
  };

  return (
    <input
      required={required}
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={baseClass}
      style={inputStyle}
    />
  );
};
