import React, { useState } from "react";
import MovieFilter from "./filterMovie";
import { Button } from "react-bootstrap";
function MovieList({ setCard, card }) {
  const [movies] = useState([
    {
      title: "The Dark Knight",
      bio:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      url: "https://www.imdb.com/title/tt0468569/?ref_=ttls_li_tt",
      rate: "9",
    },
    {
      title: " The pianists",
      bio:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      url: "https://www.imdb.com/title/tt0253474/?ref_=ttls_li_tt",
      rate: "7.5",
    },
    {
      title: "Modern times",
      bio:
        "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
      url: "https://www.imdb.com/title/tt0027977/?ref_=ttls_li_tt",
      rate: "8.5",
    },
    {
      title: "Terminator 2",
      bio:
        "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
      url: "https://www.imdb.com/title/tt0103064/?ref_=ttls_li_tt",
      rate: "9.0",
    },
    {
      title: "Untouchables",
      bio:
        "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
      url: "https://www.imdb.com/title/tt1675434/?ref_=ttls_li_tt",
      rate: "8.5",
    },
    {
      title: "Gladiator",
      bio:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      url: "https://www.imdb.com/title/tt0172495/?ref_=ttls_li_tt",
      rate: "8.5",
    },
    {
      title: "Avengers: Endgame",
      bio:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      url: "https://www.imdb.com/title/tt4154796/?ref_=ttls_li_tt",
      rate: "8.4",
    },
    {
      title: "Django Unchained ",
      bio:
        "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      url: "https://www.imdb.com/title/tt1853728/?ref_=ttls_li_tt",
      rate: "8.4",
    },
    {
      title: "Spider-Man: New Generation",
      bio:
        "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      url: "https://www.imdb.com/title/tt4633694/?ref_=ttls_li_tt",
      rate: "8.4",
    },
    {
      title: "WALL·E",
      bio:
        "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      url: "https://www.imdb.com/title/tt0910970/?ref_=ttls_li_tt",
      rate: "8.4",
    },
  ]);

  const addToCard = (movie) => {
    var newCard = [...card];
    let movieInCard = card.find((film) => film.title == movie.title);
    if (!movieInCard) {
      newCard.push(movie);
    }
    setCard(newCard);
    console.log(document.getElementById("montext").value);
  };
  var x = "";
  const getvalue = () => {
    var x = document.getElementById("montext").value;
    console.log(x);
    return x;
  };
  return (
    <div className="content">
      <div className="search">
      <input type="text" id="montext" />
      <button onClick={getvalue}>search</button>
      </div>
      {x == "" ? (
        <div className="movielist">
          <h1>Liste of Movies</h1>

          <div className="movies">
            {movies.map((movie, index) => (
              <div className="mov" key={index}>
                <h3>{movie.title}</h3>
                <p> {movie.bio}</p>
                <i></i>
                <a>{movie.url}</a>
                <p>Rate {movie.rate}</p>
                <Button variant="dark" onClick={() => addToCard(movie)}>
                  Add to Card
                </Button>{" "}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <MovieFilter movies={movies} text={x} />{" "}
        </>
      )}
    </div>
  );
}
export default MovieList;
