import { useEffect, useState } from "react";
import Header from "../Components/Header(Azul)";
import Nav from "../Components/NavBar(Azul)";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import Avaliacao from "../Components/Avaliacao";
import "./Guerra_Do_Contestado.css";
import Ig1 from "../assets/F1(GCO).png";
import Ig2 from "../assets/F2(GCO).png";
import Ig3 from "../assets/F3(GCO).png";
import "../App.css";
import Tema from "../Components/Tema";
import Footer from '../Components/Footer(Azul)'



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
    {/* <main className="Cor-Cinza"> */}
      <Header
        titulo="ARQUIVO BÉLICO"
        imge={Logo_Arma_Cinza}
        onMenuClick={alternarMenu}
      />

<Tema/>

      <div className="container-pagina">

        {menuAberto && <Nav />}

        <div className="principal-conteudo">
          <section>
            <h2 className="H1-GC">GUERRA DO CONTESTADO</h2>
            <Avaliacao/>
            <h3 className="H1-c">Resumo (Wikipédia)</h3>
            <p className="ppCO">{resumoWiki}</p>
          </section>
          <h2 className="H1-GC">Contexto</h2>
          <p className="ppCO">
            A Guerra do Contestado foi um conflito armado que aconteceu entre
            1912 e 1916, na região que hoje abrange os estados do Paraná e de
            Santa Catarina. O nome “Contestado” vem da disputa territorial entre
            esses dois estados, mas o conflito envolveu muito mais do que apenas
            fronteiras. Ele foi marcado por tensões sociais, econômicas e
            religiosas. Tudo começou quando o governo federal autorizou a
            construção da estrada de ferro São Paulo - Rio Grande, realizada por
            uma empresa norte-americana. Para isso, milhares de camponeses foram
            expulsos de suas terras sem indenização.
          </p>
          <div className="Row-F">
            <div className="FC">
              <p className="ppCO">
                {" "}
                A empresa ainda recebeu grandes áreas como pagamento,
                vendendo-as depois para fazendeiros ricos. Os trabalhadores,
                abandonados e sem emprego, passaram a viver na miséria. Esse
                cenário gerou revolta e levou ao surgimento de um movimento
                liderado por monges religiosos, como José Maria, que pregavam
                justiça social, igualdade e uma vida cristã simples. Esses
                líderes foram vistos como ameaças e o governo decidiu reprimir o
                movimento com força militar. A guerra durou quatro anos, com
                diversas batalhas entre o Exército e os sertanejos. Os
                combatentes do Contestado, mesmo mal armados, resistiram
                bravamente, motivados pela fé e pela esperança de uma vida
                melhor. Ao final, milhares de pessoas morreram, e os
                sobreviventes foram forçados a abandonar suas terras. O conflito
                revelou o abismo social entre o governo e o povo do interior, e
                até hoje é lembrado como um dos episódios mais marcantes da luta
                dos pobres por justiça e dignidade no Brasil.
              </p>
            </div>
            <section className="FC">
              <center>
                <img id="Ig" src={Ig1} alt="Soldados na Guerra do Contestado" />
                <img id="Ig" src={Ig2} alt="Cavalaria do contestado" />
              </center>
            </section>
          </div>
          <p className="ppCO">
            Essas injustiças deram força a um movimento liderado por líderes
            religiosos messiânicos, como o Monge José Maria. Ele era visto como
            um profeta pelo povo, pregando uma vida baseada na fé, no trabalho e
            na justiça social. Inspirados por suas palavras, milhares de
            camponeses passaram a segui-lo, formando povoados chamados de
            “comunidades santas”, onde tentavam viver com igualdade, partilha e
            longe da opressão dos grandes fazendeiros e do governo. Com o tempo,
            esses povoados passaram a ser vistos como uma ameaça à ordem e aos
            interesses da elite. O governo, então, enviou o Exército para acabar
            com o movimento. Foi o início de uma guerra sangrenta, na qual os
            sertanejos resistiram bravamente, mesmo sem armamento adequado. A
            repressão foi violenta e muitos inocentes perderam a vida. A Guerra
            do Contestado não foi apenas uma disputa por terra — foi a luta de
            um povo abandonado por justiça, dignidade e fé..
          </p>
          <center>
            <img id="img3" src={Ig3} alt="Monge José Maria" />
          </center>
          <p className="ppCO">
          Foi um conflito ocorrido na fronteira dos estados do Paraná e Santa
          Catarina, entre os anos de 1912 e 1916, por causa de disputas de
          terras na região. A região era contestada, por isso o nome da guerra,
          pelos dois estados, pois era rica em erva-mate e nela seria construída
          uma estrada de ferro, ligando São Paulo ao Rio Grande do Sul. Milhares
          de pessoas se deslocaram para a região, no intuito de trabalharem na
          construção da ferrovia. Logo após a inauguração, os trabalhadores
          ficaram desempregados, provocando uma crise social. Monges messiânicos
          surgiram e formaram comunidades com os sertanejos empobrecidos, sendo
          José Maria do Santo Agostinho o mais conhecido desses religiosos. A
          formação dessas comunidades preocupou o governo federal, que enviou
          várias tropas para a região, mas foram derrotadas pelos sertanejos.
          Após uma luta sangrenta, o governo derrotou os sertanejos, e os dois
          estados fizeram um acordo, estabelecendo os limites.
          </p>
            <iframe className="videoo"
              src="https://www.youtube.com/embed/5n6kplSnks4?si=lDLpSt8i5ufO3EXY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
        </div>
      </div>
      {/* </main> */}
      <Footer/>
    </>
  );
}

export default Contestado;
