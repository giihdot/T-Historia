
import { useEffect, useState } from "react";

function RankingCurtidas() {
  // Estado que vai armazenar os dados de curtidas e descurtidas por ID de página
  const [rankingLikes, setRankingLikes] = useState({});

  // useEffect será executado apenas uma vez quando o componente for carregado
  useEffect(() => {
    // Pega todas as chaves salvas no localStorage
    const todasChaves = Object.keys(localStorage);

    // Objeto temporário que vai armazenar o ranking
    const ranking = {};

    // Laço que percorre todas as chaves do localStorage
    todasChaves.forEach((chave) => {
      // Verifica se a chave é de curtida (começa com "curtidas_")
      if (chave.startsWith("curtidas_")) {
        // Extrai o ID da página (remove o prefixo)
        const id = chave.replace("curtidas_", "");

        // Pega o número de curtidas salvas no localStorage para esse ID
        const curtidas = parseInt(localStorage.getItem(chave)) || 0;

        // Pega o número de descurtidas com base no mesmo ID
        const descurtidas =
          parseInt(localStorage.getItem(`descurtidas_${id}`)) || 0;

        // Salva os valores no objeto ranking com o ID como chave
        ranking[id] = {
          likes: curtidas,
          dislikes: descurtidas,
        };
      }
    });

    // Atualiza o estado com o ranking completo
    setRankingLikes(ranking);
  }, []); // [] significa que isso só executa uma vez, ao montar o componente

  // JSX retornado pelo componente
  return (
    <div className="like-stats">
      {/* Título da seção de ranking */}
      <h3>Ranking de Curtidas e Descurtidas por Página</h3>

      {/* Se não tiver nenhuma curtida ou descurtida registrada, mostra uma mensagem */}
      {Object.keys(rankingLikes).length === 0 ? (
        <p>Sem curtidas ou descurtidas registradas ainda.</p>
      ) : (
        // Se houver dados, mapeia o ranking e mostra cada item (ID da página com seus votos)
        Object.entries(rankingLikes).map(([id, votos]) => (
          <div key={id}> {/* Adiciona uma chave única para cada item da lista */}
            <h4>{id}</h4> {/* Nome ou identificador da página */}
            <p>👍 Curtidas: {votos.likes}</p> {/* Mostra o número de curtidas */}
            <p>👎 Descurtidas: {votos.dislikes}</p> {/* Mostra o número de descurtidas */}
          </div>
        ))
      )}
    </div>
  );
}

export default RankingCurtidas;
