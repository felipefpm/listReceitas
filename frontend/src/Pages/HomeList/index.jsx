import React, { useEffect } from "react";

import Main from "../../Components/Main";
import api from "../../Services/api";
import "./style.css";

function HomeList({ history }) {
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    async function loadRecipes() {
      const response = await api.get("api/v1/recipe", {
        headers: {
          token: token
        }
      });
      console.log(response.data);
    }

    loadRecipes();
  }, [history]);

  return (
    <>
      <Main />
      <div className="body-container">
        <div className="inter-content">
          <div className="contet">
            <ul>
              <li className="card-content">
                <img
                  src="https://img.elo7.com.br/product/zoom/258B7CB/adesivo-parede-restaurante-prato-feito-comida-caseira-lenha-adesivo-restaurante-fritas-salada.jpg"
                  alt=""
                />
                <footer>
                  <strong>Receita 01</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam tristique urna nec massa egestas sodales. Nunc et
                    ipsum at urna molestie porttitor suscipit eget tellus. Morbi
                    aliquet magna sit amet lectus convallis.
                  </p>
                  <button>Detalhes</button>
                </footer>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeList;
