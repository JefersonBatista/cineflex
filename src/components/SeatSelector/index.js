import { useState } from "react";

import Seat from "./Seat";

import "./style.css";

export default function SeatSelector({ seats, setSelectedSeats }) {
  const seatsPerRow = 10;
  const rows = Math.ceil(seats.length / seatsPerRow);

  const seatRows = [];
  let currentSeat = 0;
  for (let row = 0; row < rows; row++) {
    const seatRow = [];

    let num = 0;
    while (num < seatsPerRow && currentSeat < seats.length) {
      seatRow.push(seats[currentSeat].name);
      currentSeat++;
      num++;
    }

    seatRows.push(seatRow);
  }

  const [selected, setSelected] = useState([]);

  function chooseSeat(id, status) {
    if (status === "unavailable") {
      alert("Esse assento não está disponível");
      return;
    }

    if (status === "available") {
      setSelected([...selected, id]);
      setSelectedSeats([...selected, id]);
    } else if (status === "selected") {
      setSelected(selected.filter((selected) => selected !== id));
      setSelectedSeats(selected.filter((selected) => selected !== id));
    }
  }

  return (
    <div className="seat-selector">
      <div className="seats">
        {seatRows.map((row, index) => (
          <SeatRow
            key={index}
            numbers={row}
            seats={seats}
            chooseSeat={chooseSeat}
          />
        ))}
      </div>

      <div className="subtitles">
        <div className="selected subtitle">
          <div className="seat selected" />
          <span className="text">Selecionado</span>
        </div>

        <div className="available subtitle">
          <div className="seat available" />
          <span className="text">Disponível</span>
        </div>

        <div className="unavailable subtitle">
          <div className="seat unavailable" />
          <span className="text">Indisponível</span>
        </div>
      </div>
    </div>
  );
}

function SeatRow({ numbers, seats, chooseSeat }) {
  return (
    <div className="row">
      {numbers.map((number) => {
        const currentSeat = seats.find((seat) => seat.name === number);

        const id = currentSeat.id;
        const status = currentSeat.isAvailable ? "available" : "unavailable";

        return (
          <Seat
            key={id}
            number={number}
            initialStatus={status}
            chooseSeat={(seatStatus) => chooseSeat(id, seatStatus)}
          />
        );
      })}
    </div>
  );
}
