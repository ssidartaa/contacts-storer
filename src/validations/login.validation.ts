import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required field.")
    .email("The email must be valid."),
  password: yup.string().required("Password is a required field."),
});

export default schema;
