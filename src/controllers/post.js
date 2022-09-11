import axios from "axios";
import { ROUTE_POST, URL_SERVER } from "../constants/server";

export const getPosts = async (userId) => {
  let result = null;
  const config = {
    method: "get",
    url: URL_SERVER + ROUTE_POST,
    params: { userId },
  };

  await axios(config)
    .then((res) => {
      const data = res.data;
      if (data) {
        result = { posts: data.posts, status: 200 };
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
