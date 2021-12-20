import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/Button";
import SeatSelector from "../../components/SeatSelector";

import "./style.css";

export default function SeatSelection({
  setPage,
  setMovieTitle,
  setPosterURL,
  setWeekday,
  setTime,
}) {
  const navigate = useNavigate();

  const cpfTemplate1 =
    /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
  const cpfTemplate2 =
    /^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]-[0-9][0-9]$/;

  const [seats, setSeats] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [purchaserName, setPurchaserName] = useState("");
  const [purchaserCPF, setPurchaserCPF] = useState("");

  const { idSessao } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`
      )
      .then((response) => {
        setSeats(response.data);
        setMovieTitle(response.data.movie.title);
        setPosterURL(response.data.movie.posterURL);
        setWeekday(response.data.day.weekday);
        setTime(response.data.name);
      });

    setPage("SeatSelection");
  }, [idSessao]);

  if (seats === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <section className="seat-selection">
      <SeatSelector seats={seats.seats} setSelectedSeats={setSelectedSeats} />
      <div className="purchaser">
        <div className="name">
          <p className="label">Nome do comprador:</p>
          <input
            type="text"
            className="entry"
            placeholder="Digite seu nome..."
            onChange={(event) => {
              setPurchaserName(event.target.value);
            }}
            value={purchaserName}
          />
        </div>
        <div className="cpf">
          <p className="label">CPF do comprador:</p>
          <input
            type="text"
            className="entry"
            placeholder="Digite seu CPF..."
            onChange={(event) => {
              setPurchaserCPF(event.target.value);
            }}
            value={purchaserCPF}
          />
        </div>
      </div>

      <Button
        size="large"
        text="Reservar assento(s)"
        onClick={() => {
          const validCPF =
            cpfTemplate1.test(purchaserCPF) || cpfTemplate2.test(purchaserCPF);

          if (validCPF) {
            axios
              .post(
                "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",
                { ids: selectedSeats, name: purchaserName, cpf: purchaserCPF }
              )
              .then((response) => {
                navigate("/sucesso");
              })
              .catch((error) => {
                console.log(error);
                alert("Algo deu errado com o pedido do(s) ingresso(s) :(");
              });
          } else {
            alert("Insira um CPF válido.");
          }
        }}
      />
    </section>
  );
}
