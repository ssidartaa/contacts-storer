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
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  loginErrors: FieldErrors<ILoginData>;
  registerErrors: FieldErrors<IClient>;
  token: string | null;
  setToken: Dispatch<React.SetStateAction<string | null>>;
  client: IClient | null;
  loading: boolean;
  logout: () => void;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IClient {
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword?: string;
  createdAt?: string;
  updatedAt?: string;
  contacts?: [];
}

interface ITokenHeaders extends HeadersDefaults {
  Authorization: string;
  [key: string]: AxiosHeaderValue;
}
