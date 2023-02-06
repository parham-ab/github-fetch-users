import axios from "axios";

axios.defaults.baseURL = `https://api.github.com`;
export const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};