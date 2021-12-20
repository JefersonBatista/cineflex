import { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

import "./style.css";

export default function Success({ setPage, info }) {
  useEffect(() => {
    setPage("Success");
  });

  return (
    <section className="success">
      <h2 className="successful-request">
        Pedido feito
        <br />
        com sucesso!
      </h2>

      {info && (
        <div className="reservationInfo">
          <section className="showtime section">
            <h3 className="title">Filme e sessão</h3>
            <span className="movie info">{info.movie}</span>
            <span className="showtime info">
              {info.date} {info.time}
            </span>
          </section>

          <section className="tickets section">
            <h3 className="title">Ingressos</h3>
            {info.tickets.map((ticket) => (
              <span key={ticket} className="ticket info">
                Assento {ticket}
              </span>
            ))}
          </section>

          <section className="purchaser section">
            <h3 className="title">Comprador</h3>
            <span className="name info">Nome: {info.purchaser.name}</span>
            <span className="cpf info">CPF: {info.purchaser.CPF}</span>
          </section>
        </div>
      )}

      <Link to="/">
        <Button size="large" text="Voltar pra home" />
      </Link>
    </section>
  );
}
