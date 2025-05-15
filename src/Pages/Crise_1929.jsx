import { useEffect, useState } from "react";
import Header from "../Components/Header(Cinza)";
import Nav from "../Components/NavBar(Cinza)";
import Logo_Arma_Azul from "../assets/LOGO - ARMA AZUL.png";

function Crise1929() {
  const [resumoWiki, setResumoWiki] = useState("");

  useEffect(() => {
    async function buscarResumo() {
      try {
        const resposta = await fetch(
          "https://pt.wikipedia.org/api/rest_v1/page/summary/Crise_de_1929"
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

      <div className="pagina-container">
        {menuAberto && <Nav />}

        <main className="conteudo-principal">
          <h1> Crise de 1929 </h1>

          <section>
            <strong>
              <h2>Resumo</h2>
            </strong>
            <p>{resumoWiki}</p>
          </section>

          <section>
            <div>
              <p>
                A Crise de 1929 foi uma crise econômica de grandes proporções, considerada um dos principais abalos 
                ao capitalismo liberal da história. Causada pela superprodução da indústria dos EUA e pelo subconsumo 
                dos mercados consumidores nos anos 1926-1929, teve efeitos desastrosos na economia mundial.
                    Os antecedentes históricos da Crise de 1929 foram:
                    Os anos do pós-Primeira Guerra Mundial: os EUA estavam envolvidos na reconstrução da Europa por 
                    meio de investimentos e empréstimos às nações. Isso gerou uma expansão em sua produção industrial, 
                    chamada de superprodução.
                    A década de 1920, chamada de os Golden Twenties (os anos vinte dourados, em tradução livre): uma época 
                    de grande euforia econômica interna nos EUA, de muito consumo dos produtos industrializados, chamado 
                    também de superconsumo.
                    O American Way of Life (o modo de vida americano, em tradução livre): um conjunto de valores culturais 
                    que envolviam o consumismo e a valorização de novos e modernos produtos industriais. Essa mentalidade 
                    foi exportada para o mundo.

              </p>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxK42eZBzpTPz-AFtW3ItdOUEMRzflqBF846_cS2LlwM0qM1kUNJR9Obs2KI_SjzOgOxo&usqp=CAU"
              alt="Imagem de Canudos"
            />
          </section>

          <section>
            <div>
              <p>
                As causas da Crise de 1929 foram diversas. Em primeiro lugar, é importante ter em mente que o contexto 
                dos anos 1925 e 1926 foi determinante para a crise: os países europeus que estavam, desde 1918, em movimento 
                de reconstrução encerraram esse processo e, portanto, passam a importar menos da indústria dos EUA e a 
                depender menos de seus empréstimos. No entanto, a produção industrial estadunidense não diminuiu, o que 
                gerou o subconsumo.
                Em uma análise direta, a crise foi causada pela relação entre dois fatores antagônicos:
                a superprodução, ou seja, a produção industrial elevada, que produz além do que o mercado normalmente quer comprar;
                o subconsumo, ou seja, o consumo inferior ao normal, gerado por circunstâncias do contexto histórico específico.
                Nos anos 1920, as grandes indústrias dos EUA estavam muito bem, com altos índices de produção e consumo, e o 
                valor das ações crescia. Contudo, entre 1928 e 1929, o preço das ações começou a cair devido à diminuição do 
                consumo e à desaceleração das exportações para a Europa.
                A economia dos EUA estava fortemente ligada ao mercado financeiro, com bancos, empresas e pessoas comuns investindo 
                em ações. Quando a produção industrial começou a diminuir devido ao subconsumo, isso levou a uma queda no emprego e no 
                valor das ações, mas a solução de reduzir a produção foi descartada.
                Em 1929, os sinais da crise começaram a aparecer. Entre junho e novembro daquele ano, a queda das ações foi tão forte 
                que os bancos emprestaram grandes somas para tentar manter a produção e estabilizar o valor das ações, mas sem sucesso. 
                Em outubro, a situação piorou e, no dia 24 de outubro, a Bolsa de Valores de Nova York não teve nenhuma ordem de compra. 
                Nos dias seguintes, a situação continuou a piorar, até que, em 29 de outubro de 1929, 33 milhões de ações foram postas à 
                venda sem compradores, levando à quebra da Bolsa e ao início da Grande Depressão.
                Como consequências da Crise de 1929, pode-se apontar:
                A falência de mais de 110 mil empresas e quatro mil bancos. (Maior causa de depressão do mundo)
                Mais de 13 milhões de pessoas estão desempregadas.
                A ocorrência da Grande Depressão (1929-1932), marcada pelo declínio da produção, do poder aquisitivo, e pelo desemprego generalizado.
                A Crise de 1929 foi internacionalizada, pois grande parte dos países do mundo investia na bolsa de Nova Iorque.
                A União Soviética não foi afetada diretamente pela Crise de 1929, uma vez que sua economia era fechada ao mundo capitalista.
                A Crise de 1929 teve grandes consequências para o Brasil, principalmente no campo econômico, e levou a transformações políticas e sociais. Algumas das principais consequências foram:
                Quebra do modelo de exportação de café: O Brasil dependia fortemente da exportação de café, que representava uma grande parte da sua economia. 
                Com a crise mundial, a demanda por café caiu drasticamente, o que provocou uma queda nos preços. A crise afetou diretamente os cafeicultores, 
                que não conseguiam mais vender seu produto a preços lucrativos.
                Quebra de bancos e falências de empresas: A crise afetou o sistema bancário brasileiro, causando a falência de várias instituições financeiras 
                e levando a uma grande instabilidade no setor econômico. Além disso, muitas empresas, especialmente no setor do café e indústrias associadas, faliram ou enfrentaram dificuldades financeiras.
                Política de valorização do café e queima de estoque: Para tentar conter os efeitos da crise e estabilizar o mercado interno, o governo brasileiro 
                adotou a política de queima de estoques de café, ou seja, destruiu grandes quantidades do produto para diminuir a oferta e tentar valorizar o preço. 
                No entanto, essa política não resolveu completamente o problema da superprodução.
                Industrialização e substituição das importações: A crise também acelerou o processo de industrialização do Brasil, já que o país passou a buscar alternativas para a dependência das exportações agrícolas. 
                A falta de recursos e o impacto da crise nas exportações impulsionaram o governo a incentivar a substituição de importações, com a criação de incentivos para a indústria nacional, 
                o que ajudou a diversificar a economia brasileira.
                Mudanças políticas: A crise de 1929 contribuiu para o crescimento do descontentamento político e social, especialmente entre a classe média, os militares e os trabalhadores urbanos. 
                A insatisfação com a República Velha, marcada pela corrupção e ineficiência, levou ao aumento do apoio a movimentos revolucionários. Isso culminou na Revolução de 1930, que resultou na 
                queda da República Velha e na ascensão de Getúlio Vargas ao poder.
                Aumento da pobreza e do desemprego: A crise gerou desemprego em massa, especialmente nas áreas urbanas, e uma crescente pobreza nas cidades e no campo. A queda na produção e nos 
                salários fez com que muitas famílias enfrentassem dificuldades extremas, exacerbando as tensões sociais.

              </p>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19FGJvdsQxqmkd2FvIm9inrN2il1SXR5bWBRoOIa7STCAZb-3DIJGo_pqzzLv3JiUr1s&usqp=CAU"
              alt="Antônio Conselheiro"
            />
          </section>

          <section>
            <div>
              <p>
                O New Deal foi um conjunto de programas e políticas implementadas pelo presidente Franklin D. Roosevelt nos Estados Unidos, com o objetivo de combater os efeitos da 
                Crise de 1929 e da Grande Depressão. A crise havia devastado a economia global, e os EUA estavam enfrentando um colapso econômico, com milhões de pessoas desempregadas, 
                falências em massa, falências de bancos e uma queda drástica na produção industrial. O New Deal buscou enfrentar esses problemas de várias maneiras.
                Aqui estão os principais elementos e objetivos do New Deal:
                1. Recuperação econômica
                O principal objetivo do New Deal foi restaurar a economia dos EUA. Para isso, o governo federal implementou programas para aumentar a produção industrial, aumentar o 
                consumo e reduzir o desemprego. Algumas ações incluem:
                Investimentos em infraestrutura: O governo federal financiou grandes projetos de obras públicas, como a construção de estradas, pontes, escolas, hospitais e represas. 
                Isso não só gerou empregos, mas também ajudou a modernizar a infraestrutura do país.
                Programas de ajuda ao emprego: Organizações como a Works Progress Administration (WPA) e a Civilian Conservation Corps (CCC) forneceram emprego para milhões de americanos, 
                especialmente em áreas de construção e conservação ambiental.


                2. Reformas no sistema financeiro
                O New Deal também procurou reformar o sistema bancário e financeiro para restaurar a confiança no mercado e evitar futuras crises:
                Reforma bancária: Em março de 1933, Roosevelt implementou o Banking Act, conhecido como a "Semana de Férias Bancárias", que fechou temporariamente os bancos para evitar corridas 
                bancárias. Logo após, o governo federal garantiu os depósitos bancários através da Federal Deposit Insurance Corporation (FDIC), protegendo as contas bancárias dos cidadãos.


                3. Reforma agrária
                A agricultura também foi duramente afetada pela crise. Para ajudar os agricultores e estabilizar o setor, o governo implementou programas para aumentar os preços agrícolas e melhorar as condições dos trabalhadores rurais:
                Agricultural Adjustment Act (AAA): Esse programa pagava aos agricultores para reduzir a produção de determinados produtos agrícolas (como milho, trigo e algodão), com o objetivo de aumentar os preços desses produtos. 
                Embora tenha ajudado a melhorar a renda dos agricultores, esse programa também foi criticado por sua natureza destrutiva, como a destruição de alimentos e animais enquanto milhões de americanos estavam em fome.


                4. Reformas trabalhistas e previdenciárias
                O New Deal também introduziu reformas para melhorar as condições de trabalho e garantir uma rede de segurança para os cidadãos:
                National Industrial Recovery Act (NIRA): Esse programa visava estabelecer códigos para as indústrias, fixando salários mínimos e regulando as horas de trabalho, com o objetivo de estimular a produção e melhorar as condições para os trabalhadores.


                5. Criação de agências governamentais e programas de assistência
                O New Deal criou várias agências governamentais para lidar com os problemas econômicos e sociais:
                Tennessee Valley Authority (TVA): A TVA foi criada para promover o desenvolvimento econômico no vale do Tennessee, uma das áreas mais pobres dos EUA, com a construção de represas e a geração de eletricidade para as áreas rurais.


                Resultados e críticas
                Resultados positivos: O New Deal ajudou a aliviar os efeitos da Grande Depressão, reduziu o desemprego, estabilizou o sistema bancário e criou uma rede de segurança social que ainda existe hoje.

                Críticas: O New Deal também foi alvo de críticas, principalmente por não ter conseguido acabar completamente com a Grande Depressão. Alguns críticos, como o economista Herbert Hoover e figuras conservadoras, alegavam que o governo estava intervindo 
                demais na economia. Já alguns críticos mais à esquerda, como Huey Long, achavam que as reformas não iam longe o suficiente para atender às necessidades da população mais pobre.
                Após a Crise de 1929, o mundo enfrentou uma grave recessão econômica. A recuperação foi lenta e marcada por transformações políticas e econômicas importantes:
                Recuperação nos EUA: O presidente Franklin D. Roosevelt implementou o New Deal, que trouxe reformas financeiras, programas de empregos e segurança social. A verdadeira recuperação, no entanto, veio com a Segunda Guerra Mundial, que gerou crescimento 
                econômico através da mobilização industrial.


                Impacto global: Na Europa, a crise levou ao colapso de economias e ao crescimento de regimes autoritários, como o nazismo e o fascismo. Na América Latina, a crise provocou a adoção de políticas de substituição de importações e maior intervenção estatal.


                Mudanças sociais e econômicas: A crise gerou grande desemprego e pobreza, mas também resultou na expansão do Estado de bem-estar social e na criação de programas como a Segurança Social e o seguro-desemprego nos EUA.


                Regulação financeira: Houve uma maior intervenção estatal na economia, com a criação de instituições como a SEC para regular o mercado financeiro e a FDIC para proteger os depósitos bancários.


                Crescimento de movimentos autoritários: O descontentamento com a crise favoreceu o crescimento de movimentos populistas e autoritários, como o nazismo na Alemanha e o fascismo na Itália.

              </p>
            </div>
            </section>

          <section className="info-img">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/34iCBr9r1CY?si=g7rT95A5mR_j7kYN"
                title="Guerra de Canudos - Canal História"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivxOZdVVbu3kCKavmbDv2mglI_RfUeM4yhqBxKoqqQuAGr9a8kzcrZQR62mAdcvaCd6Mpv8jXLzDtU_zF-pq-LJzmyTQPoipkwnye4r4qAovDXsNExxocj02Xrout1t_QZV_kC8ybI1yTp/s1600/5o_Batalhao_da_Policia_Militar_da_Bahia.jpg"
              alt="Gravura da Guerra de Canudos"
            />
          </section>
        </main>
      </div>
    </>
  );
}

export default Crise1929