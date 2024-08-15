/* eslint-disable no-unused-vars */
import React from "react";
import "./StudentDashboard.css";
import Navbar2 from "../../components/Navbar2/Navbar2";
import SessionCard from "../../components/Cards/SessionCard";
import { instructors, sessions } from "../../components/Data";
import InstructorCard from "../../components/Cards/InstructorCard";
import Timetable from "../../components/Timetable/Timetable";
import Footer from "../../components/Footer/Footer";
import NavbarStudent from "../../components/Navbar2/NavbarStudent";

const StudentDashboard = () => {
  return (
    <main className="main-content">
      <NavbarStudent />
      <div className="container-1">
        <h2 className="welcome-msg">WELCOME BACK!</h2>
        <section className="wrapper-1">
          <div className="sessions">
            <h4 className="heading">Sessions</h4>
            {sessions.map((session) => (
              <SessionCard session={session} key={session.id} />
            ))}
          </div>
          <div className="sessions border-line">
            <h4 className="heading">Instructors</h4>
            {instructors.map((instuctor) => (
              <InstructorCard instructor={instuctor} key={instuctor.id} />
            ))}
          </div>
        </section>
        <section className="wrapper-2">
          <h4>Timetable</h4>
          <Timetable />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default StudentDashboard;
