import "./Header.css"


function Header(props) {
  return (
    <>
    <header>
    <h2> {props.titulo} </h2> 
    <img className="Imagem" src={props.imge} alt="Viagem" />
    </header>
    </>
  );
}

export default Header;