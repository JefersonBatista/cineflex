import axios from "axios";
import { useEffect, useState } from "react";

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
  }, []);

  if (movies === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <section className="movies">
      {movies.map((movie) => (
        <Poster key={movie.id} size="large" posterURL={movie.posterURL} />
      ))}
    </section>
  );
}
