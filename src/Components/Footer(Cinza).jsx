import React from 'react';
import './Footer(Cinza).css';
import Logo from '../assets/COLLAB AZUL.png'

const Footer = () => {
  return (
    <footer className="footer1">
      {/* Seção de conteúdo acima da linha */}
      <div className="top-section">
        <p className='txt'> <b> Telefone: </b> +55 (19) 97864-2324 </p>
        <br />
        <p className='txt'>|</p>
        <br />
        <p className='txt'> <b> E-mail: </b> arquivobelico@history.com.br </p>
      </div>
      <br />
      <br />
      {/* Linha */}
      <hr className="line" />
      <br />
      <br />
      {/* Seção com 4 itens lado a lado */}
      <div className="row">
        <div className="item">
          <p className='pss'> <b> Sobre a Empresa: </b> </p>

          <br />

          <p className='psss'> Atendimento ao Cliente </p>
          <p className='psss'> Blog do Arquivo Bélico </p>
          <p className='psss'> Canais Oficiais </p>
          <p className='psss'> Políticas de Privacidade </p>
          <p className='psss'> Termos de Uso </p>
          <p className='psss'> Nossas Redes Sociais </p>
        </div>

        <div className="item_2">
          <p className='pss'> <b> Arquivo Bélico: Conheça mais sobre a </b> </p>
          <p className='pss'> <b> história do mundo: </b> </p>

          <br />

          <a href="https://www.suapesquisa.com/segundaguerra/" target="_blank" rel="noopener noreferrer"> Segunda Guerra Mundial </a> <br /> <br />
          <a href="https://www.suapesquisa.com/guerrafria/" target="_blank" rel="noopener noreferrer"> Guerra Fria </a> <br /> <br />
          <a href="https://www.suapesquisa.com/historiadobrasil/brasil_imperio.htm" target="_blank" rel="noopener noreferrer"> Brasil Império </a> <br /> <br />
          <a href="https://www.suapesquisa.com/historiadobrasil/causas_proclamacao_republica.htm" target="_blank" rel="noopener noreferrer"> Brasil República </a> <br /> <br />
          <a href="https://www.suapesquisa.com/historia/conferencia_berlim.htm" target="_blank" rel="noopener noreferrer"> Conferência de Berlim </a>
        </div>


        <div className="item_3">
          <p className='pss'> <b> Fatos históricos: </b> </p>

          <br />
          <br />

          <a href="https://www.suapesquisa.com/pesquisa/tratado_de_versalhes.htm" target="_blank" rel="noopener noreferrer"> 110 anos do Tratado de Versalhes </a> <br /> <br />
          <a href="https://www.suapesquisa.com/pesquisa/crise_1929.htm" target="_blank" rel="noopener noreferrer"> 90 anos do Crash da Bolsa de Nova York </a> <br /> <br />
          <a href="https://www.suapesquisa.com/historia/revolucao_cubana.htm" target="_blank" rel="noopener noreferrer"> 80 anos da Revolução Cubana </a> <br /> <br />
          <a href="https://www.suapesquisa.com/respostas_historia/corrida_espacial.htm" target="_blank" rel="noopener noreferrer"> 70 anos do Homem da Lua </a> <br /> <br />
          <a href="https://www.suapesquisa.com/pesquisa/queda_muro_berlim.htm" target="_blank" rel="noopener noreferrer"> 30 anos da Queda do Muro de Berlim </a>
        </div>

        <div className="item_4">
          <p className='pss'> <b> Outros séculos de seu interesse: </b> </p>

          <br />
          <br />


          <a href="https://www.suapesquisa.com/historia/acontecimentos_seculo_xv.htm" target="_blank" rel="noopener noreferrer"> Século XV </a> <br /> <br />
          <a href="https://noticiasconcursos.com.br/principais-acontecimentos-do-seculo-viii-confira/" target="_blank" rel="noopener noreferrer"> Século VIII </a> <br /> <br />
          <a href="https://www.suapesquisa.com/historia/acontecimentos_seculo_xix.htm" target="_blank" rel="noopener noreferrer"> Século XIX </a> <br /> <br />
          <a href="https://www.suapesquisa.com/historia/acontecimentos_seculo_xx.htm" target="_blank" rel="noopener noreferrer"> Século XX </a> <br /> <br />
          <a href="https://www.suapesquisa.com/historia/acontecimentos_seculo_xvii.htm" target="_blank" rel="noopener noreferrer"> Século XVII </a>
        </div>
      </div>

      {/* Imagem abaixo dos itens */}
      <div className="image-contain">
        <img className="imggg" src={Logo} alt="Logo" />
      </div>

      <br />

      {/* Seção com mais itens abaixo da imagem */}
      <div className="row">
        <div className="item_6">
          <br />
          <p className='txt'> ArquivoBelico.com Ltda. – CNPJ/ME 40.59.12/0008-76 </p>

          <p className='txt'> Arquivo Bélico é um site de conhecimento do Grupo As Gatitas e sua razão social é ArquivoBelico.com Ltda.
            Ministério da Educação - Cadastur 42.395627.30.0009-5 / 42.395627.30.0009-5 – CNPJ/ME 40.59.12/0008-76.
            <br />
            Todos os direitos reservados. Avenida Ana Lombardi, 242, 8º andar, Jardim Canudos, Vinhedo, São Paulo, CEP 13269-540. </p>
          <br />
          <br />
          <br />
          <p className='txt'> Copyright 1992-2024, ArquivoBélico.com Ltda </p>

        </div>

        <div className="item_5">
          <p className='txt'>
            O Arquivo Bélico distribui conhecimento de forma direta pelo seu site (www.arquivobelico.com.br),
            aplicativo e televendas. Há maiores informações nas redes sociais (Facebook, Instagram, Twitter, LinkedIn, TikTok, etc.).
            Os canais oficiais de atendimento aos clientes são: por meio do telefone (19) 97864-2324 e Atendimento ao Cliente.
          </p>

          <p className='textt'>
            O Arquivo Bélico é composto pelas integrantes: <br />
            Giovanna Ferreira, <br />
            Maria Clara Duarte, <br />
            Julia Piazzoli, <br />
            Kamilly Barra. <br />
            <br />
            As integrantes são alunas do técnico de Desenvolvimento de Sistemas do SENAI em Vinhedo-SP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;