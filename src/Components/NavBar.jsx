import { Link } from "react-router-dom"
import "./Navbar.css"


function Nav() {
  return (
    <nav className="navegacao">
      <Link to="/"> Home </Link> 
      <Link to="/CRISE 1929"> CRISE 1929 </Link>
      <Link to="/FASCISMO ITALIANO"> FASCISMO ITALIANO </Link>
      <Link to="/CANUDOS"> GUERRA DE CANUDOS </Link>
      <Link to="/CONTESTADO"> GUERRA DO CONTESTADO </Link>
      <Link to="/1º GUERRA MUNDIAL"> 1º GUERRA MUNDIAL </Link>
      <Link to="/REVOLUÇÃO RUSSA"> REVOLUÇÃO RUSSA </Link>
      <Link to="/REVOLUÇÃO 1930"> REVOLUÇÃO 1930 </Link>
      <Link to="/FORMULÁRIO"> FORMULÁRIO </Link>
      <Link to="/AS GATITAS "> AS GATITAS </Link>
    </nav>
  );
}

export default Nav;

