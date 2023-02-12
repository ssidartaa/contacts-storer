import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .notRequired()
    .transform((fullName) => (fullName ? fullName : undefined)),
  email: yup
    .string()
    .notRequired()
    .email("The email must be valid.")
    .transform((email) => (email ? email : undefined)),
  phoneNumber: yup
    .string()
    .notRequired()
    .min(19, "This field must have at least 13 characters, Ex: 1212123456789")
    .max(
      20,
      "This field must have a maximum of 14 characters, Ex: 12123123456789"
    )
    .transform((phone) =>
      phone
        ? phone.length == 13
          ? `+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(
              4,
              9
            )}-${phone.slice(9)}`
          : `+${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(
              5,
              10
            )}-${phone.slice(10)}`
        : undefined
    ),
  password: yup
    .string()
    .notRequired()
    .transform((password) => (password ? password : undefined))
    .matches(
      /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
      "Your password must contain at least one capital letter, one number and one special character, and be at least 8 characters long."
    ),
});

export default schema;
