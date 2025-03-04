import axios from "../utils/axios.config";

const registerAPi = async (email, name, password) => {
  const URI = "api/v1/register";
  const data = { name, email, password };
  const responce = await axios.post(URI, data);
  return responce;
};

const testApi = async () => {
  const URI = "/api/v1/test";
  const responce = await axios.get(URI);
  return responce;
};

const loginApi = async (email, password) => {
  const URI_URL = "api/v1/login";
  const data = { email, password };
  const responce = await axios.post(URI_URL, data);
  return responce;
};
const getAllUsers = async () => {
  const URI_URL = "api/v1/getAllUsers";
  const responce = await axios.get(URI_URL);
  return responce;
};

const getUser = async () => {
  const URI_URL = "api/v1/getUser";
  const responce = await axios.get(URI_URL);
  return responce;
};
export { registerAPi, testApi, loginApi, getAllUsers, getUser };
