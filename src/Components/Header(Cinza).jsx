import "./Header(Cinza).css";

function Header(props) {
  return (
    <header className="Flex-roww">
      <span className="menu-iconn" onClick={props.onMenuClick}>&#9776;</span>
      <h1 className="h1-cinza">{props.titulo}</h1>
      <img className="Imagemm" src={props.imge} alt="Logo" />
    </header>
  );
}

export default Header;

