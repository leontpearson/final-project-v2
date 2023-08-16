import React from "react";
import "./PageNotFound.css";
//import cryingImage from "./Components/Assets/<image_file_path>";

function PageNotFound() {
  return (
    <div className="pnf-container">
      <h1>Uh oh, that page doesn't exist!</h1>
      {/* <img src={cryingImage} alt="man crying" /> */}
    </div>
  );
}

export default PageNotFound;
