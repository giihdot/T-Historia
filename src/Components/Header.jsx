import "./Header.css"


function Header(props) {
  return (
    <>
     <header>
      <span className="menu-icon">&#9776;</span> {/* Ícone de menu */}
      <h1>{props.titulo}</h1>
      <img className="Imagem" src={props.imge} alt="Logo" />
    </header>
    </>
  );
}

export default Header;


