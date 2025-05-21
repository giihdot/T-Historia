import { useEffect, useState } from "react";
import Header from "../Components/Header(Cinza)";
import Nav from "../Components/NavBar(Cinza)";
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";
import IM1 from "../assets/F1(GCN).png";
import IM2 from "../assets/F2(GCN).png";
import IM3 from "../assets/F3(GCN).png";
import "./Guerra_De_Canudos.css";

function GuerraDeCanudos() {
  const [resumoWiki, setResumoWiki] = useState("");
  const [menuAberto, setMenuAberto] = useState(false);

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

      <div className="pagina-containerr">
        {menuAberto && <Nav />}

        <div className="conteudo-principall">
          <h1 className="H1-CN">Guerra de Canudos</h1>

          <h2 className="h1-Ce">Resumo (Wikipédia)</h2>
          <p className="ppC">{resumoWiki}</p>

          <section className="fle-R">
            <div className="fle-C">
              <h2 className="H1-CN">Contexto</h2>
              <p className="ppCN">
                A Guerra de Canudos foi um dos conflitos mais marcantes da
                história do Brasil, ocorrido no sertão da Bahia, no final do
                século XIX. Ela envolveu o exército brasileiro e os seguidores
                de Antônio Conselheiro, um líder religioso que fundou o arraial
                de Canudos. Antônio Conselheiro pregava contra os abusos dos
                coronéis, os altos impostos e o abandono dos pobres pelo governo
                republicano recém-instalado no Brasil. Em busca de justiça e
                esperança, milhares de pessoas humildes, principalmente
                sertanejos sofridos pela seca e pobreza, se juntaram a ele,
                formando uma comunidade isolada e autossuficiente. O crescimento
                de Canudos começou a incomodar as autoridades da região e também
                o governo federal, que passou a enxergar o movimento como uma
                ameaça à República. Com isso, o governo decidiu acabar com o
                arraial, enviando tropas militares. Ao todo, foram quatro
                expedições militares para destruir Canudos. As três primeiras
                fracassaram diante da resistência dos sertanejos. Apenas na
                quarta expedição, com mais de 10 mil soldados e armamentos
                pesados, o exército conseguiu vencer. O massacre foi brutal:
                cerca de 25 mil pessoas morreram, incluindo mulheres, crianças e
                idosos. Antônio Conselheiro morreu pouco antes do fim do
                conflito. A Guerra de Canudos foi um verdadeiro genocídio contra
                os pobres do sertão e ficou marcada como símbolo da injustiça
                social e da violência do Estado contra os mais vulneráveis. Até
                hoje, ela é lembrada como um dos episódios mais trágicos da
                história do Brasil.
              </p>
            </div>
            <div className="fle-C">
              <img id="IM" src={IM1} alt="Imagem de Canudos" />

              <img id="IM" src={IM2} alt="Indivíduos de Canudos" />
            </div>
          </section>

          <p className="ppCN">
            A união entre o governo da Bahia e latifundiários contra a
            comunidade de Canudos. A justificativa corrente era de que não
            pagavam impostos e não seguiam as leis vigentes, já que eram
            seguidores de Antônio Conselheiro, um beato religioso que ditava,
            naquela comunidade ao seu redor, seus próprios ordenamentos,
            manifestando-se contrário a questões caras à época, como o casamento
            civil e o pagamento de impostos. Novos olhares historiográficos
            enxergam que Canudos foi, na verdade, um dos primeiros movimentos
            organizados de luta pela terra. Em muitas de suas pregações, Antônio
            Conselheiro dizia-se contra as desigualdades sociais e afirmava ser
            um enviado de Deus para dar fim às injustiças contra o povo,
            organizando-se com ele. Logo, a luta contra a fome e a seca, que
            assolavam o Nordeste brasileiro, foi uma das causas. Nesse mesmo
            sentido, suas falas, que beiravam a um cristianismo primitivo, eram
            malvistas pela Igreja Católica, que não queria perder seu poder e,
            por isso, chamava ele e seus seguidores de heréticos, aliando-se aos
            latifundiários e ao governo. A república, que estava em processo de
            implementação no Brasil, também era alvo de críticas do beato. Os
            grandes donos de terra o acusavam de querer a volta da monarquia. No
            entanto, ele tratava da forma como o republicanismo estava sendo
            concretizado. De todo modo, para o presidente eleito Prudente de
            Morais, ele representava uma ameaça aos seus poderes. Euclides da
            Cunha, escritor de Os Sertões, que foi durante longo período a
            principal obra para estudar Canudos, foi para o ambiente dos
            confrontos para averiguar tudo de perto, tendo em vista suas
            concepções do positivismo e darwinismo social, comuns à época.
            Porém, depois, passou a explicar o conflito como uma dicotomia entre
            o litoral e o sertão, em que um era o civilizado e o outro, a
            barbárie. Em sua opinião final, ambos eram barbarizados. Não há
            tantas fontes sobre Canudos, por isso a historiografia tem
            dificuldades em encontrar consensos quanto às suas causas. O que há
            de concordância diz respeito à violência da repressão e à
            necessidade de não dar ao acontecimento ares místicos e idealizados
            na figura do líder beato.
          </p>

          <center>
            {" "}
            <img id="IM" src={IM3} alt="Canudos" />{" "}
          </center>

          <p className="ppCN">
            Antônio Conselheiro era um religioso e foi uma figura mítica na
            Guerra de Canudos, liderando a comunidade. Canudos é um movimento
            considerado messiânico, com aproximações com o sebastianismo —
            crença difundida em Portugal, após o sumiço do monarca Dom
            Sebastião, de que ele voltaria como um messias que levaria o país de
            volta à prosperidade. Tal mito chegou ao Brasil com bastante força e
            influenciou o beato nordestino, que citava o rei português em seus
            discursos. Ele e seus seguidores ocuparam, em 1893, uma fazendo
            chamada Belo Monte, de terras improdutivas, no interior da Bahia,
            local de muita seca e desigualdades, já que não era costume entre os
            governantes dar a devida atenção ao sertão do país. Além disso, a
            abolição da escravatura era muito recente e havia sido feita de
            maneira tal que os negros e negras, antes escravizados, ficaram
            completamente desassistidos, restando-lhes a fome e a miséria. As
            fontes históricas revelam que as primeiras aparições para um público
            maior, já iniciando a típica caracterização difundida do religioso,
            foram em um jornal sergipano, em 1874, quando ele ainda não era
            conhecido como Antônio Conselheiro, e sim como Antônio dos Mares,
            uma figura mítica que andava por terras sertanejas erguendo capelas,
            igrejas e cemitérios, declamando suas críticas políticas, profecias
            religiosas e conselhos, os quais, mais tarde, conferiram a ele a
            alcunha pela qual ficou conhecido. Tais ações atraíram muita gente,
            sendo a maioria pessoas muito pobres, que passaram a segui-lo em
            suas peregrinações, até chegarem ao Arraial de Canudos-BA. Sua
            biografia diz que ele nasceu no Ceará, na cidade de Quixeramobim, em
            1828, com o nome de batismo Antônio Vicente Mendes. Estudou
            português, francês e latim e assumiu os negócios da família depois
            da morte do pai, que era comerciante. Casou-se em 1857
          </p>

          <center>
            <iframe
              id="frame"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/34iCBr9r1CY?si=g7rT95A5mR_j7kYN"
              title="Guerra de Canudos - Canal História"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>{" "}
          </center>
        </div>
      </div>
    </>
  );
}


export default GuerraDeCanudos;
