import axios from "axios";
const access_token = localStorage.getItem("access_token");
const instance = axios.create({
  baseURL: "http://localhost:8080/",
});
instance.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return { ER: 1, message: error };
  }
);
export default instance;
