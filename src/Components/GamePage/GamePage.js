import React, { useEffect, useState } from "react";

import GameItem from "../GameItem/GameItem";
import "./GamePage.css";
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
const API_BASE_URL = "https://api.rawg.io/api/games";

const GamePage = () => {
  const [gamesData, setGamesData] = useState([]);

  const getGamesData = () => {
    fetch(`${API_BASE_URL}?page=1&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setGamesData(data.results);
      });
  };

  useEffect(() => {
    getGamesData();
  }, []);

  return (
    <div className="game-page-container">
      {gamesData.map((game) => (
        <GameItem
          key={game.id}
          name={game.name}
          image={game.background_image}
        />
      ))}
    </div>
  );
};

export default GamePage;
