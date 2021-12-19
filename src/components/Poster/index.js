import "./style.css";

export default function Poster({ size, posterURL, onClick }) {
  return (
    <article className={`poster-area ${size}`} onClick={onClick}>
      <img className="poster" src={posterURL} alt="Poster" />
    </article>
  );
}
