import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label?: string;
  fullWidth?: boolean;
  placeholder?: string;
  onShowPassword?: () => void;
  message?: string;
  name?: string;
  defaultValue?: string;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>((props, ref) => {
  const {
    label,
    fullWidth,
    placeholder,
    startIcon,
    endIcon,
    onShowPassword,
    message,
    name,
    defaultValue,
    disabled,
    ...rest
  } = props;

  const fullWidthStyle = fullWidth ? 'w-full' : '';
  const containerClass = fullWidthStyle;
  const startIconStyle = startIcon ? 'pl-12' : 'pl-5';
  const inputClass = `px-4 py-2 outline-0 rounded-lg w-full hover:transition-all duration-300 text-black bg-[#eaecf0] ${startIconStyle}`;
  return (
    <div className={containerClass}>
      {label ? (
        <p className="mb-2 text-base font-semibold">{label}</p>
      ) : null}
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
          {startIcon}
        </div>
        <input
          {...rest}
          ref={ref}
          className={inputClass}
          disabled={disabled}
          defaultValue={defaultValue}
          name={name}
          // onChange={onChangeInput}
          placeholder={placeholder}
        />
        <div aria-hidden="true" className="absolute inset-y-0 right-2 flex items-center cursor-pointer" onClick={onShowPassword}>
          {endIcon}
        </div>
      </div>
      {message ? (
        <p className="mt-4 text-[red] text-xs">{message}</p>
      ) : null}
    </div>

  );
});
BaseInput.displayName = 'BaseInput';

export default BaseInput;