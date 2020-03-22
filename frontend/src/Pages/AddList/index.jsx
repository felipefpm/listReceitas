import React, { useState } from "react";
import Main from "../../Components/Main";

import "./style.css";

function AddList() {
  const [receita, setReceita] = useState("");
  const [category, setCategory] = useState("");
  const [descricao, setDescricao] = useState("");

  function handlerForm(e) {
    e.preventDefault();

    setDescricao("");
    setReceita("");
    setCategory("");
  }

  return (
    <>
      <Main />
      <div className="body-container">
        <div className="inter-content">
          <div className="content">
            <div className="cadastro-container">
              <form onSubmit={handlerForm}>
                <input
                  type="text"
                  placeholder="Nome da receita"
                  maxLength="10"
                  value={receita}
                  onChange={e => setReceita(e.target.value)}
                />
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                >
                  <option value="1"></option>
                  <option value="Category 1">Doce</option>
                  <option value="Category 2">Salgado</option>
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
      </div>
    </>
  );
}

export default AddList;
