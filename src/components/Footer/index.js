import "./style.css";

export default function Footer({ posterURL, movieTitle, weekday, time }) {
  return (
    <footer className="footer">
      <div className="poster-area">
        <img className="poster" src={posterURL} alt="Movie Poster" />
      </div>
      <div className="info">
        <span className="movie-title text">{movieTitle}</span>
        {weekday && (
          <span className="session text">{`${weekday} - ${time}`}</span>
        )}
      </div>
    </footer>
  );
}
