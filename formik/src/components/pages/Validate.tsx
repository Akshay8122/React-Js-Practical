import * as yup from "yup";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
export const validationSchema = yup.object({
  image: yup
    .mixed()
    .nullable()
    .required()
    .test(
      "FILE_SIZE",
      "Image size too big.",
      (values) => !values || (values && values.size <= 2000000)
    )
    .test(
      "FILE_FORMAT",
      "File type not supported.",
      (values) =>
        !values || (values && SUPPORTED_FORMATS.includes(values?.type))
    ),
  name: yup
    .string()
    .max(15, "required, at least 15 char.")
    .required("Required"),
  email: yup
    .string()
    .email("validate email convention,  required")
    .required("Required"),
  phoneNo: yup
    .string()
    .max(10, "Number should always 10 digits only")
    .min(10, "Number must contain at least 10 digits")
    .required("Required"),
  password: yup
    .string()
    .min(8, "Password should contain at least 8 characters!!!")
    .max(15, "Password should contain at  most 15 characters only!!!")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "password does not match")
    .required("Required"),
});
