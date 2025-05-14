import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Avaliacao() {
  const localizacao = useLocation();
  const chaveDaPagina = `avaliacao_${localizacao}`;
  const [estrelas, setEstrelas] = useState(0);

  useEffect(() => {
    const estrelasSalvas = localStorage.getItem(chaveDaPagina);
    if (estrelasSalvas) {
      setEstrelas(parseInt(estrelasSalvas));
    }
  }, [chaveDaPagina]);

  const clicarEstrela = (quantidade) => {
    setEstrelas(quantidade);
    localStorage.setItem(chaveDaPagina, quantidade);
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
            color: numero <= estrelas ? "blue" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Avaliacao;
