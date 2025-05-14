import React, { useState, useEffect } from "react";

function Avaliacao({ idPagina }) {
  const [estrelas, setEstrelas] = useState(0);

  useEffect(() => {
    const estrelasSalvas = localStorage.getItem(idPagina);
    if (estrelasSalvas) {
      setEstrelas(parseInt(estrelasSalvas));
    }
  }, [idPagina]);

  const clicarEstrela = (quantidade) => {
    setEstrelas(quantidade);
    localStorage.setItem(idPagina, quantidade);
  };

  return (
    <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
      {[1, 2, 3, 4, 5].map((numero) => (
        <span
          key={numero}
          onClick={() => clicarEstrela(numero)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: numero <= estrelas ? "#a6a6a6" : "gray",  // Ajuste a cor aqui
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Avaliacao;
