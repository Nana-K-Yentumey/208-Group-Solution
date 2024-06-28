// import { useState } from 'react'

import { Link } from "react-router-dom";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  const clients = [
    {
      name: "Phandoh",
      profilePic: "src/assets/Images/boy.png",
      review: "Nice website",
      description: "Description",
      key: 1,
    },
    {
      name: "Phandoh",
      profilePic: "src/assets/Images/boy.png",
      review: "Nice website",
      description: "Description",
      key: 2,
    },
    {
      name: "Phandoh",
      profilePic: "src/assets/Images/boy.png",
      review: "Nice website",
      description: "Description",
      key: 3,
    },
    {
      name: "Phandoh",
      profilePic: "src/assets/Images/boy.png",
      review: "Nice website",
      description: "Description",
      key: 4,
    },
    {
      name: "Phandoh",
      profilePic: "src/assets/Images/boy.png",
      review: "Nice website",
      description: "Description",
      key: 5,
    },
    {
      name: "Phandoh",
      profilePic: "src/assets/Images/boy.png",
      review: "Nice website",
      description: "Description",
      key: 6,
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="section-1">
        <h1 className="welcome-text">
          WELCOME TO OUR <br />
          STUDENT SERVICES
        </h1>
        <p style={{ color: "#fff" }}>WE ARE GLAD TO HAVE YOU HERE WITH US.</p>
        <button className="login-btn">
          <Link
            style={{ textDecoration: "none", color: "#121212" }}
            to="/loggedIn"
          >
            LOGIN
          </Link>
        </button>
      </div>

      <div className="section-2">
        <h1>Client Reviews</h1>
        <div className="cards">
          {clients.map((client) => (
            <ReviewCard client={client} key={client.key} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
