import { useState } from "react";

import Seat from "./Seat";

import "./style.css";

export default function SeatSelector({ seats }) {
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

  const [selectedSeats, setSelectedSeats] = useState([]);

  function chooseSeat(number, status) {
    if (status === "unavailable") {
      alert("Esse assento não está disponível");
      return;
    }

    if (status === "available") {
      setSelectedSeats([...selectedSeats, number]);
    } else if (status === "selected") {
      setSelectedSeats(selectedSeats.filter((selected) => selected !== number));
    }
  }

  console.log(selectedSeats);

  return (
    <div className="seat-selector">
      {seatRows.map((row, index) => (
        <SeatRow
          key={index}
          numbers={row}
          seats={seats}
          chooseSeat={chooseSeat}
        />
      ))}

      <div className="subtitle">
        <div className="selected-subtitle">
          <div className="seat selected" />
          <span className="selected-text">Selecionado</span>
        </div>

        <div className="available-subtitle">
          <div className="seat available" />
          <span className="available-text">Disponível</span>
        </div>

        <div className="unavailable-subtitle">
          <div className="seat unavailable" />
          <span className="unavailable-text">Indisponível</span>
        </div>
      </div>
    </div>
  );
}

function SeatRow({ numbers, seats, chooseSeat }) {
  return (
    <div className="row">
      {numbers.map((number) => {
        const status = seats.find((seat) => seat.name === number).isAvailable
          ? "available"
          : "unavailable";

        return (
          <Seat
            key={number}
            number={number}
            initialStatus={status}
            chooseSeat={(seatStatus) => chooseSeat(number, seatStatus)}
          />
        );
      })}
    </div>
  );
}
