import Button from "../components/Button";
import Footer from "../components/Footer";
import SeatSelection from "../components/SeatSelection";

import "./style.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">Cineflex</header>

      <div className="container">
        <SeatSelection />

        <Button
          size="large"
          text="Reservar assento(s)"
          action={() => alert("Funcionalidade ainda não implementada!")}
        />

        <Footer
          posterURL="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"
          movieTitle="2067"
          weekday="Quinta-feira"
          time="15:00"
        />
      </div>
    </div>
  );
}
