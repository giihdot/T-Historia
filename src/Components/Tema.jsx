import { useState, useEffect } from "react";
import "./Tema.css";

// Define o componente funcional BotaoTema
function BotaoTema() {
  // Define o estado inicial do tema como claro (true)
  const [temaClaro, setTemaClaro] = useState(true);

  // Função que alterna entre o tema claro e escuro
  const alternarTema = () => {
    // Inverte o valor atual do tema
    setTemaClaro(!temaClaro);

    // Obtém o elemento <body> do documento
    const corpo = document.body;

    // Aplica as cores de fundo e texto de acordo com o tema atual
    if (temaClaro) {
      // Se o tema era claro, muda para escuro
      corpo.style.backgroundColor = "#043f5b"; // fundo escuro
      corpo.style.color = "#a6a6a6"; // texto claro
    } else {
      // Se o tema era escuro, muda para claro
      corpo.style.backgroundColor = "#a6a6a6"; // fundo claro
      corpo.style.color = "#043f5b"; // texto escuro
    }
  };

  // useEffect roda apenas uma vez, ao montar o componente
  useEffect(() => {
    // Define o tema inicial (claro)
    document.body.style.backgroundColor = "#a6a6a6";
    document.body.style.color = "#043f5b";
  }, []);

  return (
    // Botão que chama a função alternarTema ao ser clicado
    // A classe CSS muda dinamicamente com base no estado do tema
    <button
      onClick={alternarTema}
      className={`botao-tema ${temaClaro ? "tema-escuro" : "tema-claro"}`} //Operador ternário
    >
      Alternar Tema
    </button>
  );
}

export default BotaoTema;
