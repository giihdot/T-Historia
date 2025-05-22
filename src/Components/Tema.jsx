import { useState, useEffect } from "react";
import "./Tema.css";

function BotaoTema() {
  const [temaClaro, setTemaClaro] = useState(true);

  const alternarTema = () => {
    setTemaClaro(!temaClaro);
    const corpo = document.body;
    if (temaClaro) {
      corpo.style.backgroundColor = "#043f5b";
      corpo.style.color = "#a6a6a6";
    } else {
      corpo.style.backgroundColor = "#a6a6a6";
      corpo.style.color = "#043f5b";
    }
  };

  useEffect(() => {
    // Aplica o tema inicial
    document.body.style.backgroundColor = "#a6a6a6";
    document.body.style.color = "#043f5b";
  }, []);

  return (
    <button
      onClick={alternarTema}
      className={`botao-tema ${temaClaro ? "tema-escuro" : "tema-claro"}`}
    >
      Alternar Tema
    </button>
  );
}

export default BotaoTema;
