import axios from "axios";
export const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASEURL,
});