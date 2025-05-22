
import { useState} from "react";
import Nav from "../Components/NavBar(Azul)";
import Header from "../Components/Header(Azul)";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import "./Formulario.css";
import Tema from "../Components/Tema";
import Raking_Curt from "../Components/Ranking_Curt";

// Função principal do componente Formulário
function Formulario() {
  // Estados que armazenam os valores dos campos do formulário
  const [nome, setNome] = useState(""); // Nome digitado
  const [idade, setIdade] = useState(""); // Idade digitada
  const [escolaridade, setEscolaridade] = useState(""); // Escolaridade
  const [sexo, setSexo] = useState(""); // Sexo
  const [comentario, setComentario] = useState(""); // Comentário

  // Estado para abrir ou fechar o menu lateral
  const [menuAberto, setMenuAberto] = useState(false);



  // Função chamada quando o formulário for enviado
  const enviarFormulario = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar página)

    // Monta um objeto com os dados do formulário
    const dadosUsuario = {
      nome,
      idade,
      escolaridade,
      sexo,
      comentario,
      data: new Date().toLocaleString(), // Adiciona a data e hora atual
    };

    // Cria uma chave única usando o timestamp
    const chaveUnica = `formulario_${Date.now()}`;

    // Salva os dados no localStorage
    localStorage.setItem(chaveUnica, JSON.stringify(dadosUsuario));

    // Mostra um alerta de sucesso
    alert("Formulário enviado com sucesso!");

    // Limpa os campos do formulário
    setNome("");
    setIdade("");
    setEscolaridade("");
    setSexo("");
    setComentario("");
  };

  // Função para abrir ou fechar o menu lateral
  const alternarMenu = () => {
    setMenuAberto(!menuAberto); // Inverte o estado do menu
  };

  // JSX que será exibido na tela
  return (
    <>
      {/* Cabeçalho com título, logo e botão do menu */}
      <Header
        titulo="ARQUIVO BÉLICO"
        imge={Logo_Arma_Cinza}
        onMenuClick={alternarMenu}
      />

      {/* Componente de tema claro/escuro */}
      <Tema />

      {/* Container geral da página */}
      <div className="pagina-container">
        {/* Renderiza o menu lateral se estiver aberto */}
        {menuAberto && <Nav />}

        {/* Área principal do formulário */}
        <div className="form-area">
          <h1 className="form-title">Formulário do Usuário</h1>

          {/* Formulário HTML controlado pelos estados */}
          <form onSubmit={enviarFormulario} className="form-container">
            {/* Campo nome */}
            <div className="form-group">
              <label>Nome:</label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            {/* Campo idade */}
            <div className="form-group">
              <label>Idade:</label>
              <input
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
                required
              />
            </div>

            {/* Campo escolaridade */}
            <div className="form-group">
              <label>Escolaridade:</label>
              <input
                value={escolaridade}
                onChange={(e) => setEscolaridade(e.target.value)}
                required
              />
            </div>

            {/* Campo sexo com opções */}
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

            {/* Campo comentário */}
            <div className="form-group">
              <label>Comentário:</label>
              <textarea
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                required
              />
            </div>

            {/* Botão de envio do formulário */}
            <button type="submit" className="form-button">
              Enviar
            </button>
          </form>

          {/* Espaço em branco entre o formulário e o ranking */}
          <br />
          <br />
          <br />

          {/* Componente que exibe o ranking de curtidas e descurtidas */}
          <Raking_Curt />
        </div>
      </div>
    </>
  );
}

export default Formulario;
