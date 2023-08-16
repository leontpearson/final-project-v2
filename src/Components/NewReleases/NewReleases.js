import React, { useEffect, useState } from "react";
import GameItem from "../GameItem/GameItem";
import "./NewReleases.css";
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
const API_BASE_URL = "https://api.rawg.io/api/games";

const NewReleases = () => {
  const [newReleaseData, setNewReleaseData] = useState([]);

  const getNewReleasesData = () => {
    fetch(`${API_BASE_URL}?page=1&dates=2023-01-01,2023-07-30&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setNewReleaseData(data.results);
      });
  };

  useEffect(() => {
    getNewReleasesData();
  }, []);

  return (
    <div className="new-releases-container">
      <div className="new-releases-items">
        {newReleaseData.map((game) => (
          <GameItem
            key={game.id}
            name={game.name}
            image={game.background_image}
            rating={game.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
