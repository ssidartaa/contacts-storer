import { ForwardedRef, forwardRef } from "react";

import { IInputProps } from "./interfaces";

import Container from "./style";

const Input = forwardRef(
  (
    { id, label, placeholder, type = "text", error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Container error={error} className="inputContainer">
        <div className="inputContent">
          <label htmlFor={id}>{label}</label>

          <input
            className="input"
            id={id}
            placeholder={placeholder}
            type={type}
            {...rest}
            ref={ref}
          />
        </div>

        <span>{error ? error : "_"}</span>
      </Container>
    );
  }
);

export default Input;
