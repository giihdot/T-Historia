import { useEffect, useState } from "react";
import Header from "../Components/Header(Cinza)";
import Nav from "../Components/NavBar(Cinza)";
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";
import IM1 from "../assets/F1(GCN).png";
import IM2 from "../assets/F2(GCN).png";
import IM3 from "../assets/F3(GCN).png";
import Avaliacao from "../Components/Avaliacao";
import "./Guerra_De_Canudos.css";

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

      <div className="paagina-containerr">
        {menuAberto && <Nav />}

        <div className="conteuudo-principall">
          <h1 className="H1-CN">Guerra de Canudos</h1>
          <Avaliacao/>

          <h2 className="h1-Ce">Resumo (Wikipédia)</h2>
          <p className="ppC">{resumoWiki}</p>

          <section className="fle-R">
            <div className="fle-C">
              <h2 className="H1-CN">Contexto</h2>
              <p className="ppCN">
                A Guerra de Canudos foi um dos conflitos mais marcantes da
                história do Brasil, ocorrido no sertão da Bahia, no final do
                século XIX. Ela envolveu o exército brasileiro e os seguidores
                de Antônio Conselheiro, um líder religioso que fundou o arraial
                de Canudos. Antônio Conselheiro pregava contra os abusos dos
                coronéis, os altos impostos e o abandono dos pobres pelo governo
                republicano recém-instalado no Brasil. Em busca de justiça e
                esperança, milhares de pessoas humildes, principalmente
                sertanejos sofridos pela seca e pobreza, se juntaram a ele,
                formando uma comunidade isolada e autossuficiente. O crescimento
                de Canudos começou a incomodar as autoridades da região e também
                o governo federal, que passou a enxergar o movimento como uma
                ameaça à República. Com isso, o governo decidiu acabar com o
                arraial, enviando tropas militares. Ao todo, foram quatro
                expedições militares para destruir Canudos. As três primeiras
                fracassaram diante da resistência dos sertanejos. Apenas na
                quarta expedição, com mais de 10 mil soldados e armamentos
                pesados, o exército conseguiu vencer. O massacre foi brutal:
                cerca de 25 mil pessoas morreram, incluindo mulheres, crianças e
                idosos. Antônio Conselheiro morreu pouco antes do fim do
                conflito. A Guerra de Canudos foi um verdadeiro genocídio contra
                os pobres do sertão e ficou marcada como símbolo da injustiça
                social e da violência do Estado contra os mais vulneráveis. Até
                hoje, ela é lembrada como um dos episódios mais trágicos da
                história do Brasil.
              </p>
            </div>
            <div className="fle-C">
              <img id="IM"
                src={IM1}
                alt="Imagem de Canudos"
              />

              <img id="IM"
                src={IM2}
                alt="Indivíduos de Canudos"
              />
            </div>
          </section>

          <p className="ppCN">
            PRECISO DE MAIS INFORMAÇÕES AQUI, KAMILLY! (APENAS PARA CONTINUAR O CSS, ESTOU ESCREVENDO E OCUPANDO COM PALAVRAS ESSA ÁREA!)
          </p>

          <center> <img id="IM"
            src={IM3}
            alt="Canudos"
          /> </center>

          <p className="ppCN">
            PRECISO DE MAIS INFORMAÇÕES AQUI, KAMILLY! (APENAS PARA CONTINUAR O CSS, ESTOU ESCREVENDO E OCUPANDO COM PALAVRAS ESSA ÁREA!)
          </p>

          <center><iframe id="frame"
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/34iCBr9r1CY?si=g7rT95A5mR_j7kYN"
            title="Guerra de Canudos - Canal História"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> </center>
        </div>
      </div>
    </>
  );
}

// A guerra de Canudos terá apenas essas informações?  É bem pouco!!

export default GuerraDeCanudos;
