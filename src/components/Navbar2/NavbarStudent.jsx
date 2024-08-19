import { Link } from "react-router-dom";
import "./Navbar2.css";
import { useState } from "react";

const NavbarStudent = () => {
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
        <Link className="links" to="/studentDashboard">
          Dashboard
        </Link>
        <Link className="links" to="/loggedIn">
          Courses
        </Link>
        <Link className="links" to="/contactUs">
          Contact Us
        </Link>
        <div>
          <button className="log-out">
            <Link className="links" to="/">
              Log Out
            </Link>
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default NavbarStudent;
