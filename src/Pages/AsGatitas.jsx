import {  useState } from "react";
import './AsGatitas.css';
import Header from '../Components/Header(Cinza)';
import Nav from '../Components/NavBar(Cinza)';
import Footer from '../Components/Footer(Cinza)';
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import Duarte from '../assets/DUARTE.jpeg';
import Giovanna from '../assets/GIOVANNA.jpeg';
import Julia from '../assets/JULIA.jpeg';
import Kamilly from '../assets/KAMILLY.jpeg';
import LogoGatitas from '../assets/Logo As Gatitas - SENAI - Copia.jpg';
import LogoArmaCinza from '../assets/LOGO - ARMA CINZA.png';
import CollabCinza from '../assets/COLLAB CINZA.png'
import Avaliacao from "../Components/Avaliacao";
import Tema from "../Components/Tema";

const members = [
  {
    name: "Giovanna Ferreira",
    image: [
        Giovanna
    ]
  },

  {
    name: "Maria Clara Duarte Dionysio",
    image: [
        Duarte
    ]
  },

  {
    name: "Julia Piazzoli Domeneghetti",
    image: [
        Julia
    ]
  },

  {
    name: "Kamilly Eduarda Silva Barra",
    image: [
        Kamilly
    ]
  },

];

function AsGatitas() {

    const [menuAberto, setMenuAberto] = useState(false);
    const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };


  return (
    <div>
        <Header
        titulo="ARQUIVO BÉLICO"
        imge={Logo_Arma_Cinza}
        onMenuClick={alternarMenu}
      />

      <br/>
      <br/>
      <Tema/>
      <br/>

      <h2 className="collab-title"> NOSSO TIME </h2>
      <Avaliacao/>
      <br/>
      <br/>

      <div className="grid">
        {menuAberto && <Nav />}

        {members.map((member, index) => (
        // Percorre o array 'members' e para cada item (chamado de 'member'), executa o que está dentro do bloco.
        // 'index' é o índice atual da iteração, usado como chave única para cada elemento do React.

        <div key={index} className="card">
          {/* A prop 'key' é necessária no React para ajudar a identificar cada item da lista. */}

          <img src={member.image} alt={member.name} className="imagens" />
          {/* Exibe a imagem do membro. 
              - 'src' define o caminho da imagem (vindo do objeto member).
              - 'alt' é o texto alternativo (acessibilidade), aqui usando o nome do membro.
              - 'className="imagens"' aplica estilos via CSS. */}

          <h2 className="name">{member.name}</h2>
          {/* Exibe o nome do membro em um título <h2>. 
              A classe 'name' pode ser usada para estilizar o texto. */}

          <p className="description">{member.description}</p>
          {/* Mostra uma descrição do membro em um parágrafo <p>. 
              A classe 'description' também permite estilização separada. */}
          </div>
        ))}
      </div>

        <br/>
        <br/>
        <br/>

      <section className="text0">
        <p className="tttxxt">
        As Gatitas: Caos, Fé e Vínculos Inquebráveis
            “As Gatitas” são quatro meninas de 17 anos que formam um grupo tão intenso quanto imprevisível. Giovanna, Julia, Kamilly e Maria não são parecidas — e é justamente isso que torna a convivência entre elas tão caótica e, ao mesmo tempo, especial. 
            Vivem discutindo, discordando, batendo de frente, mas nunca deixam de voltar umas para as outras. Elas se amam do jeito mais confuso que existe: entre brigas, olhares atravessados e abraços apertados quando ninguém está olhando.

          <br/>  Giovanna é arte pura, mas não usa pincéis — sua criatividade se expressa em ideias, palavras, cenas e silêncios. É intensa, sensível, cheia de fé e com uma visão profunda do mundo. Católica, vê Deus nos detalhes e na beleza do que é criado com alma. 
            Não tem medo de falar o que pensa e costuma bater de frente com quem tenta impor limites ao seu jeito sonhador e determinado. Seu jeito doce vem sempre com um toque de firmeza — ela sabe o que quer, e não aceita menos.

           <br/> Julia é força em estado bruto. Não tem paciência para meias palavras, nem para gente que enrola. É crítica, direta e cheia de opinião. Confia demais em si mesma e, para muitos, pode parecer mandona — mas ela só quer que as coisas sejam bem feitas. 
            Na Umbanda, encontra sua conexão espiritual e sua base emocional. Sua fé caminha com sua força, e Julia acredita que espiritualidade também é atitude. No grupo, costuma querer liderar, o que inevitavelmente gera faíscas com as outras — especialmente com Kamilly, que não abaixa a cabeça.
        </p>

        <p className="tttxxt">
           Kamilly vive entre a razão e a emoção. É melancólica, reflexiva e costuma observar mais do que falar — até que decide falar, e então ninguém consegue rebater. Tem uma mente crítica, sensível, muitas vezes silenciosa, mas cheia de profundidade. 
            Sua fé cristã é uma bússola íntima, que a guia mesmo quando tudo parece fora do lugar. É a mais intensa emocionalmente, e por isso costuma entrar em conflito com Julia, com quem trava algumas das discussões mais acaloradas do grupo. Mas também é aquela que, no fim do dia, ainda se importa — mesmo que finja que não.

            <br/>  Maria é um caso à parte. Carrega uma força silenciosa e uma sensibilidade que ela mesma tenta esconder. Pode parecer fria às vezes, um pouco distante, talvez até dura — mas quem conhece bem sabe que, quando se importa, ela demonstra de forma discreta, sem precisar dizer muito. 
            Não é a mais cuidadosa, nem faz questão de agradar. Mas é real, firme, e não mede palavras quando precisa proteger o que acredita. Tem fé em Deus e carrega isso de forma tranquila, sem precisar provar nada para ninguém. No grupo, é aquela que parece estar de fora das brigas, mas quando entra… ninguém segura.

            <br/> Juntas, as Gatitas são intensidade, contradição, carinho atravessado por farpas. Não são perfeitas, nem tentam ser. Mas se completam no caos, se sustentam na diversidade e crescem com cada confronto. Porque no fim, mesmo se amando errado, elas se amam — e isso ninguém pode negar.
        </p>
      </section>

      <br/>
      <hr></hr>
      <br/>

      <section className="collab">
        <h2 className="collab-title"> COLABORAÇÃO </h2>
        <section className="photos">
        <div className="logos">
          <img src={LogoGatitas} alt="Logo Gatitas" className="logs" />
          <img src={CollabCinza} alt="Logo Arma Cinza" className="logs1" />
          <img src={LogoArmaCinza} alt="Logo Collab Cinza" className="logs2" /> 
        </div>
        </section>
      </section>

      <br/>
      <hr></hr>
      <br/>

      <section className="vid">
      <h2 className="collab-title"> VÍDEO </h2> 
      <center>
      <iframe className="gatit-canudos"
      width="570" 
      height="355" 
      src="https://www.youtube.com/embed/5qjuKCqjaP4?si=LsrsvdBPGI0f7SCp" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen
      >
      </iframe>
      </center>
      </section>

      <Footer />
    </div>
  );
}

export default AsGatitas;
