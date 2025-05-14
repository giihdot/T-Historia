import { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import Header from "../Components/Header";

function GuerraDeCanudos() {
  const [resumoWiki, setResumoWiki] = useState("");

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

  return (
    <div>
      <Header />
      <Navbar />

      <h1>Guerra de Canudos</h1>
      {/* Resumo vindo da Wikipedia */}
      <section>
        <h2>Resumo (Wikipedia)</h2>
        <p>{resumoWiki}</p>
      </section>

      <section>
        <div>
          <p>
            A Guerra de Canudos (1896-1897) foi um dos conflitos mais violentos
            da história do Brasil. Ela aconteceu no interior do estado da Bahia,
            no arraial de Canudos, fundado por Antônio Conselheiro, um líder
            religioso que pregava contra os abusos do governo da República
            recém-instaurada e defendia um modo de vida simples, baseado na fé e
            na partilha...
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
            carismático que percorria o sertão nordestino pregando mensagens de
            fé, justiça e crítica ao abandono social do povo pobre...
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Conselheiro.jpg/220px-Conselheiro.jpg"
          alt="Antônio Conselheiro"
        />
      </section>

      <section className="info-img">
        <div className="video">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/FWhG-MpEBHk"
            title="Guerra de Canudos - Canal História"
          ></iframe>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Gravura-Guerra_de_Canudos.jpg/320px-Gravura-Guerra_de_Canudos.jpg"
          alt="Gravura da Guerra de Canudos"
        />
      </section>
    </div>
  );
}

export default GuerraDeCanudos;
