import { createContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import {
  IClient,
  IContextProps,
  ILoginContextValues,
  ILoginData,
  ITokenHeaders,
} from "./interfaces";

import loginSchema from "../validations/login.validation";
import registerSchema from "../validations/register.validation";

import api from "../services/api";

import { useNavigate } from "react-router-dom";

export const LoginContext = createContext<ILoginContextValues>(
  {} as ILoginContextValues
);

const LoginProvider = ({ children }: IContextProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("@ContactsStorer:token")
  );

  const [client, setClient] = useState<IClient | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = () => {
      if (token) {
        api.defaults.headers = {
          Authorization: `Bearer ${token}`,
        } as ITokenHeaders;

        api.get<IClient>("/clients/owner").then(({ data }) => {
          setClient(data);

          navigate("/dashboard", { replace: true });
        });
      }

      setLoading(false);
    };

    loadUser();
  }, [token]);

  const {
    register,
    handleSubmit: handleRegister,
    formState: { errors: registerErrors },
    reset: registerReset,
  } = useForm<IClient>({
    resolver: yupResolver(registerSchema),
  });

  const {
    register: login,
    handleSubmit: handleLogin,
    formState: { errors: loginErrors },
    reset: loginReset,
  } = useForm<ILoginData>({
    resolver: yupResolver(loginSchema),
  });

  const handleRegisterValues = handleRegister((data: IClient) => {
    api
      .post<IClient>("/clients", data)
      .then(({ data }) => {
        toast.success(`Client ${data.fullName} create with success!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: 1,
        });
        setIsModalVisible(false);
        registerReset();
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: 1,
        });
      });
  });

  const handleLoginValues = handleLogin((data: ILoginData) => {
    api
      .post<{ token: string }>("/login", data)
      .then(({ data }) => {
        toast.success("Login succefuly!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: 1,
        });

        localStorage.setItem("@ContactsStorer:token", data.token);

        setToken(localStorage.getItem("@ContactsStorer:token"));

        loginReset();
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: 1,
        });
      });
  });

  const logout = () => {
    localStorage.clear();

    setToken(localStorage.getItem("@ContactsStorer:token"));

    navigate("/", { replace: true });
  };

  return (
    <LoginContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        login,
        register,
        handleLoginValues,
        handleRegisterValues,
        loginErrors,
        registerErrors,
        token,
        setToken,
        client,
        loading,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
