import { useState, useEffect } from "react";
import Header from "../Components/Header(Azul)";
import Nav from "../Components/NavBar(Azul)";
import Footer from "../Components/Footer(Azul)";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import Slider from "../Components/SliderImagem";
import "./Revolução_Russa.css";
import RevRS1 from "../assets/RevRS1.png"
import RevRS2 from "../assets/RevRS2.png"
import Bolc from "../assets/Bolc.png"
import Menc from "../assets/Menc.png"

function RevoluçãoRussa() {
  const [resumoWiki, setResumoWiki] = useState("");

  useEffect(() => {
    async function buscarResumo() {
      try {
        const resposta = await fetch(
          "https://pt.wikipedia.org/api/rest_v1/page/summary/Revolução_Russa"
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
        imge={Logo_Arma_Cinza}
        onMenuClick={alternarMenu}
      />

      <div className="pagina-container">
        {menuAberto && <Nav />}

        <div className="conteudo-principal">
          {/* Texto introdutório */}
          <h1 className="H4-RR">REVOLUÇÃO RUSSA </h1>
          <h3 className="H3-RR"> Resumo (Wikipedia) </h3>
          <p className="pRR"> {resumoWiki} </p>

          <h1 className="H3-RR"> Contexto Histórico </h1>
          <p className="pRR">
            A Revolução Russa foi o resultado do desgaste do czarismo na Rússia
            e do aumento da insatisfação social com esse regime e a situação do
            país. Em 1904, o czar Nicolau II decidiu iniciar uma guerra contra o
            Japão pelo controle da Manchúria. Essa guerra ficou conhecida como
            Guerra Russo-Japonesa.
          </p>
          <p className="pRR">
            Esse conflito agravou os problemas russos e aumentou a pobreza da
            população, que, insatisfeita, passou a realizar uma série de
            protestos e outras manifestações, como greves. Um desses protestos
            foi o Domingo Sangrento, em que a população de São Petersburgo
            realizou uma passeata pacífica pelas ruas da cidade, pedindo que o
            czar a ajudasse a enfrentar os problemas que a assolavam.
          </p>
          <div className="Box-row">
            <Slider />
            <div className="Box-colunm">
              <p className="pRR">
                Nessa passeata a população ainda exaltava o czar, carregando
                cartazes em seu apoio e cantando-lhe músicas. A reação de
                Nicolau II foi brutal, e a população que estava na passeata foi
                alvo da violência dos guardas que protegiam o Palácio de Inverno
                (casa do czar). Os guardas abriram fogo contra a população
                russa, e essa violência pode ter causado a morte de até cinco
                mil pessoas. Esse acontecimento chocou a população russa, que,
                indignada com a ação do czar, conduziu uma série de revoltas
                contra o governo.
              </p>
              <p className="pRR">
                As revoltas conduzidas pela população em reação ao Domingo
                Sangrento foram o que se chamou de Revolução de 1905, entendida
                como um ensaio para a Revolução Russa de 1917. Durante a
                Revolução de 1905, surgiram os sovietes, os conselhos formados
                pelos trabalhadores operários.
              </p>

              <p className="pRR">
                A Revolução Russa de 1917 teve suas raízes na Revolução
                Industrial, que criou o proletariado, expôs os trabalhadores à
                exploração extrema (o chamado “capitalismo selvagem”) e
                incentivou o surgimento das ideias socialistas. No século XIX,
                os operários começaram a se organizar e surgiram os primeiros
                sindicatos e teorias socialistas. Karl Marx, com o socialismo
                científico, defendia uma revolução armada para destruir o
                capitalismo e implantar o comunismo.
              </p>
            </div>
          </div>
          <p className="pRR">
            No início do século XX, a Rússia era um país atrasado economicamente
            (agrário e pouco industrializado), socialmente desigual (com uma
            elite fundiária dominante) e politicamente autocrático (sob o czar
            Nicolau II). A Revolução de 1905, após a derrota para o Japão,
            marcou o início da agitação: houve o Domingo Sangrento, o motim do
            couraçado Potemkin e uma greve geral, que levou à criação da Duma,
            uma assembleia com poderes limitados.
          </p>
          <div className="image">
          <img id="Imagem1" src={RevRS1}></img>
          <img id="Imagem1" src={RevRS2}></img>
          </div>
          <p className="pRR">
            A Primeira Guerra Mundial agravou a crise russa, com derrotas
            militares, fome e miséria. Em fevereiro de 1917, manifestações
            populares e a adesão dos soldados provocaram a queda do czar. Um
            governo provisório liberal foi formado, mas perdeu apoio ao insistir
            em continuar a guerra. Os bolcheviques, liderados por Lênin,
            retornaram do exílio e, após uma tentativa fracassada em julho,
            tomaram o poder em outubro de 1917, derrubando o governo de
            Kerensky.
          </p>
          <p className="pRR">
            Após dissolver a Duma e a Assembleia Constituinte (que não deu
            maioria aos bolcheviques), Lenin instaurou a ditadura comunista.
            Seguiram-se a Guerra Civil entre brancos e vermelhos, a NEP (Nova
            Política Econômica), a luta pelo poder entre Trotsky e Stalin, e
            finalmente a instalação da ditadura stalinista, marcada por
            repressão e autoritarismo.
          </p>
          <h3 className="H3-RR"> Revolução de Fevereiro de 1917 </h3>
          <p className="pRR">
            Em 1917, após diversas tensões políticas que se avolumavam desde
            1905, catalisadas pelo desempenho desastroso do país na guerra, a
            Rússia estava em uma situação política grave.
          </p>
          <p className="pRR">
            Como grande parte da população masculina servia ao exército na
            guerra, foi uma greve deflagrada por mulheres trabalhadoras das
            indústrias de Petrogrado (então capital) que iniciou a revolução.
            Motivadas pela fome e pelos baixos salários, as mulheres
            trabalhadoras tomaram as ruas e foram violentamente reprimidas. Esse
            episódio gerou reações de outros setores, que também se revoltaram
            contra o governo.
          </p>
          <p className="pRR">
            Rapidamente, a inconformidade se generalizou, ganhando, inclusive, o
            apoio político da Duma, representada pelo jovem líder socialista e
            deputado Alexander Kerenski, e do Soviete de Petrogrado. Diante de
            tamanha comoção popular, o czar, temendo pela vida de sua família,
            renunciou, colocando fim na monarquia e iniciando a república na
            Rússia.
          </p>
          <h3 className="H3-RR"> Revolução de Outubro de 1917 </h3>
          <p className="pRR">
            O novo governo republicano não conseguiu sanar os anseios populares
            e os problemas políticos em tempo satisfatório. Em abril de 1917, o
            líder bolchevique Lênin, anteriormente preso e exilado na Suíça,
            retornou propondo, em um documento chamado Teses de Abril, que os
            sovietes assumissem imediatamente o poder em uma revolução
            socialista.
          </p>
          <p className="pRR">
            Com o apoio bolchevique, Lênin protagonizou um golpe de Estado em
            outubro de 1917, que destituiu o governo republicano. Imediatamente,
            negociou a saída da Rússia da Primeira Guerra Mundial, nacionalizou
            terras e fábricas (uma pauta socialista) e iniciou reformas
            estruturais na economia e política russas.
          </p>
          <p className="pRR">
            Após a Revolução de Outubro, construiu-se o governo socialista russo
            que resultaria na formação da União das Repúblicas Socialistas
            Soviéticas (URSS) em 1922. O governo de Lênin foi responsável por
            implementar as primeiras medidas socialistas, e, mesmo após sua
            morte, seus sucessores mantiveram o alinhamento ideológico do país.
          </p>
          <p className="pRR">
            Após a morte de Lênin, em 1924, chegou ao poder Joseph Stalin, que
            governaria a União Soviética durante todo o período entre guerras
            (1918-1939), a Segunda Guerra Mundial (1939-1945) até sua morte, em
            1953, no início da Guerra Fria.
          </p>
          <p className="pRR">
            Diante do rápido desenvolvimento industrial, as questões sociais já
            vividas em outros países europeus também ocorreram em solo russo.
            Nesse contexto, organizou-se o Partido Operário Social-Democrata
            Russo (1898), relacionando os grupos socialistas críticos às
            condições impostas pela industrialização. Dentro da teoria marxista,
            existem etapas revolucionárias a serem cumpridas na construção do
            comunismo e a necessidade de definir em qual etapa a Rússia estaria,
            o que implicaria uma organização ou outra revolução. Essa análise
            dividiu o partido em dois grupos:
          </p>
          <div className="junt">
          <div className="Colunm">
          <p className="pRR">
            <strong> Mencheviques: </strong> grupo liderado por Julius Martov,
            entendia que o socialismo deveria ser construído com base no
            controle das instituições por meio da política e do desenvolvimento
            econômico.
          </p>
          <img id="Imagem2" src={Menc}></img>
          </div>
          <div className="Colunm">
          <p className="pRR">
            <strong> Bolcheviques: </strong> por outro lado, liderados por
            Vladmir Lênin, defendiam uma revolução socialista imediata, fruto da
            aliança de operários e camponeses.
          </p>
          <br/>
          <img id="Imagem2" src={Bolc}></img>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RevoluçãoRussa;
