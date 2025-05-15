import { useEffect, useState } from "react";
import Header from "../Components/Header(Azul)";
import Nav from "../Components/NavBar(Azul)";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import Avaliacao from "../Components/Avaliacao";

function Contestado() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [resumoWiki, setResumoWiki] = useState("");

  useEffect(() => {
    async function buscarResumo() {
      try {
        const resposta = await fetch(
          "https://pt.wikipedia.org/api/rest_v1/page/summary/Guerra_do_Contestado"
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
        imge={Logo_Arma_Cinza}
        onMenuClick={alternarMenu}
      />

      <div className="pagina-container">
        {menuAberto && <Nav />}

        <main className="conteudo-principal">
          <section>
            <h2>GUERRA DO CONTESTADO</h2>
            <h3>Resumo</h3>
            <p>{resumoWiki}</p>
          </section>

          <section>
            <div>
              <p>
                A Guerra do Contestado foi um conflito armado que aconteceu
                entre 1912 e 1916, na região que hoje abrange os estados do
                Paraná e de Santa Catarina. O nome “Contestado” vem da disputa
                territorial entre esses dois estados, mas o conflito envolveu
                muito mais do que apenas fronteiras. Ele foi marcado por tensões
                sociais, econômicas e religiosas. Tudo começou quando o governo
                federal autorizou a construção da estrada de ferro São Paulo -
                Rio Grande, realizada por uma empresa norte-americana. Para
                isso, milhares de camponeses foram expulsos de suas terras sem
                indenização. A empresa ainda recebeu grandes áreas como
                pagamento, vendendo-as depois para fazendeiros ricos. Os
                trabalhadores, abandonados e sem emprego, passaram a viver na
                miséria. Esse cenário gerou revolta e levou ao surgimento de um
                movimento liderado por monges religiosos, como José Maria, que
                pregavam justiça social, igualdade e uma vida cristã simples.
                Esses líderes foram vistos como ameaças e o governo decidiu
                reprimir o movimento com força militar. A guerra durou quatro
                anos, com diversas batalhas entre o Exército e os sertanejos. Os
                combatentes do Contestado, mesmo mal armados, resistiram
                bravamente, motivados pela fé e pela esperança de uma vida
                melhor. Ao final, milhares de pessoas morreram, e os
                sobreviventes foram forçados a abandonar suas terras. O conflito
                revelou o abismo social entre o governo e o povo do interior, e
                até hoje é lembrado como um dos episódios mais marcantes da luta
                dos pobres por justiça e dignidade no Brasil.
              </p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Soldados_Guerra_do_Contestado.jpg"
              alt="Soldados na Guerra do Contestado"
            />
          </section>

          <section>
            <div>
              <p>
                Essas injustiças deram força a um movimento liderado por líderes
                religiosos messiânicos, como o Monge José Maria. Ele era visto
                como um profeta pelo povo, pregando uma vida baseada na fé, no
                trabalho e na justiça social. Inspirados por suas palavras,
                milhares de camponeses passaram a segui-lo, formando povoados
                chamados de “comunidades santas”, onde tentavam viver com
                igualdade, partilha e longe da opressão dos grandes fazendeiros
                e do governo. Com o tempo, esses povoados passaram a ser vistos
                como uma ameaça à ordem e aos interesses da elite. O governo,
                então, enviou o Exército para acabar com o movimento. Foi o
                início de uma guerra sangrenta, na qual os sertanejos resistiram
                bravamente, mesmo sem armamento adequado. A repressão foi
                violenta e muitos inocentes perderam a vida. A Guerra do
                Contestado não foi apenas uma disputa por terra — foi a luta de
                um povo abandonado por justiça, dignidade e fé..
              </p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Jose_Maria_-Monge_do_Contestado.jpg/220px-Jose_Maria-_Monge_do_Contestado.jpg"
              alt="Monge José Maria"
            />
          </section>

          <section>
            <div className="video">
              <img
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/xDYo3hhVaAM"
                title="Guerra do Contestado - História do Brasil"
              />
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mapa_guerra_do_contestado.png/330px-Mapa_guerra_do_contestado.png"
              alt="Mapa da Guerra do Contestado"
            />
            <Avaliacao />
          </section>
        </main>
      </div>
    </>
  );
}

export default Contestado;
