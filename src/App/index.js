import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../components/Footer";
import MovieSelection from "./MovieSelection";
import ShowtimeSelection from "./ShowtimeSelection";
import SeatSelection from "./SeatSelection";

import "./style.css";

export default function App() {
  const [page, setPage] = useState("MovieSelection");
  const [movieTitle, setMovieTitle] = useState(null);
  const [posterURL, setPosterURL] = useState(null);
  const [weekday, setWeekday] = useState(null);
  const [time, setTime] = useState(null);

  function pageTitle() {
    switch (page) {
      case "MovieSelection":
        return "Selecione o filme";
      case "ShowtimeSelection":
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

        <BrowserRouter>
          <Routes>
            <Route
              key={1}
              path="/"
              element={<MovieSelection setPage={setPage} />}
            />
            <Route
              key={2}
              path="/sessoes/:idFilme"
              element={
                <ShowtimeSelection
                  setMovieTitle={setMovieTitle}
                  setPosterURL={setPosterURL}
                  setWeekday={setWeekday}
                  setTime={setTime}
                  setPage={setPage}
                />
              }
            />
            <Route
              key={3}
              path="/assentos/:idSessao"
              element={
                <SeatSelection
                  setMovieTitle={setMovieTitle}
                  setPosterURL={setPosterURL}
                  setWeekday={setWeekday}
                  setTime={setTime}
                  setPage={setPage}
                />
              }
            />
          </Routes>
        </BrowserRouter>

        {(page === "ShowtimeSelection" || page === "SeatSelection") && (
          <Footer
            posterURL={posterURL}
            movieTitle={movieTitle}
            weekday={weekday}
            time={time}
          />
        )}
      </div>
    </div>
  );
}
