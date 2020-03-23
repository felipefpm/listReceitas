import React, { useEffect, useState } from "react";
import Main from "../../Components/Main";
import api from "../../Services/api";

import "./style.css";
import { useParams } from "react-router-dom";

function MyList({ history }) {
  const token = sessionStorage.getItem("token");
  const userID = sessionStorage.getItem("id");

  const { id } = useParams();
  const [editRecipe, setEditRecipe] = useState([]);
  const [img, setImg] = useState("");
  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  api.defaults.headers.Authorization = `Token ${token}`;

  useEffect(() => {
    async function changeRecipe() {
      const response = await api.get(`/api/v1/recipe/${id}/`);
      setEditRecipe(response.data);
      setImg(response.data.category.image);
    }

    changeRecipe();
  }, [id]);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("/api/v1/category");

      setCategories(response.data);
    }

    getCategories();
  }, [history]);

  async function fullEdite(e) {
    e.preventDefault();
    const response = await api.patch(`/api/v1/recipe/${id}/`, {
      title: titulo,
      category: category,
      description: descricao,
      userID: userID
    });

    setTitulo("");
    setDescricao("");
    setCategory("");

    history.push("/minhareceitas");
  }

  async function deleteRecipe(e) {
    e.preventDefault();

    const response = await api.delete(`/api/v1/recipe/${id}`);

    history.push("/minhasreceitas");
  }

  return (
    <>
      <Main />
      <div className="inter-content">
        <div className="content">
          <div className="recipe-body">
            <img src={img} alt="" className="recipe-img" />
            <form onSubmit={fullEdite} className="cadastro-container">
              <input
                type="text"
                placeholder="Nome da receita"
                maxLength="25"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
              />
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option>Categoria</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Descreva sua receita aqui"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
              />
              <button type="submit" className="alterButton">
                Alterar receita
              </button>
              <button
                type="button"
                className="deleteButton"
                onClick={deleteRecipe}
              >
                Deletar Receita
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyList;
