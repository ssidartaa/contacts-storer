import { ForwardedRef, forwardRef, useState } from "react";

import { IInputProps } from "../Input";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Container } from "./styles";

const InputPassword = forwardRef(
  (
    { id, label, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [type, setType] = useState("password");

    return (
      <Container>
        <label htmlFor={id}>{label}</label>

        <div>
          <input id={id} type={type} {...rest} ref={ref} />

          {type === "password" ? (
            <FaEyeSlash onClick={() => setType("text")} />
          ) : (
            <FaEye onClick={() => setType("password")} />
          )}
        </div>
      </Container>
    );
  }
);

export default InputPassword;
