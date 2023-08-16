import React from "react";
import "./GameDetail.css";

function GameDetail({ game }) {
  // Destructure the film object to access its properties
  const { name, background_image } = game;

  // Render the FilmDetail component
  return (
    <div className="GameDetail is-hydrated">
      {/* Game backdrop */}
      <figure className="game-backdrop">
        <img src={background_image} alt={`${name} backdrop`} />
        {/* game title */}
        <h1 className="game-title">{name}</h1>
      </figure>

      <div className="game-meta">
        {/* game detail overview */}
        <p className="game-detail-overview">
          {/* game poster */}
          <img
            src={background_image}
            className="game-detail-poster"
            alt={`${name} poster`}
          />
          <br />
          {/* game overview */}
          {/* <strong>Overview:</strong> {overview} */}
        </p>
      </div>
    </div>
  );
}

export default GameDetail;
