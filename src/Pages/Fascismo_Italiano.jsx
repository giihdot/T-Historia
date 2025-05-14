import { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";

function FascismoItaliano() {
  const [resumoWiki, setResumoWiki] = useState("");

  useEffect(() => {
    async function buscarResumo() {
      try {
        const resposta = await fetch(
          "https://pt.wikipedia.org/api/rest_v1/page/summary/Fascismo"
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
      <h1>Fascismo Italiano</h1>
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
            O fascismo italiano foi um regime autoritário liderado por Benito Mussolini,
            que governou a Itália de 1922 a 1943. O movimento surgiu no contexto da crise
            econômica e social após a Primeira Guerra Mundial, propondo uma política
            ultranacionalista, anticomunista e antidemocrática. Mussolini fundou o Partido
            Nacional Fascista e assumiu o poder após a Marcha sobre Roma, instaurando uma
            ditadura baseada no culto ao líder, no militarismo e na repressão violenta aos
            opositores.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mussolini%2C_Benito_1930s.jpg/220px-Mussolini%2C_Benito_1930s.jpg"
          alt="Benito Mussolini"
        />
      </section>

      <section>
        <div>
          <p>
            O fascismo implantou o corporativismo, controlando sindicatos e empresas para
            servir ao Estado. A educação e os meios de comunicação foram usados como
            instrumentos de propaganda. A política externa era expansionista, o que levou
            à invasão da Etiópia e à aliança com a Alemanha nazista durante a Segunda Guerra
            Mundial. O regime caiu em 1943, quando Mussolini foi deposto e preso, e a Itália
            passou a combater o Eixo. O fascismo deixou um legado sombrio na história
            italiana e mundial.
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Italian_troops_in_Ethiopia.jpg/320px-Italian_troops_in_Ethiopia.jpg"
          alt="Tropas italianas na Etiópia"
        />
      </section>

      <section className="info-img">
        <div className="video">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/QJPmd8RByWg"
            title="Fascismo Italiano - Canal História"
            allowFullScreen
          ></iframe>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Propaganda_fascista.jpg/320px-Propaganda_fascista.jpg"
          alt="Propaganda fascista"
        />
      </section>
    </div>
  );
}

export default FascismoItaliano;
