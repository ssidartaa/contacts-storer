import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "./interfaces";

const Input = forwardRef(
  (
    { id, label, placeholder, type = "text", error, ...rest }: IInputProps,
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

        <span>{error ? error : "_"}</span>
      </div>
    );
  }
);

export default Input;
