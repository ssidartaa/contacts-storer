import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input = forwardRef(
  (
    { id, label, placeholder, type = "text", ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>

        <input
          id={id}
          placeholder={placeholder}
          type={type}
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
