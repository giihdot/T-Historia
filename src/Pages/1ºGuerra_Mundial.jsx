import { useEffect, useState } from "react";
import Navbar from "../Components/NavBar"
// import Footer from "../Components/Footer"
import Header from "../Components/Header"


export default function PrimeiraGuerraMundial() {
  const [resumo, setResumo] = useState("");

  useEffect(() => {
    fetch(
      "https://pt.wikipedia.org/api/rest_v1/page/summary/Primeira_Guerra_Mundial"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.extract) {
          setResumo(data.extract);
        } else {
          setResumo("Não foi possível carregar o resumo da Wikipedia.");
        }
      })
      .catch(() => {
        setResumo("Erro ao buscar dados da Wikipedia.");
      });
  }, []);

  return (
    <div>
        <Header/>

      <div>
        <Navbar/>

        {/* Conteúdo principal */}
        <main>
          <h1>1ª GUERRA MUNDIAL</h1>

          <div>
            <div>
              <strong>INFO</strong>
              <p>{resumo}</p>
            </div>

            <div>
              <strong>IMG</strong>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Battle_of_the_Somme_1916.jpg"
                alt="Batalha"
              />
            </div>

            <div>
              <strong>IMG</strong>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/German_soldier_WWI.jpg/800px-German_soldier_WWI.jpg"
                alt="Soldado"
              />
            </div>

            <div>
              <strong>LIV.</strong>
              <p>"A Primeira Guerra Mundial" - Hew Strachan.</p>
            </div>

            <div>
              <strong>VID.</strong>
              <a
                href="https://www.youtube.com/watch?v=5C3aXzO2aXo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vídeo no YouTube
              </a>
            </div>

            <div>
              <strong>INFO</strong>
              <p>
                Foi marcada pelo uso de trincheiras, novas armas e pelo impacto
                geopolítico profundo.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* <Footer/> */}
    </div>
  );
}
