import axios from "axios";

const api = axios.create({
  baseURL: "https://receitas.devari.com.br"
});

api.interceptors.request.use(async config => {
  const token = sessionStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
