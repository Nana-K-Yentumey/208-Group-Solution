// import React from 'react'
import Footer from "../../components/Footer/Footer";
import NavbarInstructor from "../../components/Navbar2/NavbarInstructor";
import "./InstructorCourses.css";

const InstructorCourses = () => {
  return (
    <div className="instructor_courses_main">
      <NavbarInstructor />
      <section className="courses_section"></section>
      <Footer />
    </div>
  );
};

export default InstructorCourses;
