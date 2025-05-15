import { useEffect, useState } from "react";
import Header from "../Components/Header(Azul)";
import Nav from "../Components/NavBar(Azul)";
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";
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

      <div className="pagina-containerr">
        {menuAberto && <Nav />}

        <main className="conteudo-principall">
          <h1 className="H1-PGM">Guerra de Canudos</h1>

          <div className="grid-container">
            <div className="texto">
              <h2 className="H1-GC">Resumo</h2>
              <p className="ppGC">{resumoWiki}</p>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxK42eZBzpTPz-AFtW3ItdOUEMRzflqBF846_cS2LlwM0qM1kUNJR9Obs2KI_SjzOgOxo&usqp=CAU"
              alt="Imagem de Canudos"
            />

            <div className="texto">
              <p className="ppGC">
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
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19FGJvdsQxqmkd2FvIm9inrN2il1SXR5bWBRoOIa7STCAZb-3DIJGo_pqzzLv3JiUr1s&usqp=CAU"
              alt="Antônio Conselheiro"
            />

            <div className="video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/34iCBr9r1CY?si=g7rT95A5mR_j7kYN"
                title="Guerra de Canudos - Canal História"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivxOZdVVbu3kCKavmbDv2mglI_RfUeM4yhqBxKoqqQuAGr9a8kzcrZQR62mAdcvaCd6Mpv8jXLzDtU_zF-pq-LJzmyTQPoipkwnye4r4qAovDXsNExxocj02Xrout1t_QZV_kC8ybI1yTp/s1600/5o_Batalhao_da_Policia_Militar_da_Bahia.jpg"
              alt="Gravura da Guerra de Canudos"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default GuerraDeCanudos;
