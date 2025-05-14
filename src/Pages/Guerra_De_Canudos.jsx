import "./App.css";
import Navbar from "../Components/NavBar"
import Header from "../Components/Header"

function App() {
  return (
    <div>
      <Header/>
        <h1>Guerra de Canudos</h1>
      <Navbar/>

      <main>
        <section>
          <h2>GUERRA DE CANUDOS</h2>
        </section>

        <section>
          <div>
            <p>
              A Guerra de Canudos (1896-1897) foi um dos conflitos mais
              violentos da história do Brasil. Ela aconteceu no interior do
              estado da Bahia, no arraial de Canudos, fundado por Antônio
              Conselheiro, um líder religioso que pregava contra os abusos do
              governo da República recém-instaurada e defendia um modo de vida
              simples, baseado na fé e na partilha. Com o tempo, Canudos cresceu
              e atraiu milhares de sertanejos pobres, fugindo da fome, seca e
              exploração dos grandes fazendeiros. Esse crescimento chamou a
              atenção das autoridades, que começaram a ver o movimento como uma
              ameaça à ordem política. Eles acreditavam que o povoado queria
              restaurar a monarquia no Brasil. O governo enviou quatro
              expedições militares para destruir Canudos. As três primeiras
              falharam, sendo derrotadas pelos sertanejos mal armados, mas muito
              determinados. Apenas na quarta expedição, com mais de 8 mil
              soldados e armamento pesado, o Exército conseguiu invadir e
              arrasar completamente o arraial. Mais de 20 mil pessoas foram
              mortas, a maioria civis, incluindo mulheres e crianças. Canudos
              foi totalmente destruída. O massacre virou símbolo da violência do
              Estado contra os pobres e da incompreensão dos governantes com as
              culturas populares do sertão.
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
      </main>

    </div>
  );
}

export default App;
