import React, { useState } from "react";
import api from "../../Services/api";

import "./style.css";

function Login({ history }) {
  const [email, setEmail] = useState("felipepinto.fpm@gmail.com");
  const [senha, setSenha] = useState("an6zfd6j");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/authentication/", {
      username: email,
      password: senha
    });

    const { id } = response.data;
    const { token } = response.data;

    sessionStorage.setItem("token", token);

    history.push(`/receitas`);
  }

  return (
    <>
      <div className="login-container">
        <div className="logo">
          <span className="dev">DEV</span>
          <span className="food">food</span>
        </div>
        <form onSubmit={handleSubmit}>
          <span>E-mail</span>
          <input
            type="email"
            placeholder="email@exemplo.com.br"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span>Senha</span>
          <input
            type="password"
            placeholder="*********"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
