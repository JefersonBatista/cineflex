import { useState } from "react";

import Footer from "../components/Footer";
import MovieSelection from "./MovieSelection";

import "./style.css";

export default function App() {
  const [page, setPage] = useState("MovieSelection");

  function pageTitle() {
    switch (page) {
      case "MovieSelection":
        return "Selecione o filme";
      case "SessionSelection":
        return "Selecione o horário";
      case "SeatSelection":
        return "Selecione o(s) assento(s)";
      default:
        return null;
    }
  }

  return (
    <div className="app">
      <header className="header">Cineflex</header>

      <div className="container">
        {pageTitle() && <h1 className="page-title">{pageTitle()}</h1>}

        <MovieSelection setPage={setPage} />

        {(page === "session" || page === "seat") && (
          <Footer
            posterURL="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"
            movieTitle="2067"
            weekday="Quinta-feira"
            time="15:00"
          />
        )}
      </div>
    </div>
  );
}
