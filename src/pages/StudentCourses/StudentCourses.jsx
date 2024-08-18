/* eslint-disable react/no-unescaped-entities */

import Footer from "../../components/Footer/Footer";
import NavbarStudent from "../../components/Navbar2/NavbarStudent";
import CourseCard from "../../components/CourseCard/CourseCard";
import "./StudentCourses.css";
import Courses from "./Courses";

function StudentCourses() {
  return (
    <div className="landing_page_container">
      <NavbarStudent />
      <main className="student_courses_main">
        <header className="course_header">
          <h1>COURSES</h1>
          <p>The courses you have signed up for so far!</p>
        </header>

        {/* sections here  */}
        {Courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default StudentCourses;
