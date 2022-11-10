import * as Yup from "yup";

export const AdminDetailSchema = Yup.object({
  firstName: Yup.string().required("First name is required!"),
  lastName: Yup.string().required("Last name is required!"),
  email: Yup.string().required("Email is required!"),
  phone: Yup.string().required("Phone number is required!"),
  message: Yup.string().required("Message is required!"),
});
