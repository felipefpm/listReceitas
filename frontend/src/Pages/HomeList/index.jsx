import React from "react";

import Main from "../../Components/Main";

import "./style.css";

function HomeList({ match }) {
  return (
    <>
      <Main />
      <div className="body-container">
        <div className="inter-content">
          <div className="contet">Texto</div>
        </div>
      </div>
    </>
  );
}

export default HomeList;
