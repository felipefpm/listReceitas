import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import Main from "../../Components/Main";

import "./style.css";
import { useParams } from "react-router-dom";

function InfoRecipe() {
  const token = sessionStorage.getItem("token");
  const [item, setItem] = useState([]);
  const [image, setImage] = useState([]);
  const { id } = useParams();

  api.defaults.headers.Authorization = `Token ${token}`;

  useEffect(() => {
    async function getItens() {
      const response = await api.get(`api/v1/recipe/${id}/`);
      console.log(response.data);
      console.log(response.data.category);
      setItem(response.data);
      setImage(response.data.category);
    }

    getItens();
  }, [id]);

  return (
    <>
      <Main />
      <div className="inter-content">
        <div className="contet">
          <div className="info-body">
            <img src={image.image} alt="" />
            <footer>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoRecipe;
