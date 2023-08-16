import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameItem from "../GameItem/GameItem";
import "./SearchBox.css";

const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

const SearchBox = () => {
  const { id } = useParams();
  // let navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");

  const API_BASE_URL = "https://api.rawg.io/api/games?";

  const handleSubmit = (event) => {
    event.preventDefault();
    // navigate(`/games/${query}`);

    const apiUrl = `${API_BASE_URL}search=${query}&search_exact=true&key=${API_KEY}`;
    console.log("API URL:", apiUrl);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        console.log("Fetched Games:", data.results);
      });
  };

  return (
    <div className="searchbox-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />

        <button type="submit">Search</button>
      </form>

      <div className="game-list">
        {games.map((game) => (
          <GameItem
            key={game.id}
            name={game.name}
            image={game.background_image}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
