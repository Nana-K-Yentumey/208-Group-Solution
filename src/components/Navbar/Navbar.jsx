import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h3 className="logo-name">GRAMOPHONE GHANA</h3>
      <button className="sign-up"><Link to="/contactUs">SIGN UP</Link></button>
    </nav>
  );
};

export default Navbar;
