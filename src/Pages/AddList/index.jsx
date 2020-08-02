import React, { useState, useEffect } from "react";
import Main from "../../Components/Main";
import api from "../../Services/api";

import "./style.css";

function AddList({ history }) {
  const id = sessionStorage.getItem("id");
  const token = sessionStorage.getItem("token");

  const [receita, setReceita] = useState("");
  const [category, setCategory] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.defaults.headers.Authorization = `Token ${token}`;

    async function getCategories() {
      const response = await api.get("/api/v1/category");

      setCategories(response.data);
    }

    getCategories();
  }, [history]);

  async function handlerForm(e) {
    e.preventDefault();

    const response = await api.post("api/v1/recipe/", {
      title: receita,
      description: descricao,
      category: category,
      user: id
    });

    setDescricao("");
    setReceita("");
    setCategory("");
  }

  return (
    <>
      <Main />

      <div className="inter-content">
        <div className="content">
          <div className="cadastro-container">
            <form onSubmit={handlerForm}>
              <input
                type="text"
                placeholder="Nome da receita"
                maxLength="25"
                value={receita}
                onChange={e => setReceita(e.target.value)}
              />
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option>Categoria</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Descreva sua receita aqui"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
              />

              <button type="submit">Adicionar receita</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddList;
