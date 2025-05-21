import { useEffect, useState } from "react";
import Header from "../Components/Header(Azul)";
import Nav from "../Components/NavBar(Azul)";
import Footer from "../Components/Footer(Azul)";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
import F1 from "../assets/F1(I).png";
import F2 from "../assets/F2(I).png";
import F3 from "../assets/F3(I).png";
import "./Fascismo_Italiano.css";
import Avaliacao from "../Components/Avaliacao";
import "../App.css";

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

  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
     <main className="Cor-Cinza">
      <Header
        titulo="ARQUIVO BÉLICO"
        imge={Logo_Arma_Cinza}
        onMenuClick={alternarMenu}
      />

      <div className="pagina-container">
        {menuAberto && <Nav />}

        <main className="conteudo-principal">
          {/* Resumo da Wikipedia */}
          <section>
            <h1 className="H1-PGM">FASCISMO ITALIANO</h1>
            <Avaliacao />
            <h3 className="H1-PGe">Resumo (Wikipedia)</h3>
            <p className="ppRESF">{resumoWiki}</p>
          </section>

          {/* Informações históricas */}
          <section>
            <div>
              <h2 className="h2titulo"> Contexto Histórico</h2>
              <p className="ppFI">
                O fascismo italiano foi um regime político autoritário e
                ultranacionalista que se consolidou na Itália sob a liderança de
                Benito Mussolini, entre 1922 e 1943. Caracterizado por uma
                ideologia totalitária, o fascismo negava abertamente os
                princípios do liberalismo, da democracia parlamentar e do
                socialismo, considerando-os sinais de fraqueza e divisão
                nacional. Em seu lugar, defendia a centralização do poder nas
                mãos de um líder supremo — o próprio Mussolini, que se
                autoproclamava “Il Duce” (O Condutor) — e o fortalecimento do
                Estado por meio da disciplina, do militarismo e da obediência
                coletiva. O regime promovia uma visão de mundo baseada na força,
                na ordem e na superioridade da nação italiana. Para isso,
                utilizava propaganda em massa, controle rigoroso da imprensa e
                censura sistemática para manipular a opinião pública e criar um
                culto à personalidade em torno de Mussolini. A juventude foi um
                dos principais alvos dessa doutrinação ideológica: o regime
                criou instituições como a “Balilla” e a “Juventude Italiana do
                Littorio” para incutir valores fascistas desde a infância,
                exaltando a lealdade ao Estado e a disposição para a guerra. No
                plano social e cultural, o fascismo impôs um modelo autoritário
                que reprimia qualquer forma de oposição. Sindicatos livres,
                partidos políticos, jornais independentes e movimentos de
                esquerda foram perseguidos com violência. Prisões arbitrárias,
                torturas e assassinatos de opositores tornaram-se comuns,
                principalmente após a criação do Tribunal Especial para a Defesa
                do Estado. A aproximação com Adolf Hitler e o regime nazista
                fortaleceu ainda mais o caráter totalitário e racista do
                fascismo italiano. Em 1938, o regime adotou as Leis Raciais
                Fascistas, que excluíam os judeus da vida pública e
                institucional italiana. Essas leis representaram uma ruptura com
                séculos de convivência e integração da comunidade judaica no
                país, e marcaram um alinhamento ideológico com o antisemitismo
                nazista. Apesar das promessas de grandeza e de reconstrução de
                um novo império romano, o projeto fascista mergulhou a Itália em
                uma série de fracassos militares e econômicos, especialmente
                após sua entrada na Segunda Guerra Mundial ao lado da Alemanha
                nazista. As campanhas militares italianas na Grécia, no norte da
                África e na União Soviética revelaram-se desastrosas. A
                população italiana, cada vez mais empobrecida e sofrendo com
                bombardeios e escassez, começou a se voltar contra o regime. Em
                1943, com a derrota militar iminente e a ocupação do território
                italiano pelos Aliados, Mussolini foi deposto por decisão do
                próprio Grande Conselho Fascista. Pouco tempo depois, o ditador
                foi resgatado pelos alemães e instalado como líder simbólico da
                efêmera República Social Italiana, no norte do país — um
                estado-fantoche controlado por Hitler. No entanto, com o avanço
                das tropas aliadas e a resistência partigiana, Mussolini foi
                capturado e executado em 1945. O legado do fascismo é marcado
                por repressão, censura, violência política, culto ao líder,
                militarismo exacerbado e tentativa de apagar as liberdades civis
                e a diversidade social. Além disso, deixou cicatrizes profundas
                na história italiana e europeia, tornando-se símbolo dos perigos
                que os regimes autoritários representam para a humanidade.
                Estudar o fascismo é essencial para compreender como a
                democracia pode ser corroída por discursos extremistas e para
                valorizar os princípios dos direitos humanos, da liberdade de
                expressão e da justiça social em sociedades modernas.
              </p>
            </div>
            <br />
            <section className="juntIMG">
              <img
                className="IMG1F"
                src={F1}
                alt="Benito Mussolini discursando"
              />
              <img className="IMG2F" src={F2} alt="Marcha sobre Roma" />
              <img
                className="IMG3F"
                src={F3}
                alt="Mussolini e seu aliado Adolf Hitler"
              />
            </section>
          </section>
          <br />

          {/* Segunda parte do texto */}
          <section>
            <div>
              <section className="juntppFI3">
                <section className="juntppFI1">
                  <h2 className="h2titulo">
                    {" "}
                    Ascensão, Consolidação e Queda do Fascismo Italiano
                  </h2>
                  <p className="ppFI2">
                    A consolidação do regime fascista foi acompanhada por uma
                    forte propaganda estatal, que utilizava jornais, rádios,
                    filmes e cartazes para difundir os ideais do partido e
                    glorificar a figura de Mussolini. O culto à personalidade do
                    líder era constante, e ele era retratado como infalível,
                    determinado e indispensável à Itália. A juventude foi uma
                    das principais frentes de atuação do regime: escolas foram
                    adaptadas para transmitir doutrinas fascistas, e
                    organizações juvenis, como a Opera Nazionale Balilla,
                    preparavam meninos e meninas para servirem à pátria e
                    obedecerem cegamente ao Estado. No plano econômico, o
                    fascismo adotou uma política conhecida como
                    “corporativismo”, que buscava controlar os conflitos entre
                    capital e trabalho por meio de corporações supervisionadas
                    pelo governo. Embora promovesse uma aparente estabilidade,
                    essa política beneficiava os grandes empresários e limitava
                    severamente os direitos dos trabalhadores. Greves foram
                    proibidas, sindicatos independentes foram dissolvidos e o
                    Estado passou a mediar todas as relações de trabalho de
                    forma autoritária. A política externa fascista foi marcada
                    pelo desejo de expansionismo e de transformação da Itália em
                    uma potência imperial. Em 1935, Mussolini ordenou a invasão
                    da Etiópia, promovendo uma guerra violenta contra o país
                    africano. A ação gerou condenações internacionais, mas
                    fortaleceu o apoio interno ao regime, ao menos
                    temporariamente. Em 1939, a Itália invadiu a Albânia e
                    consolidou sua posição como aliada da Alemanha de Adolf
                    Hitler, selando o Pacto de Aço. Essa aliança arrastaria a
                    Itália para a Segunda Guerra Mundial, onde o país
                    enfrentaria inúmeras derrotas. Com o avanço dos Aliados e o
                    desembarque na Sicília em 1943, o regime fascista começou a
                    ruir. Mussolini foi destituído e preso, e a Itália mudou de
                    lado no conflito, aliando-se aos Aliados. No entanto, Hitler
                    resgatou Mussolini e o instalou como líder de um governo
                    fantoche na chamada República Social Italiana, no norte da
                    Itália, que durou até 1945. Ao final da guerra, Mussolini
                    foi capturado e executado por partisans (resistência
                    italiana), marcando o fim definitivo do fascismo como regime
                    oficial no país. Após a guerra, a Itália se transformou em
                    uma república democrática, e o fascismo foi amplamente
                    repudiado. No entanto, suas consequências políticas, sociais
                    e culturais continuaram a ser sentidas por décadas. O
                    fascismo italiano tornou-se símbolo de autoritarismo,
                    intolerância e repressão, e seu estudo é fundamental para
                    evitar o retorno de ideologias semelhantes.
                  </p>
                  <p className="ppFI2">
                    A memória histórica do período é constantemente debatida na
                    Itália contemporânea, com iniciativas de preservação da
                    verdade histórica e combate ao negacionismo e à banalização
                    da violência do regime.
                  </p>
                </section>

                <section className="juntppFI2">
                  <h2 className="h2titulo">
                    {" "}
                    Mussolini e seu aliado Adolf Hitler
                  </h2>
                  <p className="ppFI3">
                    A aliança entre Benito Mussolini e Adolf Hitler foi um dos
                    pilares centrais do Eixo durante a Segunda Guerra Mundial,
                    unindo dois dos regimes totalitários mais brutais do século
                    XX. Embora inicialmente Mussolini demonstrasse certo
                    desprezo pela figura de Hitler e pelo nazismo, especialmente
                    por suas ideias raciais extremas, a ascensão rápida do líder
                    alemão e seu crescente poder militar e político fizeram com
                    que o ditador italiano se aproximasse gradualmente do regime
                    nazista. Durante os anos 1930, os dois líderes começaram a
                    alinhar suas políticas externas e ideologias autoritárias.
                    Ambos rejeitavam a democracia liberal, odiavam o comunismo e
                    defendiam o expansionismo territorial. A aproximação se
                    intensificou após a invasão italiana à Etiópia em 1935, que
                    gerou condenação internacional e isolamento da Itália.
                    Sentindo-se traído pelas potências ocidentais, Mussolini viu
                    em Hitler um parceiro estratégico contra os países
                    democráticos da Europa. Em 1936, os dois regimes firmaram o
                    que foi chamado de "Eixo Roma-Berlim", um acordo que
                    estabelecia cooperação política e militar. Em 1939, pouco
                    antes do início da guerra, a aliança foi formalizada com o
                    Pacto de Aço, no qual ambos se comprometeram a apoiar-se
                    mutuamente em caso de conflito. Mussolini chegou a afirmar
                    que ele e Hitler formavam “o eixo em torno do qual o mundo
                    giraria”. Apesar da aliança, a relação entre os dois líderes
                    era desequilibrada. Hitler via Mussolini como um modelo
                    inicial de líder autoritário, mas, ao longo do tempo, a
                    Alemanha se tornou claramente dominante na parceria. A
                    Itália, com forças armadas mal preparadas e uma economia
                    frágil, passou a depender cada vez mais do apoio militar
                    alemão. Várias campanhas militares lideradas pela Itália,
                    como as invasões à Grécia e ao norte da África, falharam e
                    tiveram de ser socorridas pelos alemães. Além disso, sob
                    influência de Hitler, Mussolini adotou em 1938 as leis
                    raciais fascistas, que discriminavam judeus italianos,
                    proibindo-os de exercer cargos públicos, frequentar escolas
                    e se casar com não judeus. Essas medidas desagradaram até
                    mesmo muitos italianos que viam os judeus como parte
                    integrante da sociedade há séculos, mas Mussolini as
                    implementou para fortalecer os laços com a Alemanha nazista.
                    A relação entre os dois ditadores chegou ao fim em 1945, com
                    a derrota iminente do Eixo. Mussolini foi capturado por
                    partisans italianos enquanto tentava fugir para a Suíça e
                    foi executado em 28 de abril de 1945. Poucos dias depois,
                    Hitler cometeu suicídio em seu bunker em Berlim. O fim
                    trágico de ambos marcou o colapso de seus regimes
                    autoritários e a libertação da Europa da tirania que haviam
                    imposto por mais de uma década. A parceria entre Mussolini e
                    Hitler representa um dos momentos mais sombrios da história
                    moderna, sendo um exemplo claro de como alianças baseadas no
                    autoritarismo, no ódio e na opressão podem levar o mundo ao
                    desastre.
                  </p>
                </section>
              </section>
            </div>
          </section>
        </main>
      </div>
      <Footer />
      </main>
    </>
  );
}

export default FascismoItaliano;
