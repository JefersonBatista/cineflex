import "./style.css";

export default function Button({ size, text, onClick }) {
  return (
    <button className={`button ${size}`} onClick={onClick}>
      {text}
    </button>
  );
}
