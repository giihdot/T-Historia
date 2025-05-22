import React, { useState, useEffect } from "react";
import Nav from "../Components/NavBar(Azul)";
import Header from "../Components/Header(Azul)";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import "./Formulario.css";
import Tema from "../Components/Tema";
import Raking_Curt from "../Components/Ranking_Curt"

function Formulario() {
  // seus estados anteriores do formulário
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [sexo, setSexo] = useState("");
  const [comentario, setComentario] = useState("");

  const [rankingLikes, setRankingLikes] = useState({});

  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    // Carregar ranking curtidas e descuidas
    const todasChaves = Object.keys(localStorage);
    const ranking = {};

    todasChaves.forEach((chave) => {
      if (chave.startsWith("likes_")) {
        const id = chave.substring(6); // tira "likes_"
        const likes = parseInt(localStorage.getItem(chave)) || 0;
        if (!ranking[id]) ranking[id] = { likes: 0, dislikes: 0 };
        ranking[id].likes = likes;
      }
      if (chave.startsWith("dislikes_")) {
        const id = chave.substring(9); // tira "dislikes_"
        const dislikes = parseInt(localStorage.getItem(chave)) || 0;
        if (!ranking[id]) ranking[id] = { likes: 0, dislikes: 0 };
        ranking[id].dislikes = dislikes;
      }
    });

    setRankingLikes(ranking);
  }, []);

  // Função para enviar o formulário (igual a que você já tem)
  const enviarFormulario = (e) => {
    e.preventDefault();

    const dadosUsuario = {
      nome,
      idade,
      escolaridade,
      sexo,
      comentario,
      data: new Date().toLocaleString(),
    };

    const chaveUnica = `formulario_${Date.now()}`;
    localStorage.setItem(chaveUnica, JSON.stringify(dadosUsuario));

    alert("Formulário enviado com sucesso!");

    setNome("");
    setIdade("");
    setEscolaridade("");
    setSexo("");
    setComentario("");
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

      <Tema />

      <div className="pagina-container">
        {menuAberto && <Nav />}

        <div className="form-area">
          <h1 className="form-title">Formulário do Usuário</h1>

          <form onSubmit={enviarFormulario} className="form-container">
            {/* seus inputs aqui */}

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

          <br />
          <br />
          <br />

          <Raking_Curt/>
        </div>
      </div>
    </>
  );
}

export default Formulario;
