import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../components/Button";

import "./style.css";

export default function ShowtimeSelection({
  setPage,
  setMovieTitle,
  setPosterURL,
}) {
  const [showtimes, setShowtimes] = useState(null);

  const { idFilme } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`
      )
      .then((response) => {
        setShowtimes(response.data);
        setMovieTitle(response.data.title);
        setPosterURL(response.data.posterURL);
      });
  }, [idFilme, setMovieTitle, setPosterURL]);

  setPage("ShowtimeSelection");

  if (showtimes === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <section className="showtimes">
      {showtimes.days.map((day) => (
        <section key={day.id} className="day">
          <span className="text" key={day.id}>
            {day.weekday} - {day.date}
          </span>
          <div className="times">
            {day.showtimes.map((showtime) => (
              <Button
                key={showtime.id}
                size="small"
                text={showtime.name}
                action={() => setPage("SeatSelection")}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
