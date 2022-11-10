import { useMutation } from "react-query";
import { ComplaintApi, ContactUsApi, LoginApi } from "../services/Api";

export const useContactUs = () => {
  return useMutation(ContactUsApi);
};

export const useLogin = () => {
  return useMutation(LoginApi);
};

export const useComplaint = () => {
  return useMutation(ComplaintApi);
};
