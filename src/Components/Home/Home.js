import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import EldenRing from "./Assets/EldenRing.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="hero-text">Welcome to our Games Library</h1>
      <img className="image" src={EldenRing} alt="Elden Ring backdrop" />

      <p className="sub-heading">Discover the best games.</p>
      <Link className="link" to="/games">
        Browse Games
      </Link>
    </div>
  );
};

export default Home;
