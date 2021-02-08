import React from "react";
import { Button, Card } from "react-bootstrap";
function FilterMovie({ movies, text, add }) {
  var mov = movies.filter(
    (movie) => movie.title === text || movie.rate === text
  );

  return (
    <div className="movielist">
      <h1>search movie</h1>

      <div className="movies">
        {mov.map((movie, index) => (
          <div className="mov" key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={movie.image} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.bio}</Card.Text>
                <Card.Text>
                  <a>{movie.url}</a>
                </Card.Text>
                <Card.Text>{movie.rate}</Card.Text>
                <Button variant="primary" onClick={() => add(movie)}>
                  {" "}
                  Add to Card
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FilterMovie;
