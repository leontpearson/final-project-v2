import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GameItem from "../GameItem/GameItem";
import "./SearchBox.css";

const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

const SearchBox = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [query, setQuery] = useState("");

  const API_BASE_URL = "https://api.rawg.io/api/games?";

  const requestOptions = {
    method: "GET",
    mode: "no-cors", // Set the mode to "no-cors"
    headers: {
      // Add any necessary headers here
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate(`/games/${query}`);
    const response = await fetch(
      `${API_BASE_URL}search=${query}&search_exact=true&key=${API_KEY}`,
      requestOptions
    );
    console.log(response);
    const data = await response.json();
    setGames(data.results);
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

// import React, { useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// import GameItem from "../GameItem/GameItem";
// import "./SearchBox.css";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const SearchBox = () => {
//   const [games, setGames] = useState([]);

//   const API_BASE_URL = "https://api.rawg.io/api/games?";

//   const requestOptions = {
//     method: "GET",
//     mode: "no-cors", // Set the mode to "no-cors"
//     headers: {
//       // Add any necessary headers here
//     },
//   };

//   const getGamesData = (event) => {
//     event.preventDefault();
//     const searchQuery = event.target.elements.search.value;
//     fetch(
//       `${API_BASE_URL}search=${searchQuery}&search_exact=true&key=${API_KEY}`,
//       requestOptions
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setGames(data.results);
//       });
//   };

//   return (
//     <div className="Giphy">
//       <form onSubmit={getGamesData}>
//         <input type="text" name="search" placeholder="Search" />
//         <button type="submit">Translate</button>
//       </form>
//       <br />
//       <div className="GifList">
//         {games.map((game) => (
//           <GameItem
//             key={game.id}
//             name={game.images.fixed_height_small.url}
//             image={game.background_image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchBox;
