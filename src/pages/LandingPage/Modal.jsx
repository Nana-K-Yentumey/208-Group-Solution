/* eslint-disable react/prop-types */
import { useState } from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ show, handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    // Example: authenticate the user using an API call

    if (username === "admin" && password === "password") {
      setError("");
      console.log("Login successful");
      navigate("/dashboard");
    } else if (username === "student" && password === "student123") {
      setError("");
      console.log("Login successful");
      navigate("/studentDashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="logIn-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
