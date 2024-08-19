/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "././pages/LandingPage/LandingPage";
import StudentCourses from "./pages/StudentCourses/StudentCourses";
import Dashboard from "././pages/DashboardPage/Dashboard";
import LoginPage from "./pages/LandingPage/Modal";
import ContactUs from "././pages/ContactPage/ContactUs";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard/InstructorDashboard";
import InstructorCourses from "./pages/InstructorCourses/InstructorCourses";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Footer from "./components/Footer/Footer";
import AdminStudentTab from "./pages/AdminStudentTab/AdminStudentTab";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/loggedIn" Component={StudentCourses} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/contactUs" Component={ContactUs} />
          <Route path="/studentDashboard" Component={StudentDashboard} />
          <Route path="/instructorDashboard" Component={InstructorDashboard} />
          <Route path="/instructorCourses" Component={InstructorCourses} />
          <Route path="/adminDashboard" Component={AdminDashboard} />
          <Route path="/adminPage" Component={AdminStudentTab} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
