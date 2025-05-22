import { useEffect, useState } from "react";
import Header from "../Components/Header(Cinza)";
import Nav from "../Components/NavBar(Cinza)";
import Footer from "../Components/Footer(Cinza)";
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";
import Imag1 from "../assets/F1PG.png";
import Imag2 from "../assets/F2PG.png";
import Imag3 from "../assets/F3PG.png";
import Avaliacao from "../Components/Avaliacao";
import "./1ºGuerra_Mundial.css";
import "../App.css";
import Tema from "../Components/Tema";

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
      {/* <main className="Cor-Azul"> */}
        <Header
          titulo="ARQUIVO BÉLICO"
          imge={Logo_Arma_Azul}
          onMenuClick={alternarMenu}
        />

        <Tema />

        <div className="pagina-container">
          {menuAberto && <Nav />}

          <div className="conteudo-principal">
            {/* Resumo da Wikipedia */}
            <section>
              <h1 className="H1-PGM">PRIMEIRA GUERRA MUNDIAL</h1>
              <h3 className="H1-e">Resumo (Wikipedia)</h3>
              <p className="ppP">{resumoWiki}</p>
            </section>

            {/* Informações históricas */}
            <section className="f-container">
              <div className="junt-text">
                <h2 className="H1-PGM">Contexto Histórico</h2>
                <p className="ppPGM">
                  A Primeira Guerra Mundial, ocorrida entre 1914 e 1918, foi um
                  dos maiores e mais destrutivos conflitos da história moderna.
                  Suas causas são complexas e envolvem o crescimento do
                  nacionalismo na Europa, a corrida imperialista por colônias na
                  África e Ásia, o militarismo crescente entre as potências e o
                  sistema de alianças militares que dividiu o continente. De um
                  lado, formou-se a Tríplice Entente, composta por França, Reino
                  Unido e Rússia; do outro, a Tríplice Aliança, formada por
                  Alemanha, Áustria-Hungria e Itália - que mais tarde mudaria de
                  lado - . O estopim da guerra foi o assassinato do arquiduque
                  Francisco Ferdinando da Áustria, herdeiro do Império
                  Austro-Húngaro, por um nacionalista sérvio em Sarajevo, no dia
                  28 de junho de 1914. A partir desse evento, os países
                  envolvidos ativaram suas alianças, mergulhando a Europa em uma
                  guerra de proporções globais. O conflito foi marcado por
                  batalhas sangrentas, principalmente nas trincheiras da frente
                  ocidental, onde os soldados enfrentavam condições precárias,
                  fome, frio e constante bombardeio. Novas tecnologias bélicas,
                  como metralhadoras, aviões, tanques e armas químicas, foram
                  utilizadas em larga escala, aumentando ainda mais a letalidade
                  da guerra. Ao longo dos anos, milhões de soldados e civis
                  morreram, e as economias dos países envolvidos ficaram
                  devastadas. Em 1917, a entrada dos Estados Unidos na guerra ao
                  lado da Tríplice Entente deu novo fôlego ao grupo,
                  contribuindo decisivamente para a derrota dos impérios
                  centrais. A guerra terminou oficialmente em 11 de novembro de
                  1918, com a rendição da Alemanha. No ano seguinte, foi
                  assinado o Tratado de Versalhes, que impôs severas punições
                  aos alemães, incluindo perdas territoriais, limitações
                  militares e pesadas indenizações financeiras. O ressentimento
                  causado por esse tratado foi um dos fatores que contribuíram
                  para a ascensão do nazismo e, posteriormente, para o início da
                  Segunda Guerra Mundial. Além das consequências políticas, a
                  Primeira Guerra Mundial provocou a queda de grandes impérios,
                  como o Austro-Húngaro, o Otomano, o Russo e o Alemão,
                  redesenhando o mapa da Europa e gerando instabilidade por
                  décadas. Com cerca de 17 milhões de mortos e mais de 20
                  milhões de feridos, o conflito marcou profundamente o século
                  XX e inaugurou uma nova era nas relações internacionais.
                </p>
              </div>
              <div className="junt-text">
                <img
                  className="img1PGM"
                  src={Imag1}
                  alt="Batalha de trincheiras da Primeira Guerra"
                />
                <img
                  className="img2PGM"
                  src={Imag2}
                  alt="Movimentação dos soldados na Primeira Guerra"
                />
                <img
                  className="img2PGM"
                  src={Imag3}
                  alt="Trincheiras na Primeira Guerra"
                />
              </div>
            </section>

            {/* Segunda parte do texto */}
            <section className="f-containerr">
              <div className="junt-imag">
                <p className="ppPGM">
                  A Primeira Guerra Mundial envolveu duas grandes alianças
                  militares que dividiram a Europa e, posteriormente, o mundo.
                  De um lado estava a Tríplice Entente, formada por França,
                  Reino Unido e Rússia, que buscavam conter o avanço do
                  militarismo alemão e equilibrar o poder europeu. Do outro lado
                  estavam as Potências Centrais, lideradas por Alemanha,
                  Áustria-Hungria e o Império Otomano, com ambições territoriais
                  e desejo de expansão de influência. A guerra se intensificou
                  ao longo dos anos, transformando-se em um conflito total, com
                  mobilização de milhões de soldados e recursos civis. A entrada
                  dos Estados Unidos em 1917, após ataques alemães a navios
                  civis e pela defesa da democracia, foi decisiva para a vitória
                  da Entente, pois forneceu apoio militar, econômico e moral no
                  momento em que os aliados europeus estavam enfraquecidos pelo
                  desgaste da guerra. Além da destruição material e da enorme
                  perda de vidas, a guerra deixou marcas profundas na psique
                  coletiva da humanidade. O trauma vivido nas trincheiras, o
                  sofrimento dos soldados e o luto das famílias marcaram uma
                  geração inteira. Esse impacto psicológico se refletiu
                  intensamente na literatura, no cinema, na arte e na filosofia
                  do pós-guerra. Surgiram obras críticas ao nacionalismo e à
                  guerra, como os romances de Erich Maria Remarque, os poemas de
                  Wilfred Owen, e as pinturas expressionistas que denunciavam a
                  brutalidade do conflito. A desilusão generalizada com a guerra
                  e seus resultados também contribuiu para a instabilidade
                  política nas décadas seguintes.
                </p>
              </div>
              <div className="junt-imag">
                <h3 className="H1-PGM">
                  Indicação de Livros que relata os acontecimentos da Primeira
                  Grande Guerra:
                </h3>
                <div className="f-container">
                  <img
                    className="livroPGM"
                    src="https://www.lpm.com.br/livros/imagens/primeira_guerra_mundial_nova_2019_9788525420404_hd.jpg"
                    alt="Livro - Primeira Guerra Mundial"
                  />
                  <img
                    className="livroPGM"
                    src="https://a-static.mlcdn.com.br/1500x1500/livro-a-historia-da-primeira-guerra-mundial-1914-1918/cliquebooks/550200-4/a579153fb0b0a3f990016f46dcba8fea.jpg"
                    alt="Livro - Primeira Guerra Mundial"
                  />
                </div>
                <p className="ppPG">
                  Dois livros importantes que abordam a Primeira Guerra Mundial
                  são "Primeira Guerra Mundial: Uma Breve Introdução", de
                  Michael Howard, e "1914-1918: A História da Primeira Guerra
                  Mundial", de David Stevenson. O primeiro é mais curto e
                  direto, ideal para quem busca uma explicação rápida e clara
                  sobre as causas, o desenvolvimento e as consequências da
                  guerra. Já a obra de Stevenson é mais longa e detalhada,
                  voltada para leitores que desejam um estudo aprofundado sobre
                  o conflito, abordando aspectos políticos, sociais e militares
                  com riqueza de informações. Ambos os livros são ótimos, cada
                  um com uma proposta diferente: um para introduzir o tema,
                  outro para explorá-lo em profundidade.
                </p>
              </div>
            </section>

            <p className="ppPGM">
              O sentimento de revanchismo, especialmente na Alemanha, alimentado
              pelas duras condições do Tratado de Versalhes, preparou o terreno
              para o surgimento do nazismo e a eclosão da Segunda Guerra Mundial
              em 1939. Assim, a Primeira Guerra Mundial não apenas transformou o
              cenário geopolítico mundial, como também alterou profundamente a
              forma como a sociedade passou a compreender o conflito, a
              violência e a política.
            </p>

           <Avaliacao /> 

            {/* Filme indicado */}
            <section className="junt-imag">
              <h3 className="H1-PGMe">
                Indicação de Filme que relata os acontecimentos da Primeira
                Grande Guerra:
              </h3>

              <iframe
                className="junt-imags"
                width="650"
                height="410"
                src="https://www.youtube.com/embed/_3gy6K7LXHg?si=kWqB4jft0wm891eY"
                title="Filme(Trailer) - 1917"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </section>
          </div>
        </div>
        <Footer />
      {/* </main> */}
    </>
  );
}

export default PrimeiraGuerraMundial;
