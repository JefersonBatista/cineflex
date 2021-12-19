import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Button from "../../components/Button";

import "./style.css";

export default function ShowtimeSelection({
  setPage,
  setMovieTitle,
  setPosterURL,
  setWeekday,
  setTime,
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
        setWeekday(null);
        setTime(null);
      });

    setPage("ShowtimeSelection");
  }, [idFilme]);

  if (showtimes === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <section className="showtime-selection">
      {showtimes.days.map((day) => (
        <section key={day.id} className="day">
          <span className="text" key={day.id}>
            {day.weekday} - {day.date}
          </span>
          <div className="times">
            {day.showtimes.map((showtime) => (
              <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                <Button size="small" text={showtime.name} />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
