/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "././pages/LandingPage/LandingPage";
import LandingPage2 from "././pages/LandingPage2/LandingPage2";
import Dashboard from "././pages/DashboardPage/Dashboard";
import LoginPage from "./pages/LandingPage/Modal";
import ContactUs from "././pages/ContactPage/ContactUs";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/loggedIn" Component={LandingPage2} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/contactUs" Component={ContactUs} />
          <Route path="/studentDashboard" Component={StudentDashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
