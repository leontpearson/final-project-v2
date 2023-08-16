import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Stack, TextField } from "@mui/material";
import GameItem from "../GameItem/GameItem";
import "./About.css";
import logo from "./Assets/logo.png";

const API_BASE_URL = "https://api.rawg.io/api/games?";
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

const About = () => {
  let navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate(`/search/${query}`);
    const response = await fetch(
      `${API_BASE_URL}search=${query}&search_exact=true&key=${API_KEY}`
    );
    const data = await response.json();
    setGames(data.results);
  };

  return (
    <div className="about-container">
      {/* <div className="searchbox-container">
        <div className="nav-bar">
          <nav>
            <ul className="nav-list">
              <Link to="/search" className="logo-link">
                <img src={logo} alt="Logo" className="logo-image" />
              </Link>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Games" className="nav-link">
                  All Games
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Container className="SearchPage" maxWidth="md">
          <form onSubmit={handleSubmit} className="search-form">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0}
              paddingTop={5}
            >
              <TextField
                fullWidth
                label="Search"
                size="small"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="search-input"
              />
            </Stack>
          </form>
        </Container>
        <div className="game-list">
          {games.map((game) => (
            <GameItem
              key={game.id}
              name={game.name}
              image={game.background_image}
            />
          ))}
        </div>
      </div> */}
      <div className="content-container">
        <h1>About Us</h1>
        <p>
          Welcome to our website! We are passionate about video games and strive
          to provide you with the latest information and updates from the gaming
          world.
        </p>
      </div>
    </div>
  );
};

export default About;
