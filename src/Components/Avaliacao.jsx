import { useState, useEffect } from "react";
import "./Avaliacao.css";

// Componente CurtirDescurtir recebe uma propriedade `id` que identifica a página ou item
function CurtirDescurtir({ id }) {
  // Estado para armazenar a quantidade de curtidas (inicialmente 0)
  const [likes, setLikes] = useState(0);

  // Estado para armazenar a quantidade de descurtidas (inicialmente 0)
  const [dislikes, setDislikes] = useState(0);

  // useEffect será executado toda vez que os valores de likes ou dislikes mudarem
  useEffect(() => {
    // Salva a quantidade de curtidas no localStorage com a chave `curtidas_<id>`
    localStorage.setItem(`curtidas_${id}`, likes);

    // Salva a quantidade de descurtidas no localStorage com a chave `descurtidas_<id>`
    localStorage.setItem(`descurtidas_${id}`, dislikes);
  }, [likes, dislikes, id]); // Executa o efeito sempre que likes, dislikes ou id mudarem

  // Função chamada ao clicar no botão de curtir
  const curtir = () => {
    // Aumenta o número de curtidas em 1
    setLikes(likes + 1);
  };

  // Função chamada ao clicar no botão de descurtir
  const descurtir = () => {
    // Aumenta o número de descurtidas em 1
    setDislikes(dislikes + 1);
  };

  // JSX retornado pelo componente
  return (
    // Div com classe CSS para alinhar os botões lado a lado
    <div className="botoes-curtida">
      {/* Botão de curtir: mostra o número atual de curtidas */}
      <button className="botao-curtir" onClick={curtir}>
        👍 Curtir ({likes})
      </button>

      {/* Botão de descurtir: mostra o número atual de descurtidas */}
      <button className="botao-descurtir" onClick={descurtir}>
        👎 Descurtir ({dislikes})
      </button>
    </div>
  );
}

export default CurtirDescurtir;
