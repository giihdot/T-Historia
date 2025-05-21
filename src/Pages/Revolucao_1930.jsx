import { useEffect, useState } from "react";
import Header from "../Components/Header(Cinza)";
import Nav from "../Components/NavBar(Cinza)";
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";
import "./Rev1930.css"
import Avaliacao from "../Components/Avaliacao";
import F1 from "../assets/F1(RV30).png"
import F2 from "../assets/F2(RV30).png"
import F3 from "../assets/F3(RV30).png"
import Tema from "../Components/Tema";


function Revolucao1930() {
  const [resumoWiki, setResumoWiki] = useState("");

  useEffect(() => {
    async function buscarResumo() {
      try {
        const resposta = await fetch(
          "https://pt.wikipedia.org/api/rest_v1/page/summary/Revolução_de_1930"
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

      <Tema/>

      <div className="pagina-containe">
        {menuAberto && <Nav />}

        <div className="conteudo-principa">
          <h1 className="H1-R3">Revolução de 1930</h1>
          <Avaliacao/>

          <h2 className="H1-R30"> Resumo (Wikipédia) </h2>

          <p className="ppR30">{resumoWiki}</p>

          <section className="Flex-R">
            <div className="Flex-C">
              <p className="H1-R3"> Contexto Histórico </p>
              <p className="ppR30">
                O cenário político entre 1929 e 1930 foi muito agitado, tanto no Brasil quanto em outras partes do mundo, devido à
                Grande Depressão Americana e ao “crash” da Bolsa de Nova York. A economia de São Paulo, que dependia do café,
                teve um impacto direto desses fatores externos. A oligarquia que dominava o setor do café também controlava o poder político
                e buscava estabilidade econômica por meio da sucessão presidencial. O presidente Washington Luís, em 1929, escolheu outro
                político paulista, Júlio Prestes, como seu sucessor, ignorando os acordos da “política do café com leite”.
                Essa tensão entre as oligarquias de São Paulo e Minas Gerais levou à formação da Aliança Liberal, que incluía políticos de
                outros estados, como Rio Grande do Sul e Paraíba.

              </p>
            </div>
            <img id="Img01" className="imgs"
              src={F1}
              alt="revoluc"
            />
          </section>
          <p className="ppR30">
            A Aliança pretendia apresentar candidatos que oferecessem uma alternativa
            ao controle oligárquico. Getúlio Vargas, presidente do Rio Grande do Sul, foi o escolhido para a presidência, com João Pessoa,
            da Paraíba, como vice.
            Apesar da popularidade da Aliança Liberal, Vargas e Pessoa não conseguiram competir igualitariamente com o poder político dos paulistas.
            Washington Luís dedicou-se a garantir a eleição de Júlio Prestes, utilizando fraudes, coerções e apoio de presidentes de outros estados.
            No final, Prestes recebeu 1. 091. 709 votos, enquanto Vargas obteve 742. 794.
          </p>



          <section className="Flex-R">
            <div className="Flex-C">
              <p className="H1-R3"> Governo de Vargas </p>
              <p className="ppR30">
                Após a revolução, Getúlio Vargas liderou o novo governo provisório que tinha como objetivo desmantelar a estrutura oligárquica.
                As historiadoras mencionam que Vargas queria evitar eleições que pusessem em risco sua conquista de poder, pois isso permitiria que as elites regionais
                voltassem ao controle. Para consolidar uma nova ordem, era necessário transformar o sistema político e implementar reformas sociais e administrativas.
                Apesar de ser um projeto ambicioso, a revolução se estendeu por 15 anos, com breves períodos de governo constitucional.
                A Revolução de 1930 aconteceu quando o Brasil era uma República Oligárquica, com poucos membros da elite controlando a política e os interesses dos grandes latifundiários.
                Desde 1898, a presidência alternava entre candidatos de Minas Gerais e São Paulo, baseando-se na produção de leite e café.
              </p>
            </div>
            <img id="Img02" className="imgs"
              src={F2}
              alt="republic"
            />
          </section>
          <p className="ppR30">
            No entanto, a crise do café no final da década de 1920
            gerou desconfiança entre os estados e a classe média enfrentou aumento no custo de vida.
            A Revolução de 1930 foi uma revolta nacional contra as oligarquias no poder e resultou no fim da República Oligárquica. Após conflitos armados, Vargas se autoproclamou líder do
            Governo Provisório no Rio de Janeiro. O objetivo da revolução era derrubar o governo oligárquico e promover maior participação política. A classe média buscava maior ascensão social,
            propondo uma política mais moderna.
          </p>
          <section className="Flex-R">
            <p className="ppR30e">
              A Aliança Liberal foi formada em 1929, quando Washington Luís anunciou seu apoio a Júlio Prestes, levando à insatisfação entre Minas Gerais, Rio Grande do Sul e Paraíba. A Aliança, com
              Vargas e João Pessoa como candidatos, juntou diferentes classes políticas, mas as suspeitas de fraudes eleitorais e a punição de deputados aliados fortaleceram o descontentamento popular.
              A Constituição de 1934 foi criada após a consolidação de Getúlio Vargas no poder. Vargas revogou a Constituição de 1891 e substituiu governadores por interventores federais para evitar que
              oligarcas voltassem ao poder. Em 1932, militares paulistas tentaram retirar Vargas do poder por meio de um levante armado, mas foram contidos em poucos meses.
              Para reduzir a tensão política, Vargas permitiu a convocação de eleições que resultaram na nova Constituição.
            </p>

            <img id="Img03" className="imgs"
              src={F3}
              alt="vargas"
            />
          </section>

          <p className="ppR30"> A Constituição de 1934 foi inclusiva e trabalhista, estabelecendo o sufrágio universal,
            incluindo o voto feminino, a Justiça Eleitoral e a Justiça do Trabalho, a jornada de trabalho de oito horas, o salário mínimo, e o ensino primário gratuito e obrigatório.
            Essa Constituição estava em vigor por apenas três anos, até ser substituída pela Constituição de 1937. A Revolução de 1930 foi um marco importante, pois levou ao fim da República Oligárquica e das
            práticas políticas tradicionais como o coronelismo. A Aliança Liberal foi formada, e o assassinato de João Pessoa destacou a rivalidade política. A revolução resultou em conflitos armados entre as
            tropas de Washington Luís e as de Vargas, culminando na ascensão deste último à liderança do país.
            Após a revolução, Getúlio Vargas assumiu o Governo Provisório em 3 de novembro de 1930. Ele fez alianças importantes e criou novos ministérios, encerrando o período das oligarquias. A Revolução teve
            consequências significativas, mudando o rumo da história do Brasil, principalmente com Vargas estabelecendo a Consolidação das Leis Trabalhistas (CLT) e promovendo a modernização do país. Apesar de suas inovações,
            o governo de Vargas, durante o Estado Novo, se tornou autoritário, suprimindo a oposição e restringindo liberdades.
            Vargas deixou o poder em 1945, mas retornou em 1951. Na sua última gestão, promoveu várias obras estatais. Seu governo nacionalista gerou descontentamento entre empresários e elites. Acusado de flertar com o comunismo,
            Vargas se sentiu pressionado e cometeu suicídio em 1954, evitando a instauração de um regime ditatorial pelo menos até o Golpe Cívico-Militar de 1964.
          </p>

          <iframe className="Ifra"
            width="560"
            height="315"
            src="https://youtu.be/lEu4Lib4Y10?si=jVTglAUYVOtvF9o6"
            title="Revolução de 1930"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>



        </div>
      </div>
    </>
  );
}

export default Revolucao1930