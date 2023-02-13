import { ForwardedRef, forwardRef, useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { IInputProps } from "../Input/interfaces";

import Container from "./style";

const InputPassword = forwardRef(
  (
    { id, label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [type, setType] = useState("password");

    return (
      <Container error={error} className="inputPasswordContainer">
        <div className="inputPasswordContent">
          <label htmlFor={id}>{label}</label>

          <div className="inputPassword">
            <input id={id} type={type} {...rest} ref={ref} />

            {type === "password" ? (
              <FaEyeSlash className="eye" onClick={() => setType("text")} />
            ) : (
              <FaEye className="eye" onClick={() => setType("password")} />
            )}
          </div>
        </div>

        <span>{error ? error : "_"}</span>
      </Container>
    );
  }
);

export default InputPassword;
