import ApiCaller from "../utils/Api";

export const ContactUsApi = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => {
  return ApiCaller(
    "contactUs",
    "POST",
    {
      firstName,
      lastName,
      email,
      phone,
      message,
    },
    `http://localhost:8080/api/v1/`
  );
};
export const LoginApi = ({ email, password }) => {
  return ApiCaller(
    "auth/login",
    "POST",
    {
      email,
      password,
    },
    `http://localhost:8080/api/v1/`
  );
};

export const ComplaintApi = ({
  ComplaintType,
  description,
  area,
  city,
  images,
  panCardimage,
  status,
}) => {
  return ApiCaller(
    "complaints",
    "POST",
    {
      ComplaintType,
      description,
      area,
      city,
      images,
      panCardimage,
      status,
    },
    `http://localhost:8080/api/v1/`
  );
};
