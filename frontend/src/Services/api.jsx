import axios from "axios";

const token = sessionStorage.getItem("token");

const api = axios.create({
  baseURL: "https://receitas.devari.com.br"
});

export default api;
