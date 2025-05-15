import { useEffect, useState } from "react";
import Header from "../Components/Header(Cinza)";
import Nav from "../Components/NavBar(Cinza)";
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";

function GuerraDeCanudos() {
  const [resumoWiki, setResumoWiki] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    async function buscarResumo() {
      try {
        const resposta = await fetch(
          "https://pt.wikipedia.org/api/rest_v1/page/summary/Guerra_de_Canudos"
        );
        const dados = await resposta.json();

        if (dados.extract) {
          setResumoWiki(dados.extract);
        } else {
          setResumoWiki("Resumo não encontrado na Wikipedia.");
        }
      } catch (erro) {
        setResumoWiki("Erro ao buscar dados da Wikipedia.");
      }
    }

    buscarResumo();
  }, []);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <Header
        titulo="ARQUIVO BÉLICO"
        imge={Logo_Arma_Azul}
        onMenuClick={alternarMenu}
      />

      <div className="pagina-container">
        {menuAberto && <Nav />}

        <main className="conteudo-principal">
          <h1>Guerra de Canudos</h1>

          <section>
            <strong>
              <h2>Resumo</h2>
            </strong>
            <p>{resumoWiki}</p>
          </section>

          <section>
            <div>
              <p>
                A Guerra de Canudos (1896-1897) foi um dos conflitos mais
                violentos da história do Brasil. Ela aconteceu no interior do
                estado da Bahia, no arraial de Canudos, fundado por Antônio
                Conselheiro, um líder religioso carismático que atraía milhares
                de sertanejos pobres com suas mensagens de fé, justiça social e
                resistência ao novo regime republicano, que havia sido
                instaurado em 1889. Conselheiro criticava os altos impostos, a
                opressão estatal e a falta de apoio ao povo do sertão, ganhando
                a confiança de uma população esquecida pelo governo. Com o
                tempo, o arraial de Canudos cresceu e passou a ser visto pelas
                autoridades como uma ameaça à ordem pública e à autoridade da
                República. O governo enviou quatro expedições militares para
                acabar com o povoado. As três primeiras foram derrotadas pelos
                habitantes de Canudos, que, mesmo mal armados, conheciam bem o
                terreno e lutavam com coragem. Apenas a quarta expedição, muito
                maior e mais bem equipada, conseguiu destruir completamente o
                arraial em outubro de 1897. O massacre foi brutal: cerca de 25
                mil pessoas morreram, incluindo civis, mulheres e crianças. A
                última resistência foi feita por apenas alguns sobreviventes,
                incluindo jovens e idosos. A guerra revelou o preconceito e o
                desprezo das elites políticas e militares pelos sertanejos, além
                da dura realidade social vivida no interior do país.
              </p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Canudos1897.jpg/320px-Canudos1897.jpg"
              alt="Imagem de Canudos"
            />
          </section>

          <section>
            <div>
              <p>
                Antônio Conselheiro, nascido no Ceará, era um líder religioso
                carismático que percorria o sertão nordestino pregando mensagens
                de fé, justiça e crítica ao abandono social do povo pobre. Ele
                acreditava que a República era um sistema injusto, que só
                aumentava o sofrimento dos mais humildes, e defendia uma
                sociedade baseada em valores cristãos, partilha e simplicidade.
                Sua figura atraiu milhares de sertanejos que viam nele uma
                esperança em meio à seca, fome e miséria. Juntos, fundaram o
                arraial de Canudos, onde tentavam viver de forma comunitária e
                autossuficiente. Para o governo da época, no entanto, aquele
                povoado representava uma ameaça à ordem e aos ideais
                republicanos recém-instituídos. Apesar de sua postura pacífica,
                Conselheiro foi visto como um agitador e rebelde. Sua morte, em
                setembro de 1897, durante o cerco final a Canudos, não impediu a
                destruição completa do arraial. Mesmo após sua morte, os últimos
                seguidores resistiram até o fim, e a tragédia de Canudos se
                tornou um símbolo da luta do povo esquecido contra o poder
                opressor do Estado.
              </p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Conselheiro.jpg/220px-Conselheiro.jpg"
              alt="Antônio Conselheiro"
            />
          </section>

          <section className="info-img">
            <div className="video">
              <img
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/FWhG-MpEBHk"
                title="Guerra de Canudos - Canal História"
              />
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Gravura-Guerra_de_Canudos.jpg/320px-Gravura-Guerra_de_Canudos.jpg"
              alt="Gravura da Guerra de Canudos"
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default GuerraDeCanudos;
