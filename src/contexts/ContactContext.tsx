import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  IContact,
  IContactUpdate,
  IContactValues,
  IContextProps,
  ITokenHeaders,
} from "./interfaces";

import addContactSchema from "../validations/addContact.validation";
import updateContactSchema from "../validations/updateContact.validation";

import api from "../services/api";

import { LoginContext } from "./LoginContext";

export const ContactContext = createContext<IContactValues>(
  {} as IContactValues
);

const ContactProvider = ({ children }: IContextProps) => {
  const { token, setContacts } = useContext(LoginContext);

  const [isAddContactVisible, setIsAddContactVisible] =
    useState<boolean>(false);

  const [isUpdateContactVisible, setIsUpdateContactVisible] =
    useState<boolean>(false);

  useEffect(() => {
    if (token) {
      api.defaults.headers = {
        Authorization: `Bearer ${token}`,
      } as ITokenHeaders;

      api.get<IContact[]>("/contacts").then(({ data }) => {
        setContacts(data);
      });
    }
  }, [token, isAddContactVisible, isUpdateContactVisible]);

  const {
    register: addContact,
    handleSubmit: handleAddContact,
    formState: { errors: addContactErrors },
    reset: addContactReset,
  } = useForm<IContact>({
    resolver: yupResolver(addContactSchema),
  });

  const {
    register: updateContact,
    handleSubmit: handleUpdateContact,
    formState: { errors: updateContactErrors },
    reset: updateContactReset,
  } = useForm<IContactUpdate>({
    resolver: yupResolver(updateContactSchema),
  });

  const handleAddContactValues = handleAddContact((data: IContact) => {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as ITokenHeaders;

    api
      .post<IContact>("/contacts", data)
      .then(({ data }) => {
        toast.success(`Contact ${data.fullName} created with success!`, {
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

        addContactReset();

        setIsAddContactVisible(false);
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

  const handleUpdateContactValues = (data: IContactUpdate, id: string) => {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as ITokenHeaders;
    api
      .patch<IContactUpdate>(`/contacts/${id}`, data)
      .then(({ data }) => {
        toast.success(`Contact ${data.fullName} updated with success!`, {
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
        updateContactReset();
        setIsUpdateContactVisible(false);
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
  };

  const handleDeleteContact = (id: string) => {
    api.defaults.headers = {
      Authorization: `Bearer ${token}`,
    } as ITokenHeaders;

    api
      .delete<void>(`/contacts/${id}`)
      .then(() => {
        toast.success(`Contact deleted with success!`, {
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

        setIsUpdateContactVisible(false);
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
  };

  return (
    <ContactContext.Provider
      value={{
        isAddContactVisible,
        setIsAddContactVisible,
        addContact,
        handleAddContactValues,
        addContactErrors,
        isUpdateContactVisible,
        setIsUpdateContactVisible,
        updateContact,
        handleUpdateContact,
        handleUpdateContactValues,
        updateContactErrors,
        handleDeleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
