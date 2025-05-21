import React, { useState, useEffect } from "react";
import Nav from "../Components/NavBar(Azul)";
import Header from "../Components/Header(Azul)";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import "./Formulario.css"

function Formulario() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [sexo, setSexo] = useState("");
  const [comentario, setComentario] = useState("");
  const [ranking, setRanking] = useState({});
  const [menuAberto, setMenuAberto] = useState(false);

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
  };

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <Header
        titulo="ARQUIVO BÉLICO"
        imge={Logo_Arma_Cinza}
        onMenuClick={alternarMenu}
      />

      <div className="pagina-contaiineer">
        {menuAberto && <Nav />}

        <section className="conteudo-principal">
          <div className="form-area">
            <h1 className="form-title">Formulário do Usuário </h1>
            <form onSubmit={enviarFormulario} className="form-container">
              <div className="form-group">
                <label>Nome:</label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Idade:</label>
                <input
                  type="number"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Escolaridade:</label>
                <input
                  value={escolaridade}
                  onChange={(e) => setEscolaridade(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Sexo:</label>
                <select
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  required
                >
                  <option value="">Selecione</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label>Comentário:</label>
                <textarea
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="form-button">
                Enviar
              </button>
            </form>
<br>
</br>
<br>
</br>
<br>
</br>
            <div className="like-stats">
              <h3>Ranking de Estrelas</h3>
              <ul>
                {Object.entries(ranking).map(([estrela, total]) => (
                  <li key={estrela}>
                    {estrela} estrela(s): {total} voto(s)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Formulario;
