import React from "react";
import "./GameDetail.css";

function GameDetail({ game }) {
  const { name, background_image } = game;

  return (
    <div className="GameDetail is-hydrated">
      <figure className="game-backdrop">
        <img src={background_image} alt={`${name} backdrop`} />

        <h1 className="game-title">{name}</h1>
      </figure>

      <div className="game-meta">
        <p className="game-detail-overview">
          <img
            src={background_image}
            className="game-detail-poster"
            alt={`${name} poster`}
          />
          <br />
        </p>
      </div>
    </div>
  );
}

export default GameDetail;
