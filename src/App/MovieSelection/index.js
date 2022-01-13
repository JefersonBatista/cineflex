import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getMovies } from "../../services/cineflex";
import Poster from "../../components/Poster";

import "./style.css";

export default function MovieSelection({ setPage }) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies()
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Algo deu errado com a listagem dos filmes :(");
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
