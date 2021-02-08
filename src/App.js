import "./App.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Movielist from "./component/movieList";
import MovieCard from "./component/movieCard";
import Navbar from "./component/navbar";
const page_list = "Movielist";
const page_card = "MovieCard";
function App() {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(page_list);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className="appMovie">
      <header className="header">
        <Navbar />
      </header>

      <div>
        <Button
          variant="primary"
          className="btn"
          onClick={() => navigateTo(page_card)}
        >
          Movie Card
        </Button>{" "}
        <Button
          variant="primary"
          className="btn"
          onClick={() => navigateTo(page_list)}
        >
          Movie List
        </Button>{" "}
      </div>
      <div>
        {page === page_list && <Movielist card={card} setCard={setCard} />}
        {page === page_card && <MovieCard card={card} setCard={setCard} />}
      </div>
    </div>
  );
}

export default App;
