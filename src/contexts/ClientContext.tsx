import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  IClientUpdate,
  IContextProps,
  IClientValues,
  ITokenHeaders,
} from "./interfaces";

import { LoginContext } from "./LoginContext";

import updateSchema from "../validations/updateClient.validation";

import api from "../services/api";

import { toast } from "react-toastify";

export const ClientContext = createContext<IClientValues>({} as IClientValues);

const ClientProvider = ({ children }: IContextProps) => {
  const { setToken, token } = useContext(LoginContext);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [isDeleteModalVisible, setIsDeleteModalVisible] =
    useState<boolean>(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();

    setToken(localStorage.getItem("@ContactsStorer:token"));

    navigate("/", { replace: true });
  };

  const {
    register: update,
    handleSubmit: handleUpdate,
    formState: { errors: updateErrors },
    reset: updateReset,
  } = useForm<IClientUpdate>({
    resolver: yupResolver(updateSchema),
  });

  const handleUpdateClientValues = handleUpdate((data: IClientUpdate) => {
    api
      .patch<IClientUpdate>("/clients", data)
      .then(() => {
        toast.success(`Client updated with success!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          toastId: 1,
        });

        updateReset();

        setIsModalVisible(false);
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
          theme: "dark",
          toastId: 1,
        });
      });
  });

  const handleDeleteClient = () => {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as ITokenHeaders;

    api
      .delete("/clients")
      .then(() => {
        localStorage.clear();

        setToken(localStorage.getItem("@ContactsStorer:token"));

        setIsModalVisible(false);

        setIsDeleteModalVisible(false);

        navigate("/", { replace: true });

        toast.success(`Client deleted with success!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          toastId: 1,
        });
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
          theme: "dark",
          toastId: 1,
        });
      });
  };

  return (
    <ClientContext.Provider
      value={{
        logout,
        isModalVisible,
        setIsModalVisible,
        isDeleteModalVisible,
        setIsDeleteModalVisible,
        update,
        handleUpdateClientValues,
        updateErrors,
        handleDeleteClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
