import "./style.css";

export default function Button({ size, text, action }) {
  return (
    <button className={`button ${size}`} onClick={action}>
      {text}
    </button>
  );
}
