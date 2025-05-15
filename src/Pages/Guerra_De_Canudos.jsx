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
              <h2 className="H1-PGM">Resumo</h2>
              <p className="pp">{resumoWiki}</p>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxK42eZBzpTPz-AFtW3ItdOUEMRzflqBF846_cS2LlwM0qM1kUNJR9Obs2KI_SjzOgOxo&usqp=CAU"
              alt="Imagem de Canudos"
            />

            <div className="texto">
              <p className="pp">
               
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

          <footer>Footer</footer>
        </main>
      </div>
    </>
  );
}

export default GuerraDeCanudos;
