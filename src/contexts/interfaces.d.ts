import { HeadersDefaults } from "axios";
import { BaseSyntheticEvent, Dispatch, ReactNode, SetStateAction } from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface IContextProps {
  children: ReactNode;
}

interface ILoginContextValues {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  login: UseFormRegister<ILoginData>;
  register: UseFormRegister<IClient>;
  handleLoginValues: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  handleRegisterValues: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  loginErrors: FieldErrors<ILoginData>;
  registerErrors: FieldErrors<IClient>;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  client: IClient | null;
  loading: boolean;
  contacts: IContact[] | null;
  setContacts: Dispatch<SetStateAction<IContact[] | null>>;
}

interface ILoginData {
  email: string;
  password: string;
}

type IContact = Pick<
  IClient,
  "id" | "fullName" | "email" | "phoneNumber" | "createdAt" | "updatedAt"
>;

interface IClient {
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword?: string;
  createdAt?: string;
  updatedAt?: string;
  contacts?: IContact[];
}

type IClientUpdate = Partial<IClient>;

type IContactUpdate = Partial<IContact>;

interface ITokenHeaders extends HeadersDefaults {
  Authorization: string;
  [key: string]: AxiosHeaderValue;
}

interface IClientValues {
  logout: () => void;
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  isDeleteModalVisible: boolean;
  setIsDeleteModalVisible: Dispatch<SetStateAction<boolean>>;
  update: UseFormRegister<IClientUpdate>;
  handleUpdateClientValues: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  updateErrors: FieldErrors<IClientUpdate>;
  handleDeleteClient: () => void;
}

interface IContactValues {
  isAddContactVisible: boolean;
  setIsAddContactVisible: Dispatch<SetStateAction<boolean>>;
  addContact: UseFormRegister<IContact>;
  handleAddContactValues: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  addContactErrors: FieldErrors<IContact>;
  isUpdateContactVisible: boolean;
  setIsUpdateContactVisible: Dispatch<SetStateAction<boolean>>;
  updateContact: UseFormRegister<IContactUpdate>;
  handleUpdateContact: UseFormHandleSubmit<Partial<IContact>>;
  handleUpdateContactValues: (data: IClientUpdate, id: string) => void;
  updateContactErrors: FieldErrors<IContactUpdate>;
  handleDeleteContact: (id: string) => void;
}
