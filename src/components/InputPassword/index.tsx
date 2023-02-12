import { ForwardedRef, forwardRef, useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { IInputProps } from "../Input/interfaces";

const InputPassword = forwardRef(
  (
    { id, label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [type, setType] = useState("password");

    return (
      <div>
        <label htmlFor={id}>{label}</label>

        <div>
          <input id={id} type={type} {...rest} ref={ref} />

          {type === "password" ? (
            <FaEyeSlash onClick={() => setType("text")} />
          ) : (
            <FaEye onClick={() => setType("password")} />
          )}
        </div>
        <span>{error ? error : "_"}</span>
      </div>
    );
  }
);

export default InputPassword;
