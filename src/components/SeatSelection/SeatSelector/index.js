import { useState } from "react";
import "./style.css";

export default function SeatSelector({ seatNumber, seatStatus, chooseSeat }) {
  const [status, setStatus] = useState(seatStatus);

  function handleChooseSeat() {
    chooseSeat(status);

    if (status === "available") {
      setStatus("selected");
    } else if (status === "selected") {
      setStatus("available");
    }
  }

  return (
    <div className={`seat-selector ${status}`} onClick={handleChooseSeat}>
      {seatNumber.toLocaleString("pt-BR", { minimumIntegerDigits: 2 })}
    </div>
  );
}
