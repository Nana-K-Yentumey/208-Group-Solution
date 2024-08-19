import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="gramophone">
        <h3>Gramophone Academy of Music</h3>
        <div className="social-links">
          <a href="">
            <img src="src\assets\icons\facebook-2.png" alt="" />
          </a>
          <a href="">
            <img src="src\assets\icons\linkedin.png" alt="" />
          </a>
          <a href="">
            <img src="src\assets\icons\youtube.png" alt="" />
          </a>
          <a href="">
            <img src="src\assets\icons\instagram.png" alt="" />
          </a>
        </div>
        <Link to="/adminDashboard">Dashboard</Link>
      </section>
      {/* <section className="topic">
        <h4>Topic</h4>
        <ul>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
      </section>
      <section className="topic">
        <h4>Topic</h4>
        <ul>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
      </section>
      <section className="topic">
        <h4>Topic</h4>
        <ul>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
      </section> */}
    </footer>
  );
};

export default Footer;
