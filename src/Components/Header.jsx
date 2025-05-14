import "./Header.css";

function Header(props) {
  return (
    <header className="Flex-row">
      <span className="menu-icon" onClick={props.onMenuClick}>&#9776;</span>
      <h1>{props.titulo}</h1>
      <img className="Imagem" src={props.imge} alt="Logo" />
    </header>
  );
}

export default Header;

