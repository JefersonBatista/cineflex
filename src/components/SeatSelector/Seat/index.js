import { useState } from "react";
import "./style.css";

export default function Seat({ number, initialStatus, chooseSeat }) {
  const [status, setStatus] = useState(initialStatus);

  function handleChooseSeat() {
    chooseSeat(status);

    if (status === "available") {
      setStatus("selected");
    } else if (status === "selected") {
      setStatus("available");
    }
  }

  return (
    <div className={`seat ${status}`} onClick={handleChooseSeat}>
      {number.toLocaleString("pt-BR", { minimumIntegerDigits: 2 })}
    </div>
  );
}
