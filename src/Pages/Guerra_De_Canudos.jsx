<<<<<<< HEAD
//import "./App.css";
import Navbar from "../Components/NavBar"
import Header from "../Components/Header"

function Canudos() {
=======
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

>>>>>>> fee691866a0af131a46a92ad0ed1df1ceefb7187
  return (
    <div>
      <Header />
      <h1>Guerra de Canudos</h1>
      <Navbar />

      {/* Resumo vindo da Wikipedia */}
      <section>
        <h2>Resumo (Wikipedia)</h2>
        <p>{resumoWiki}</p>
      </section>

      <section>
        <div>
          <p>
            A Guerra de Canudos (1896-1897) foi um dos conflitos mais
            violentos da história do Brasil. Ela aconteceu no interior do
            estado da Bahia, no arraial de Canudos, fundado por Antônio
            Conselheiro, um líder religioso que pregava contra os abusos do
            governo da República recém-instaurada e defendia um modo de vida
            simples, baseado na fé e na partilha...
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Canudos1897.jpg/320px-Canudos1897.jpg"
          alt="Imagem de Canudos"
        />
      </section>

<<<<<<< HEAD
        <section>
          <div>
            <p>
              Antônio Conselheiro, nascido no Ceará, era um líder religioso
              carismático que percorria o sertão nordestino pregando mensagens
              de fé, justiça e crítica ao abandono social do povo pobre. Ele
              acreditava que a República era injusta e anticristã, e por isso
              rejeitava os impostos e leis civis impostas pelo novo governo. Em
              1893, fundou o povoado de Canudos, no sertão da Bahia, como uma
              espécie de refúgio espiritual e social. Lá, milhares de pessoas
              passaram a viver em comunidade, compartilhando bens, praticando a
              fé católica de forma intensa e tentando construir uma sociedade
              mais justa, sem a exploração dos coronéis e sem a opressão do
              Estado. Esse modelo de vida foi interpretado como uma ameaça pela
              Igreja, pelos fazendeiros locais e pelo próprio governo da
              República. Eles acusaram Conselheiro de estar reunindo um exército
              monarquista e preparando uma rebelião. Com isso, o governo decidiu
              reprimir o movimento com violência, levando ao sangrento conflito
              conhecido como Guerra de Canudos.
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Conselheiro.jpg/220px-Conselheiro.jpg"
            alt="Antônio Conselheiro"
          />
        </section>

        <section className="info-img">
          <div className="video">
            <img
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/FWhG-MpEBHk"
              title="Guerra de Canudos - Canal História"
            />
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Gravura-Guerra_de_Canudos.jpg/320px-Gravura-Guerra_de_Canudos.jpg"
            alt="Gravura da Guerra de Canudos"
          />
        </section>
      </main>
=======
      <section>
        <div>
          <p>
            Antônio Conselheiro, nascido no Ceará, era um líder religioso
            carismático que percorria o sertão nordestino pregando mensagens
            de fé, justiça e crítica ao abandono social do povo pobre...
          </p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Conselheiro.jpg/220px-Conselheiro.jpg"
          alt="Antônio Conselheiro"
        />
      </section>
>>>>>>> fee691866a0af131a46a92ad0ed1df1ceefb7187

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

<<<<<<< HEAD
export default Canudos;
=======
export default GuerraDeCanudos;
>>>>>>> fee691866a0af131a46a92ad0ed1df1ceefb7187
