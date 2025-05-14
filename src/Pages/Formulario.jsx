import React, { useState, useEffect } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [sexo, setSexo] = useState("");
  const [comentario, setComentario] = useState("");
  const [ranking, setRanking] = useState({});

  useEffect(() => {
    const todasChaves = Object.keys(localStorage);
    const votos = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    todasChaves.forEach((chave) => {
      if (chave.startsWith("avaliacao_")) {
        const voto = parseInt(localStorage.getItem(chave));
        if (votos[voto] !== undefined) {
          votos[voto]++;
        }
      }
    });

    setRanking(votos);
  }, []);

  const enviarFormulario = (e) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
    // Aqui você poderia salvar no localStorage, ou enviar para o back-end
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Formulário</h2>
      <form onSubmit={enviarFormulario}>
        <div>
          <label>Nome:</label><br />
          <input value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>

        <div>
          <label>Idade:</label><br />
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />
        </div>

        <div>
          <label>Escolaridade:</label><br />
          <input value={escolaridade} onChange={(e) => setEscolaridade(e.target.value)} required />
        </div>

        <div>
          <label>Sexo:</label><br />
          <select value={sexo} onChange={(e) => setSexo(e.target.value)} required>
            <option value="">Selecione</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div>
          <label>Comentário:</label><br />
          <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} required />
        </div>

        <button type="submit">Enviar</button>
      </form>

      <hr />
      <h3>Ranking de Estrelas</h3>
      <ul>
        {Object.entries(ranking).map(([estrela, total]) => (
          <li key={estrela}>
            {estrela} estrela(s): {total} voto(s)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Formulario;
