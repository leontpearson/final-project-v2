import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";

import Home from "./Components/Home/Home";
import Games from "./Components/Games/Games";
import About from "./Components/About/About";
import SearchBox from "./Components/SearchBox/SearchBox";
import NewReleases from "./Components/NewReleases/NewReleases";
import AddGame from "./Components/AddGame/AddGame";
import GameItem from "./Components/GameItem/GameItem";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <nav>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <Link to="/"> Home </Link>
        <Link to="games/search"> Games </Link>
        <Link to="about"> About </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="games" element={<Games />}>
          <Route path="search" element={<SearchBox />} />
          <Route path="list" element={<NewReleases />} />
          <Route path="add" element={<AddGame />} />
          <Route path=":name" element={<GameItem />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
