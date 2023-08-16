import React from "react";
import { Link, Outlet } from "react-router-dom";

function Games() {
  return (
    <div className="games">
      <div className="gamesNav">
        <Link to="/games/search"> Search</Link>
        <Link to="/games/list"> New Games </Link>
        <Link to="/games/add"> Add Games </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Games;
