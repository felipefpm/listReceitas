import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Main from "../../Components/Main";
import api from "../../Services/api";
import "./style.css";

function HomeList({ history }) {
  const [recipe, setRecipe] = useState([]);
  const token = sessionStorage.getItem("token");

  api.defaults.headers.Authorization = `Token ${token}`;

  useEffect(() => {
    async function loadRecipes() {
      const response = await api.get("api/v1/recipe");
      setRecipe(response.data);
      console.log(response.data);
    }
    loadRecipes();
  }, [history]);

  return (
    <>
      <Main />
      <div className="inter-content">
        <div className="contet">
          <ul>
            {recipe.map(recipes => (
              <li className="card-contente" key={recipes.id}>
                <img src={recipes.category.image} alt={recipes.title} />
                <footer>
                  <strong>{recipes.title}</strong>
                  <p>{recipes.description}</p>
                  <button>
                    <Link
                      to={{
                        pathname: `/info/${recipes.id}`
                      }}
                      className="button-link"
                    >
                      Detalhes
                    </Link>
                  </button>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomeList;
