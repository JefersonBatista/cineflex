import { useState } from "react";

import SeatSelector from "./SeatSelector";

import "./style.css";

export default function SeatSelection() {
  const seatsPerRow = 10;
  const rows = 5;

  const seatRows = [];
  for (let row = 0; row < rows; row++) {
    const seatRow = [];
    for (let num = 1; num <= seatsPerRow; num++) {
      seatRow.push(seatsPerRow * row + num);
    }
    seatRows.push(seatRow);
  }

  function randomSeatStatus() {
    const statusArray = ["available", "unavailable"];
    return statusArray[Math.floor(Math.random() * 2)];
  }

  const [selectedSeats, setSelectedSeats] = useState([]);

  function chooseSeat(number, status) {
    if (status === "available") {
      setSelectedSeats([...selectedSeats, number]);
    } else if (status === "selected") {
      setSelectedSeats(selectedSeats.filter((selected) => selected !== number));
    }
  }

  console.log(selectedSeats);

  return (
    <div className="seat-selection">
      {seatRows.map((row, index) => (
        <SeatRow
          key={index}
          numbers={row}
          randomStatus={randomSeatStatus}
          chooseSeat={chooseSeat}
        />
      ))}
    </div>
  );
}

function SeatRow({ numbers, randomStatus, chooseSeat }) {
  return (
    <div className="row">
      {numbers.map((number) => {
        const status = randomStatus();

        return (
          <SeatSelector
            key={number}
            seatNumber={number}
            seatStatus={status}
            chooseSeat={(seatStatus) => chooseSeat(number, seatStatus)}
          />
        );
      })}
    </div>
  );
}
