import React from 'react';
import './Footer.css'; 
import Logo from '../assets/Logo_Unificada.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Seção de conteúdo acima da linha */}
      <div className="top-section">
        <p> <b> Telefone: </b> +55 (19) 97864-2324 </p>
        <br/>
        <p>|</p>
        <br/>
      <p> <b> Email: </b> arquivobelico@passagens.com.br </p>
      </div>
    <br/>
    <br/>
      {/* Linha */}
      <hr className="line" />
    <br/>
    <br/>
      {/* Seção com 4 itens lado a lado */}
      <div className="row">
        <div className="item_2">
        <p> <b>Sobre a Empresa:</b> </p>

        <p> Atendimento ao Cliente </p>
        <p> Blog do Arquivo Bélico </p>
        <p> Canais Oficiais </p>
        <p> Políticas de Privacidade </p>
        <p> Termos de Uso </p>
        <p> Nossas Redes Sociais </p>
        </div>

        <div className="item_2">
        <p> <b> Arquivo Bélico: Conheça mais sobre a história do mundo </b> </p>

        <p> Segunda Guerra Mundial </p>
        <p> Guerra Fria </p>
        <p> Brasil Império </p>
        <p> Brasil República </p>
        <p> Golpe de 18 de Brumário </p>
        <p> Conferência de Berlim </p>
        <p> Idade Média </p>
        </div>

        <div className="item_3">
        <p> <b> Companhias Aéreas Internacionais </b> </p>

        <p> Tap Air Portugal </p>
        <p> Copa Airlines </p>
        <p> Air France </p>
        <p> Iberia </p>
        <p> American Airlines </p>
        </div>

        <div className="item_3">
        <p> <b> Companhias Aéreas Nacionais </b> </p>

        <p> Azul Viagens </p>
        <p> Latam </p>
        <p> Tam </p>
        <p> VoePass </p>
        <p> Avianca </p>
        </div>
      </div>

      {/* Imagem abaixo dos itens */}
      <div className="image-containe">
        <img className="Img_2" src={Logo} alt="Logo" />
      </div>

    <br/> 

      {/* Seção com mais itens abaixo da imagem */}
      <div className="row">
        <div className="item">
          <br/>
          <p> MadamesVoyage.com Ltda. – CNPJ/ME 40.59.12/0008-76 </p>
 
          <p> Madames Voyage é uma marca do Grupo As Gatitas e sua razão social é MadamesVoyage.com Ltda. 
              Ministério do Turismo - Cadastur 42.395627.30.0009-5 / 42.395627.30.0009-5 – CNPJ/ME 40.59.12/0008-76. 
              <br/>
              Todos os direitos reservados. Avenida Ana Lombardi, 242, 8º andar, Jardim Canudos, Vinhedo, São Paulo, CEP 13269-540. </p>

          <p> Copyright 1992-2024, MademesVoyage.com Ltda </p>

        </div>

        <div className="item">
          <br/>
          <p>
          A Madames Voyage comercializa os produtos de seus fornecedores de forma direta pelo seu site (www.mademesvoyage.com.br), 
          aplicativo e televendas. Não há qualquer venda por redes sociais (Facebook, Instagram, Twitter, LinkedIn, TikTok, etc.).
          Pós-vendas - os canais oficiais de atendimento aos clientes são: por meio do telefone (19) 97864-2324 e Minhas Viagens. 
          <br/>
          <br/>
          A Madames Voyage é composta pelas integrantes:
          Giovanna Ferreira,
          Maria Clara Duarte,
          Julia Piazzoli,
          Kamilly Barra.
          <br/>
          As integrantes são alunas do técnico de Desenvolvimento de Sistemas do SENAI em Vinhedo-SP.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;