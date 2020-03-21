import React from "react";

import Main from "../../Components/Main";

import "./style.css";

function HomeList({ match }) {
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
