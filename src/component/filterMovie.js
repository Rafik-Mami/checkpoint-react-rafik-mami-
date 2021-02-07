import React from "react";
import { Button } from "react-bootstrap";
function FilterMovie({ movies, text }) {
  var mov = movies.filter((movie) => movie.title == text || movie.rate == text);

  return (
    <div className="movielist">
      <h1>search movie</h1>

      <div className="movies">
        {mov.map((movie, index) => (
          <div className="mov" key={index}>
            <h3>{movie.title}</h3>
            <p> {movie.bio}</p>
            <i></i>
            <a>{movie.url}</a>
            <p>{movie.rate}</p>
            <Button variant="dark">Add to Card</Button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
export default FilterMovie;
