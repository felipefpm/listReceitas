import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Main from "../../Components/Main";
import api from "../../Services/api";

import "./style.css";

function MyList({ history }) {
  const id = sessionStorage.getItem("id");
  const token = sessionStorage.getItem("token");
  const [myRecipe, setMyRecipe] = useState([]);

  api.defaults.headers.Authorization = `Token ${token}`;

  useEffect(() => {
    async function loadRecipesID() {
      const response = await api.get(`/api/v1/recipe?user=${id}`);

      setMyRecipe(response.data);
    }

    loadRecipesID();
  }, [history]);

  function novaReceita() {
    history.push("/novareceita");
  }

  return (
    <>
      <Main />
      <div className="inter-content">
        <div className="content">
          <ul>
            {myRecipe.map(myRec => (
              <li key={myRec.id} className="card-content">
                <img src={myRec.category.image} alt="" />
                <footer>
                  <strong>{myRec.title}</strong>
                  <p>{myRec.description}</p>
                  <button>
                    <Link
                      to={{
                        pathname: `/minhareceita/${myRec.id}`
                      }}
                      className="button-link"
                    >
                      Detalhes
                    </Link>
                  </button>
                </footer>
              </li>
            ))}

            <li className="card-content add-content" onClick={novaReceita}>
              <span className="material-icons icon-content">
                add_circle_outline
              </span>
              <footer>
                <strong>Adicionar Receita</strong>
              </footer>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyList;
