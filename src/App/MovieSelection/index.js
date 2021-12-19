import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Poster from "../../components/Poster";

import "./style.css";

export default function MovieSelection({ setPage }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
      .then((response) => {
        setMovies(response.data);
      });

    setPage("MovieSelection");
  }, []);

  if (movies === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <section className="movie-selection">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/sessoes/${movie.id}`}>
          <Poster size="large" posterURL={movie.posterURL} />
        </Link>
      ))}
    </section>
  );
}
