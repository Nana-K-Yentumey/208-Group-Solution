import { Link, useNavigate } from "react-router-dom";
import "./Navbar2.css";
import { useState } from "react";
import Swal from "sweetalert2"


const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear any authentication data (optional)
        // localStorage.removeItem('token'); // Example if you store the JWT in localStorage

        Swal.fire('Logged out!', 'You have been successfully logged out.', 'success');
        
        navigate('/'); // Navigate to the home page
      }
    });
  };

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
        <div>
        <button className="log-out" onClick={handleLogout}>

              Log Out
            {/* </Link> */}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar2;
