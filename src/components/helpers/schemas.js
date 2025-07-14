import * as yup from "yup";

export const inputRegisterData = [
  {
    name: "name",
    placeholder: "Enter the name",
    autoComplete: "given-name",
    type: "text",
  },
  {
    name: "email",
    placeholder: "Enter the email",
    autoComplete: "email",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Enter the password",
    autoComplete: "new-password",
    type: "password",
  },
  {
    name: "confirmPassword",
    placeholder: "Enter the same password",
    autoComplete: "new-password",
    type: "password",
  },
];
export const inputLoginData = [
  {
    name: "email",
    placeholder: "Enter the email",
    autoComplete: "email",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Enter the password",
    autoComplete: "new-password",
    type: "password",
  },
];

export const schemaRegister = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be more than 3 chars")
    .required("Name is required"),
  email: yup
    .string()
    .email("Email is not valid")
    .min(5, "Min value must be at least 5 symbols")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Must be at least 6 symbols")
    .max(18, "Must be less than 18 chars")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email("Email is not valid")
    .min(5, "Min value must be at least 5 symbols")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Must be at least 6 symbols")
    .max(18, "Must be less than 18 chars")
    .required("Password is required"),
});
