import "./style.css";

export default function Poster({ size, posterURL }) {
  return (
    <article className={`poster-area ${size}`}>
      <img className="poster" src={posterURL} alt="Poster" />
    </article>
  );
}
