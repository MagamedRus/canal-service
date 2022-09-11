import axios from "axios";
import { ROUTE_LOGIN, URL_SERVER } from "../constants/server";

export const authUser = async ({ login, password }) => {
  let result = null;

  await axios
    .post(`${URL_SERVER}${ROUTE_LOGIN}`, {
      login,
      password,
    })
    .then((res) => {
      const data = res.data;
      if (data) {
        result = { userData: data.userData, status: 200 };
      }
    })
    .catch((error) => {
      const response = error.response;
      const code = response?.status;
      const message = response.data?.message;
      result = { status: code, message };
    });

  return result;
};
