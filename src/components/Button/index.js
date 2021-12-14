import "./style.css";

export default function Button({ size, text, action }) {
  return (
    <button className={`${size}-button button`} onClick={action}>
      {text}
    </button>
  );
}
