import { useState, useEffect } from "react";
import "./Tema.css";

function BotaoTema() {
  const [temaClaro, setTemaClaro] = useState(true);

  const alternarTema = () => {
    setTemaClaro(!temaClaro);
    const corpo = document.body;
    if (temaClaro) {
      corpo.style.backgroundColor = "#062a3c";
      corpo.style.color = "#a6a6a6";
    } else {
      corpo.style.backgroundColor = "#a6a6a6";
      corpo.style.color = "#062a3c";
    }
  };

  useEffect(() => {
    // Aplica o tema inicial
    document.body.style.backgroundColor = "#a6a6a6";
    document.body.style.color = "#062a3c";
  }, []);

  return (
    <button
      onClick={alternarTema}
      className={`botao-tema ${temaClaro ? "tema-claro" : "tema-escuro"}`}
    >
      Alternar Tema
    </button>
  );
}

export default BotaoTema;
