import Poster from "../Poster";

import "./style.css";

export default function Footer({ posterURL, movieTitle, weekday, time }) {
  return (
    <footer className="footer">
      <Poster size="small" posterURL={posterURL} />
      <div className="info">
        <span className="movie-title text">{movieTitle}</span>
        {weekday && (
          <span className="session text">{`${weekday} - ${time}`}</span>
        )}
      </div>
    </footer>
  );
}
