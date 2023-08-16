import React from "react";
import "./PageNotFound.css";
import cryingImage from "./Assets/cryingImage.png";

function PageNotFound() {
  return (
    <div className="pnf-container">
      <h1>Uh oh, that page doesn't exist!</h1>
      <img className="image" src={cryingImage} alt="man crying" />
    </div>
  );
}

export default PageNotFound;
