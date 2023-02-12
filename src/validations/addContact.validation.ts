import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is a required field."),
  email: yup
    .string()
    .required("Email is a required field.")
    .email("The email must be valid."),
  phoneNumber: yup
    .string()
    .required("Phone number is a required field.")
    .min(19, "This field must have at least 13 characters, Ex: 1212123456789")
    .max(
      20,
      "This field must have a maximum of 14 characters, Ex: 12123123456789"
    )
    .transform((phone) =>
      phone.length == 13
        ? `+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(
            4,
            9
          )}-${phone.slice(9)}`
        : `+${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(
            5,
            10
          )}-${phone.slice(10)}`
    ),
});

export default schema;
