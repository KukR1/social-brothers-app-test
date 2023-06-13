interface TextareaProps {
  placeholder?: string;
  name: string;
  required: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  placeholder,
  name,
  value,
  onChange,
  required,
}: TextareaProps) => {
  const baseClass =
    'bg-gray-200 px-3 w-full min-h-[4rem] py-3 h-full text-sm outline-none';

  return (
    <textarea
      required={required}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={baseClass}
    />
  );
};
