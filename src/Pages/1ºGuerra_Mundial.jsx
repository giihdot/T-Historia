import { useEffect, useState } from "react";
import Header from "../Components/Header(Cinza)";
import Nav from "../Components/NavBar(Cinza)";
import Footer from "../Components/Footer(Cinza)"
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";
import "./1ºGuerra_Mundial.css"

function PrimeiraGuerraMundial() {
  const [resumoWiki, setResumoWiki] = useState("");

  useEffect(() => {
    async function buscarResumo() {
      try {
        const resposta = await fetch(
          "https://pt.wikipedia.org/api/rest_v1/page/summary/Primeira_Guerra_Mundial"
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

  const [menuAberto, setMenuAberto] = useState(false);

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
      {/* Resumo da Wikipedia */}
      <section>
        <h1 className="H1-PGM"> PRIMEIRA GUERRA MUNDIAL </h1>
        <h3 className="H1-PGM">Resumo (Wikipedia)</h3>
        <p className="pp">{resumoWiki}</p>
      </section>
      
      {/* Informações históricas */}
      <section>
        <div>
          <p className="pp">
            A Primeira Guerra Mundial foi um conflito global que durou de 1914 a
            1918. Ela começou com o assassinato do arquiduque Francisco Ferdinando
            da Áustria e rapidamente se transformou em uma guerra envolvendo as
            principais potências do mundo. Os combates ocorreram principalmente na
            Europa, com o uso intensivo de trincheiras, gás tóxico e armamento
            moderno. A guerra terminou com a assinatura do Tratado de Versalhes em
            1919, que impôs duras punições à Alemanha e redefiniu fronteiras em
            todo o continente. O conflito resultou em cerca de 20 milhões de mortos
            e mudou profundamente a política, economia e cultura global.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Battle_of_the_Somme_1916.jpg"
          alt="Batalha da Primeira Guerra"
        />
      </section>

      <section>
        <div>
          <p className="pp">
            A guerra envolveu duas alianças principais: a Tríplice Entente (França,
            Reino Unido e Rússia) e as Potências Centrais (Alemanha, Áustria-Hungria
            e Império Otomano). A entrada dos Estados Unidos em 1917 foi decisiva
            para a vitória da Entente. A guerra causou um impacto psicológico
            profundo, inspirando obras literárias e culturais e abrindo caminho
            para a Segunda Guerra Mundial.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/German_soldier_WWI.jpg/800px-German_soldier_WWI.jpg"
          alt="Soldado alemão na guerra"
        />
      </section>

      <section className="info-img">
        <div className="video">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/5C3aXzO2aXo"
            title="Primeira Guerra Mundial - Canal História"
          ></iframe>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/WWI_Trenches.gif/320px-WWI_Trenches.gif"
          alt="Trincheiras na Primeira Guerra"
        />
      </section>
    </main>
    </div>
    <Footer />
    </>
  );
}

export default PrimeiraGuerraMundial;
