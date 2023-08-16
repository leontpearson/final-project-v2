import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="hero-text">Welcome to our Games Library</h1>
      <p className="sub-heading">Discover the best games.</p>
      <Link className="link" to="/games">
        Browse Games
      </Link>
    </div>
  );
};

export default Home;
