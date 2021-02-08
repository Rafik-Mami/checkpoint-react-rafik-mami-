import React from "react";
import { Button, Card } from "react-bootstrap";

function movieCard({ card, setCard }) {
  function clearCard() {
    setCard([]);
  }
  const removeFromCard = (movieToRemove) => {
    setCard(card.filter((movie) => movie != movieToRemove));
  };
  return (
    <>
      {card.length > 0 && <button onClick={clearCard}>clear card</button>}
      <div className="movielist">
        <div className="movies">
          {card.map((movie, index) => (
            <div className="mov" key={index}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={movie.image} />
                <Card.Body>
                  {" "}
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.bio}</Card.Text>
                  <Card.Text>
                    <a>{movie.url}</a>
                  </Card.Text>
                  <Card.Text>{movie.rate}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => removeFromCard(movie)}
                  >
                    {" "}
                    remove from Card
                  </Button>{" "}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default movieCard;
