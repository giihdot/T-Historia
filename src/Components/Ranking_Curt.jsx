import React, { useEffect, useState } from "react";

function RankingCurtidas() {
  const [rankingLikes, setRankingLikes] = useState({});

  useEffect(() => {
    const todasChaves = Object.keys(localStorage);
    const ranking = {};

    todasChaves.forEach((chave) => {
      if (chave.startsWith("curtidas_")) {
        const id = chave.replace("curtidas_", "");
        const curtidas = parseInt(localStorage.getItem(chave)) || 0;
        const descurtidas =
          parseInt(localStorage.getItem(`descurtidas_${id}`)) || 0;

        ranking[id] = {
          likes: curtidas,
          dislikes: descurtidas,
        };
      }
    });

    setRankingLikes(ranking);
  }, []);

  return (
    <div className="like-stats">
      <h3>Ranking de Curtidas e Descurtidas por Página</h3>

      {Object.keys(rankingLikes).length === 0 ? (
        <p>Sem curtidas ou descurtidas registradas ainda.</p>
      ) : (
        Object.entries(rankingLikes).map(([id, votos]) => (
          <div >
            <h4>{id}</h4>
            <p>👍 Curtidas: {votos.likes}</p>
            <p>👎 Descurtidas: {votos.dislikes}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RankingCurtidas;