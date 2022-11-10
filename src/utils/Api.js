import axios from "axios";
import Cookies from "js-cookie";

const ApiCaller = (url, method, data = {}, host) => {
  return axios({
    url: `${host}${url}`,
    method,
    data,
    headers: { Authorization: Cookies.get("authToken") || "" },
  });
};

export default ApiCaller;
