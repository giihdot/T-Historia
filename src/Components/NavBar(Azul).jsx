import { Link } from "react-router-dom"
import "./NavBar(Azul).css"


function Nav() {
  return (
    <nav className="navegacao">
      <Link to="/"> HOME </Link> 
      <Link to="/CRISE_1929"> CRISE 1929 </Link>
      <Link to="/FASCISMO_ITALIANO"> FASCISMO ITALIANO </Link>
      <Link to="/CANUDOS"> GUERRA DE CANUDOS </Link>
      <Link to="/CONTESTADO"> GUERRA DO CONTESTADO </Link>
      <Link to="/1º_GUERRA_MUNDIAL"> 1º GUERRA MUNDIAL </Link>
      <Link to="/REVOLUÇÃO_RUSSA"> REVOLUÇÃO RUSSA </Link>
      <Link to="/REVOLUÇÃO_1930"> REVOLUÇÃO 1930 </Link>
      <Link to="/FORMULÁRIO"> FORMULÁRIO </Link>
      <Link to="/AS_GATITAS "> AS GATITAS </Link>
    </nav>
  );
}

export default Nav;

