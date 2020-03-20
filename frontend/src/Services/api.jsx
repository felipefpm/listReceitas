import axios from "axios";

const api = axios.create({
  baseURL: "https://receitas.devari.com.br/api/v1/recipe"
});

export default api;
