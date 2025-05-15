import { useState } from "react";
// import "./App.css";
import Header from "../Components/Header(Azul)";
import Nav from "../Components/NavBar(Azul)";
// import Footer from "../Components/Footer";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import Avaliacao from "../Components/Avaliacao"


function Contestado() {
  const [menuAberto, setMenuAberto] = useState(false);
  
    const alternarMenu = () => {
      setMenuAberto(!menuAberto);
    };

  return (
    <>
      <Header
        titulo="ARQUIVO BÉLICO"
        imge={Logo_Arma_Cinza}
        onMenuClick={alternarMenu}
      />

      <div className="pagina-container">
        {menuAberto && <Nav />}

        <main className="conteudo-principal">


        <section>
          <h2>GUERRA DO CONTESTADO</h2>
        </section>

        <section>
          <div>
            <p>
              A Guerra do Contestado foi um conflito armado que aconteceu entre
              1912 e 1916, na região que hoje abrange os estados do Paraná e de
              Santa Catarina. O nome “Contestado” vem da disputa de terras entre
              esses dois estados, mas o conflito envolveu muito mais do que uma
              simples questão territorial. Tudo começou quando o governo federal
              permitiu a construção da estrada de ferro São Paulo - Rio Grande,
              feita por uma empresa norte-americana. Para isso, milhares de
              pessoas foram expulsas de suas terras, muitas sem qualquer
              indenização. A empresa ainda recebeu grandes faixas de terra, que
              depois foram vendidas para fazendeiros ricos. Enquanto isso, os
              trabalhadores que construíram a ferrovia foram abandonados,
              desempregados e sem terras.
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Soldados_Guerra_do_Contestado.jpg"
            alt="Soldados na Guerra do Contestado"
          />
        </section>

        <section>
          <div>
            <p>
              Essas injustiças deram força a um movimento liderado por líderes
              religiosos messiânicos, como o Monge José Maria, que pregavam contra
              os abusos dos ricos e defendiam uma vida justa para os pobres.
              Milhares de camponeses se uniram ao movimento, criando povoados onde
              tentavam viver de maneira simples e justa, inspirados pela fé e pela
              ideia de uma “terra santa”. O governo viu esses povoados como uma
              ameaça e enviou o Exército para acabar com o movimento. Assim
              começou a guerra: milhares de sertanejos enfrentando o Exército
              brasileiro, armados com pouca coisa, mas movidos por uma forte
              causa.
            </p>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Jose_Maria_-Monge_do_Contestado.jpg/220px-Jose_Maria-_Monge_do_Contestado.jpg"
            alt="Monge José Maria"
          />
        </section>

        <section>
          <div>
            <img
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/xDYo3hhVaAM"
              title="Guerra do Contestado - História do Brasil"
            />
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mapa_guerra_do_contestado.png/330px-Mapa_guerra_do_contestado.png"
            alt="Mapa da Guerra do Contestado"
          />
          <Avaliacao/>
        </section>
        </main>
        </div>
    </>
  );
}

export default Contestado;
