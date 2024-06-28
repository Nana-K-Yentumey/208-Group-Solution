import { Link } from "react-router-dom";
import "./Navbar2.css";
import { useState } from "react";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar2">
      <img className="logo" src="src\assets\Grammophone2 2.png" alt="" />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : "nav-ul"}>
        <Link className="links" to="/dashboard">
          DASHBOARD
        </Link>
        <Link className="links" to="/loggedIn">
          COURSES
        </Link>
        <Link className="links" to="/contactUs">
          CONTACT US
        </Link>
        <button className="log-out">
          <Link style={{ textDecoration: "none", color: "#121212" }} to="/">
            LOG OUT
          </Link>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar2;
