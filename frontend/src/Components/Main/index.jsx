import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

export default function Main() {
  return (
    <>
      <div className="main-container">
        <div className="main-logo">
          <span className="main-dev">DEV</span>
          <span className="main-food">food</span>
        </div>
        <div className="main-link">
          <NavLink
            to="/receitas"
            className="link"
            activeStyle={{
              color: "#DF4723"
            }}
          >
            Receitas
          </NavLink>
          <NavLink
            to="/minhasreceitas"
            className="link"
            activeStyle={{
              color: "#DF4723"
            }}
          >
            Minhas Receitas
          </NavLink>
          <NavLink
            to="/novareceita"
            className="link"
            activeStyle={{
              color: "#DF4723"
            }}
          >
            Adiconar Receita
          </NavLink>
        </div>
        <div className="main-info-login">
          <span className="main-name">Nome Teste</span>
          <img
            src="https://image.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg"
            className="main-img"
          />
          <span className="separator">|</span>
          <NavLink to="/" className="main-sair">
            Sair
          </NavLink>
        </div>
      </div>
    </>
  );
}
