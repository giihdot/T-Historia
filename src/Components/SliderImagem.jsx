import { useState, useEffect } from "react";
import "./SliderImagem.css";

import Img2 from "../assets/Img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/Img4.png";
import Img5 from "../assets/Img5.png";

// Define o componente funcional ImageSlider
function ImageSlider() {
  // Cria o estado currentIndex para controlar qual imagem está sendo exibida no momento
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cria um array com as imagens importadas
  const slides = [Img2, Img3, Img4, Img5];

  // Armazena o número total de imagens no carrossel
  const totalSlides = slides.length;

  // Função responsável por mover o slide para frente ou para trás
  const moveSlide = (step) => {
    // Calcula o novo índice somando o passo ao índice atual
    let newIndex = currentIndex + step;

    // Se o novo índice ultrapassar o último slide, volta para o primeiro
    if (newIndex >= totalSlides) {
      newIndex = 0;
    } 
    // Se o novo índice for menor que 0, volta para o último slide
    else if (newIndex < 0) {
      newIndex = totalSlides - 1;
    }

    // Atualiza o estado com o novo índice calculado
    setCurrentIndex(newIndex);
  };

  // Hook useEffect que roda sempre que currentIndex mudar
  useEffect(() => {
    // Cria um intervalo que muda o slide automaticamente a cada 5 segundos (5000 milissegundos)
    const intervalId = setInterval(() => {
      moveSlide(1); // Move um slide para frente
    }, 5000);

    // Retorna uma função de limpeza que cancela o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Executa novamente sempre que o currentIndex mudar

  // JSX que renderiza o carrossel
  return (
    // Elemento principal do carrossel
    <section className="carousel">
      
      {/* Container das imagens com estilo dinâmico que movimenta os slides horizontalmente */}
      <section className="slides" style={{ transform: `translateX(-${100 * currentIndex}%)` }}>
        
        {/* Mapeia o array de slides para criar uma imagem para cada item */}
        {slides.map((slide, index) => (
          // Renderiza cada imagem com uma chave única e define o src e alt
          <img key={index} src={slide} alt={`Imagem ${index + 1}`} />
        ))}
      </section>

      {/* Botão para mover para o slide anterior */}
      <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>

      {/* Botão para mover para o próximo slide */}
      <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
    </section>
  );
}

// Exporta o componente para ser usado em outros arquivos
export default ImageSlider;
