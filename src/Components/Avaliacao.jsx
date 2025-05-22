import React, { useState, useEffect } from "react";

// Define o componente Avaliacao que recebe uma prop chamada idPagina
function Avaliacao({ idPagina }) {
  // Cria um estado chamado 'estrelas' para armazenar quantas estrelas foram selecionadas
  const [estrelas, setEstrelas] = useState(0);

  // useEffect roda quando o componente é montado ou quando o idPagina mudar
  useEffect(() => {
    // Tenta buscar do localStorage a avaliação salva com a chave 'avaliacao_idPagina'
    const estrelasSalvas = localStorage.getItem(`avaliacao_${idPagina}`);
    // Se encontrou alguma avaliação salva...
    if (estrelasSalvas) {
      // Converte o valor de string para número e atualiza o estado 'estrelas'
      setEstrelas(parseInt(estrelasSalvas));
    }
  }, [idPagina]); // Só roda de novo se o valor de idPagina mudar

  // Função chamada quando o usuário clica em uma estrela
  const clicarEstrela = (quantidade) => {
    // Atualiza o estado com a quantidade de estrelas clicadas
    setEstrelas(quantidade);
    // Salva a quantidade de estrelas no localStorage com a chave esperada pelo ranking
    localStorage.setItem(`avaliacao_${idPagina}`, quantidade);
  };

  // Renderiza o componente visualmente
  return (
    // Cria uma div para as estrelas com estilo flex e espaçamento
    <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
      {/* Cria um array com os números de 1 a 5 e faz um .map() para renderizar cada estrela */}
      {[1, 2, 3, 4, 5].map((numero) => (
        // Cada estrela precisa de uma key única
        <span
          key={numero}
          // Quando a estrela for clicada, chama a função clicarEstrela com o número correspondente
          onClick={() => clicarEstrela(numero)}
          // Aplica estilos: tamanho da fonte, cursor de ponteiro e cor (azul se for clicada, cinza se não)
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: numero <= estrelas ? "blue" : "gray",
          }}
        >
          {/* Símbolo da estrela (★) */}
          ★
        </span>
      ))}
    </div>
  );
}

// Exporta o componente Avaliacao para ser usado em outras partes do projeto
export default Avaliacao;
