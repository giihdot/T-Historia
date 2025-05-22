import  { useState, useEffect } from "react";
import "./Avaliacao.css"

function CurtirDescurtir({ id }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    localStorage.setItem(`curtidas_${id}`, likes);
    localStorage.setItem(`descurtidas_${id}`, dislikes);
  }, [likes, dislikes, id]);

  const curtir = () => {
    setLikes(likes + 1);
  };

  const descurtir = () => {
    setDislikes(dislikes + 1);
  };

  return (
    
    <div className="botoes-curtida">
      <button className="botao-curtir" onClick={curtir}>
        👍 Curtir ({likes})
      </button>
      <button className="botao-descurtir" onClick={descurtir} >
        👎 Descurtir ({dislikes})
      </button>
    </div>
    
  );
}

export default CurtirDescurtir;

 
