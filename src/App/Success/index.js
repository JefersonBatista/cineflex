import { useEffect } from "react/cjs/react.development";
import "./style.css";

export default function Success({ setPage }) {
  useEffect(() => {
    setPage("Success");
  });

  return <h1>Nada ainda</h1>;
}
