type OptionsType = {
  value: string | number;
  label: string;
}[];

interface DropdownProps {
  placeholder: string;
  name: string;
  value?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: OptionsType;
}

export const Dropdown = ({
  placeholder,
  name,
  options,
  onChange,
  required,
  value,
}: DropdownProps) => {
  const baseClass = 'px-3 w-full py-3 text-sm outline-none';
  const arrowStyle = {
    backgroundImage:
      'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiLz48L3N2Zz4=")',
    backgroundPosition: 'right 0.9rem center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1rem',
  };

  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`${baseClass} bg-gray-200 pl-3 pr-8 appearance-none`}
      style={arrowStyle}
    >
      <option value="" className="italic" disabled>
        {placeholder}
      </option>
      {options &&
        options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};
