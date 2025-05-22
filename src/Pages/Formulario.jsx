import React, { useState, useEffect } from "react";
import Nav from "../Components/NavBar(Azul)";
import Header from "../Components/Header(Azul)";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import "./Formulario.css";
import Tema from "../Components/Tema";

function Formulario() {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState(""); // Nome do usuário
  const [idade, setIdade] = useState(""); // Idade do usuário
  const [escolaridade, setEscolaridade] = useState(""); // Escolaridade do usuário
  const [sexo, setSexo] = useState(""); // Sexo do usuário
  const [comentario, setComentario] = useState(""); // Comentário do usuário

  // Estado para armazenar o número de votos de cada estrela (ranking)
  const [ranking, setRanking] = useState({});

  // Estado para controlar se o menu lateral está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // Hook que roda apenas uma vez após o componente ser montado
  useEffect(() => {
    // Pega todas as chaves salvas no localStorage
    const todasChaves = Object.keys(localStorage);

    // Cria um objeto para contar os votos por quantidade de estrelas
    const votos = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    // Para cada chave do localStorage
    todasChaves.forEach((chave) => {
      // Se a chave começar com "avaliacao_", significa que é um dado de avaliação por estrelas
      if (chave.startsWith("avaliacao_")) {
        // Pega o número de estrelas salvo e converte para número inteiro
        const voto = parseInt(localStorage.getItem(chave));

        // Se for um número válido de estrela (1 a 5), conta no objeto de votos
        if (votos[voto] !== undefined) {
          votos[voto]++;
        }
      }
    });

    // Atualiza o estado do ranking com os votos contados
    setRanking(votos);
  }, []); // Executa apenas uma vez

  // Função chamada ao enviar o formulário
  const enviarFormulario = (e) => {
    e.preventDefault(); // Evita que a página recarregue ao enviar

    // Cria um objeto com os dados do usuário preenchido no formulário
    const dadosUsuario = {
      nome,
      idade,
      escolaridade,
      sexo,
      comentario,
      data: new Date().toLocaleString(), // Salva a data e hora de envio
    };

    // Cria uma chave única para o localStorage baseada no timestamp atual
    const chaveUnica = `formulario_${Date.now()}`;

    // Converte os dados para string e salva no localStorage
    localStorage.setItem(chaveUnica, JSON.stringify(dadosUsuario));

    // Alerta que o envio foi concluído com sucesso
    alert("Formulário enviado com sucesso!");

    // Limpa os campos após o envio
    setNome("");
    setIdade("");
    setEscolaridade("");
    setSexo("");
    setComentario("");
  };

  // Função para abrir ou fechar o menu lateral
  const alternarMenu = () => {
    setMenuAberto(!menuAberto); // Troca entre verdadeiro e falso
  };

  // Retorno do JSX (estrutura visual)
  return (
    <>
      {/* Cabeçalho da página com logo, título e botão de menu */}
      <Header
        titulo="ARQUIVO BÉLICO" // Define o texto do cabeçalho
        imge={Logo_Arma_Cinza} // Imagem do logo
        onMenuClick={alternarMenu} // Função para alternar o menu
      />

      {/* Componente para trocar tema ou visual */}
      <Tema />

      {/* Container principal da página */}
      <div className="pagina-container">
        {/* Se o menu estiver aberto, mostra o componente de navegação lateral */}
        {menuAberto && <Nav />}

        {/* Seção com o conteúdo principal da página */}
        
          {/* Área que contém o formulário e o ranking */}
          <div className="form-area">
            <h1 className="form-title">Formulário do Usuário</h1>

            {/* Formulário em si */}
            <form onSubmit={enviarFormulario} className="form-container">
              {/* Campo do nome */}
              <div className="form-group">
                <label>Nome:</label>
                <input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              {/* Campo da idade */}
              <div className="form-group">
                <label>Idade:</label>
                <input
                  type="number"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  required
                />
              </div>

              {/* Campo da escolaridade */}
              <div className="form-group">
                <label>Escolaridade:</label>
                <input
                  value={escolaridade}
                  onChange={(e) => setEscolaridade(e.target.value)}
                  required
                />
              </div>

              {/* Campo de seleção do sexo */}
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

              {/* Campo do comentário */}
              <div className="form-group">
                <label>Comentário:</label>
                <textarea
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                  required
                />
              </div>

              {/* Botão para enviar o formulário */}
              <button type="submit" className="form-button">
                Enviar
              </button>
            </form>

            <br />
            <br />
            <br />

            {/* Seção que mostra o ranking de estrelas com contagem */}
            <div className="like-stats">
              <h3>Ranking de Estrelas</h3>
              <ul>
                {/* Converte o objeto "ranking" em pares [estrela, total] e exibe */}
                {Object.entries(ranking).map(([estrela, total]) => (
                  <li key={estrela}>
                    {estrela} estrela(s): {total} voto(s)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        
      </div>
    </>
  );
}

// Exporta o componente para ser usado em outros arquivos
export default Formulario;
