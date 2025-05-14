import Nav from "../Components/NavBar";
import Header from "../Components/Header";
// import Footer from "../Components/Footer";
import Logo_Arma_Cinza from "../assets/LOGO - ARMA CINZA.png";
//

function HomePage() {
  return (
    <>
      <Header titulo="ARQUIVO BÉLICO" imge={Logo_Arma_Cinza} />
      <Nav />

      {/* Texto introdutório */}
      <h3> Bem-vindo à Nossa Plataforma </h3>
      <p>
        Aqui você encontrará informações detalhadas sobre os principais
        acontecimentos do século XX — um período marcado por intensas
        transformações políticas, sociais, econômicas e culturais que moldaram o
        mundo como o conhecemos hoje.
      </p>
      <p>
        Ao explorar os conteúdos disponíveis neste site, você terá a
        oportunidade de compreender os contextos que deram origem a grandes
        conflitos, revoluções e mudanças estruturais que influenciaram
        diretamente o Brasil e o cenário internacional.
      </p>
      <p>
        Conhecer a história não é apenas relembrar o passado. É um exercício
        essencial para entender o presente com mais clareza, questionar as
        realidades que nos cercam e desenvolver um olhar crítico diante dos
        desafios contemporâneos. Através do estudo histórico, somos capazes de
        reconhecer padrões, evitar erros já cometidos e construir um futuro mais
        consciente, justo e informado.
      </p>
      <p>
        <strong>
          Estamos muito felizes em ter você aqui e esperamos que esta
          experiência contribua para o seu crescimento pessoal, acadêmico e
          cidadão. Boa leitura e boa jornada pelo século XX!
        </strong>
      </p>

      {/* Seção com efeito Parallax */}
      <section className="parallax-section">
        <div className="parallax-content">
          <h2>Impacto e Inovação</h2>
        </div>
      </section>

      {/* Segundo bloco de texto */}
      <h3>Por que esses temas são importantes?</h3>
      <p>
        Os temas escolhidos para este site não foram selecionados por acaso.
        Cada um deles representa momentos decisivos que influenciaram
        diretamente o século XX e, de diferentes formas, continuam impactando o
        mundo atual.
      </p>

      <p>
        <strong>Crise de 1929:</strong>
        Um colapso econômico global que evidenciou as fragilidades do
        capitalismo e provocou mudanças significativas nas economias e políticas
        dos países, inclusive no Brasil.
      </p>
      <p>
        <strong>Fascismo Italiano:</strong>
        Movimento autoritário liderado por Benito Mussolini, que exemplifica os
        perigos do extremismo político e serve de alerta para a preservação da
        democracia.
      </p>
      <p>
        <strong>Guerra de Canudos:</strong>
        Um conflito brasileiro que revela as desigualdades sociais e a repressão
        do Estado contra movimentos populares no sertão nordestino.
      </p>
      <p>
        <strong>Guerra do Contestado:</strong>
        Outro episódio de resistência popular no Brasil, onde questões de
        território, fé e exploração de recursos se misturam em uma luta
        simbólica contra a opressão.
      </p>
      <p>
        <strong>Primeira Guerra Mundial:</strong>O primeiro conflito em escala
        global, que redefiniu fronteiras, ideologias e as relações
        internacionais, inaugurando uma nova era na história contemporânea.
      </p>
      <p>
        <strong>Revolução Russa:</strong>
        Movimento que levou à criação da União Soviética e marcou o início da
        polarização ideológica entre capitalismo e socialismo, que influenciou
        todo o século XX.
      </p>
      <p>
        <strong>Revolução de 1930:</strong>
        Transformou profundamente o cenário político brasileiro, colocando
        Getúlio Vargas no poder e abrindo caminho para mudanças sociais e
        econômicas no país.
      </p>

      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
