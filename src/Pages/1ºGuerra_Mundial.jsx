import { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";

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

  return (
    <div>
      <Header />
      <h1>Primeira Guerra Mundial</h1>
      <Navbar />

      {/* Resumo da Wikipedia */}
      <section>
        <h2>Resumo (Wikipedia)</h2>
        <p>{resumoWiki}</p>
      </section>

      {/* Informações históricas */}
      <section>
        <div>
          <p>
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
          <p>
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
    </div>
  );
}

export default PrimeiraGuerraMundial;
