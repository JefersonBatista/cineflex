import Button from "../components/Button";
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
      </div>
    </div>
  );
}
