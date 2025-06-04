import { useEffect, useState } from "react";
import Header from "../Components/Header(Cinza)";
import Nav from "../Components/NavBar(Cinza)";
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";
import IM1 from "../assets/F1(GCN).png";
import IM2 from "../assets/F2(GCN).png";
import IM3 from "../assets/F3(GCN).png";
import Avaliacao from "../Components/Avaliacao";
import "./Guerra_De_Canudos.css";
import "../App.css";
import Tema from "../Components/Tema";
import Footer from "../Components/Footer(Cinza)";

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
      {/* <main className="Cor-Azul"> */}
        <Header
          titulo="ARQUIVO BÉLICO"
          imge={Logo_Arma_Azul}
          onMenuClick={alternarMenu}
        />

        <Tema />

        <div className="pagina-container">
          {menuAberto && <Nav />}
          <div className="conteudo-principal">
            <h1 className="H1-CN">Guerra de Canudos</h1>
           

            <h2 className="h1-Ce">Resumo (Wikipédia)</h2>
            <p className="ppC">{resumoWiki}</p>

            <section className="fle-R">
              <div className="fle-C">
                <h2 className="H1-CN">Contexto</h2>
                <p className="ppCN">
                  A Guerra de Canudos foi um dos conflitos mais marcantes da
                  história do Brasil, ocorrido no sertão da Bahia, no final do
                  século XIX. Ela envolveu o exército brasileiro e os seguidores
                  de Antônio Conselheiro, um líder religioso que fundou o
                  arraial de Canudos. Antônio Conselheiro pregava contra os
                  abusos dos coronéis, os altos impostos e o abandono dos pobres
                  pelo governo republicano recém-instalado no Brasil. Em busca
                  de justiça e esperança, milhares de pessoas humildes,
                  principalmente sertanejos sofridos pela seca e pobreza, se
                  juntaram a ele, formando uma comunidade isolada e
                  autossuficiente. O crescimento de Canudos começou a incomodar
                  as autoridades da região e também o governo federal, que
                  passou a enxergar o movimento como uma ameaça à República. Com
                  isso, o governo decidiu acabar com o arraial, enviando tropas
                  militares. Ao todo, foram quatro expedições militares para
                  destruir Canudos. As três primeiras fracassaram diante da
                  resistência dos sertanejos. Apenas na quarta expedição, com
                  mais de 10 mil soldados e armamentos pesados, o exército
                  conseguiu vencer. O massacre foi brutal: cerca de 25 mil
                  pessoas morreram, incluindo mulheres, crianças e idosos.
                  Antônio Conselheiro morreu pouco antes do fim do conflito. A
                  Guerra de Canudos foi um verdadeiro genocídio contra os pobres
                  do sertão e ficou marcada como símbolo da injustiça social e
                  da violência do Estado contra os mais vulneráveis. Até hoje,
                  ela é lembrada como um dos episódios mais trágicos da história
                  do Brasil.
                </p>
              </div>
              <div className="fle-C">
                <img id="IM" src={IM1} alt="Imagem de Canudos" />

                <img id="IM" src={IM2} alt="Indivíduos de Canudos" />
              </div>
            </section>

            <p className="ppCN">
              As causas da Guerra de Canudos foram: por parte da Igreja, a
              perseguição de Antônio Conselheiro, o beato que fazia com que ela
              perdesse fiéis; por parte dos latifundiários, tentar dar um fim à
              ocupação de terras e lutas pelo fim da miséria no Nordeste; para o
              governo baiano, a pressão dos dois últimos setores; e para o
              governo federal, um impedimento de crise à implementação da
              República, que estava em curso. Os participantes da Guerra de
              Canudos eram: Antônio Conselheiro e seus seguidores, o exército, a
              Igreja, os latifundiários, o governo da Bahia e o governo federal.
              Antônio Conselheiro foi um peregrino que, a princípio, caminhava
              pelos sertões da Bahia e Sergipe, principalmente, pregando de
              maneira messiânica contra a fome, a seca e a miséria, tecendo
              críticas políticas à forma como estava se dando a transição
              republicana e dizendo ser um enviado de Deus para acabar com as
              desigualdades. A comunidade de Canudos era composta por 25 mil
              pessoas que começaram seguindo Conselheiro e depois e se
              instalaram junto a ele na fazenda improdutiva chamada Belo Monte
              depois de ocupá-la. A destruição de Canudos aconteceu depois de
              quatro tentativas: duas do governo da Bahia junto à Igreja e aos
              coronéis; outra pelo exército brasileiro, que não obteve êxito por
              não saber lidar com as peculiaridades da região; e a quarta e
              última, quando, tendo sido chamado de fraco na capital, Prudente
              de Morais decidiu enviar 5 mil homens altamente munidos, além de
              canhões para o Nordeste, até então desassistido. As consequências
              da Guerra de Canudos foram a destruição completa de tudo o que
              havia no arraial, milhares de mortes, fome na região, exposição em
              praça pública do “troféu” da cabeça de Antônio Conselheiro, além
              de diversas outras violências e barbaridades praticadas pelas
              forças armadas ao final do confronto.{" "}
            </p>

            <center>
              {" "}
              <img id="IM" src={IM3} alt="Canudos" />{" "}
            </center>

            <p className="ppCN">
              As causas da Guerra de Canudos foram: por parte da Igreja, a
              perseguição de Antônio Conselheiro, o beato que fazia com que ela
              perdesse fiéis; por parte dos latifundiários, tentar dar um fim à
              ocupação de terras e lutas pelo fim da miséria no Nordeste; para o
              governo baiano, a pressão dos dois últimos setores; e para o
              governo federal, um impedimento de crise à implementação da
              República, que estava em curso. Os participantes da Guerra de
              Canudos eram: Antônio Conselheiro e seus seguidores, o exército, a
              Igreja, os latifundiários, o governo da Bahia e o governo federal.
              Antônio Conselheiro foi um peregrino que, a princípio, caminhava
              pelos sertões da Bahia e Sergipe, principalmente, pregando de
              maneira messiânica contra a fome, a seca e a miséria, tecendo
              críticas políticas à forma como estava se dando a transição
              republicana e dizendo ser um enviado de Deus para acabar com as
              desigualdades. A comunidade de Canudos era composta por 25 mil
              pessoas que começaram seguindo Conselheiro e depois e se
              instalaram junto a ele na fazenda improdutiva chamada Belo Monte
              depois de ocupá-la. A destruição de Canudos aconteceu depois de
              quatro tentativas: duas do governo da Bahia junto à Igreja e aos
              coronéis; outra pelo exército brasileiro, que não obteve êxito por
              não saber lidar com as peculiaridades da região; e a quarta e
              última, quando, tendo sido chamado de fraco na capital, Prudente
              de Morais decidiu enviar 5 mil homens altamente munidos, além de
              canhões para o Nordeste, até então desassistido. As consequências
              da Guerra de Canudos foram a destruição completa de tudo o que
              havia no arraial, milhares de mortes, fome na região, exposição em
              praça pública do “troféu” da cabeça de Antônio Conselheiro, além
              de diversas outras violências e barbaridades praticadas pelas
              forças armadas ao final do confronto.
            </p>
            <br/>
            <br/>
             <Avaliacao />
             <br/>
             <br/>
             <br/>
            <center>
              <iframe
              width="100%" 
              height="420" 
              src="https://www.youtube.com/embed/EykWGVlNDRg?si=pEaKVGuWxzC6jlBE" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen
              ></iframe>{" "}
            </center>
          </div>
        </div>
      {/* </main> */}
      <Footer />
    </>
  );
}

export default GuerraDeCanudos;
