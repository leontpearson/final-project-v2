import React from "react";
import "./GameItem.css";

function GameItem({ name, image, rating }) {
  return (
    <div className="game-item-container">
      <div className="game-name">
        <h3>{name}</h3>
      </div>
      <div className="game-image">
        <img src={image} alt={`${name} game poster`} />
      </div>
      <div>
        <h3>Game rating: {rating}</h3>
      </div>
    </div>
  );
}

export default GameItem;
