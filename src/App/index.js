import Button from "../components/Button";

import "./style.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">Cineflex</header>

      <div className="container">
        <Button
          size="large"
          text="Testando o botão 1"
          action={() => alert("testando componente botão 1")}
        />

        <Button
          size="large"
          text="Testando o botão 2"
          action={() => alert("testando componente botão 2")}
        />

        <Button
          size="large"
          text="Testando o botão 3"
          action={() => alert("testando componente botão 3")}
        />
      </div>
    </div>
  );
}
