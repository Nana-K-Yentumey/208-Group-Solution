import React, { useState, useEffect } from 'react';
import Footer from "../../components/Footer/Footer";
import NavbarInstructor from "../../components/Navbar2/NavbarInstructor";
import InstructorCourseCard from "../../components/CourseCard/InstructorCourseCard";
import "./InstructorCourses.css";
import InstructorTimetable from '../../components/Timetable/InstuctorTimetable';

const InstructorCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        // Fetch courses for the instructor
        const response = await fetch("http://localhost:4000/instructors/courses", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error("Courses response error:", response.statusText);
          return;
        }

        const data = await response.json();
        setCourses(data.courses); // Update with the appropriate field
      } catch (err) {
        console.error("Error fetching instructor courses data:", err);
      }
    };

    fetchCoursesData();
  }, []);

  return (
    <div className="instructor_courses_main">
      <NavbarInstructor />
      <section className="courses_section">
        <h2 className="courses_heading">COURSES</h2>
        <div className="instructor_courses">
          {courses.map((course) => (
            <InstructorCourseCard 
              key={course.id} 
              course={{
                id: course.id,
                name: course.courseCode, // Adjust to your data field
                instructorName: course.instructorName,
                instructorEmail: course.instructorEmail,
                instructorPhone: course.instructorPhone,
                dayOfSession: course.day,
                timeOfSession: course.time,
                numberOfStudents: course.numberOfStudents
                
              }} 
            />
          ))}
        </div>
        <article className="wrapper-2">
          <h3>List of students with their sessions</h3>
          <InstructorTimetable />
        </article>
      </section>
      <section className="announcements">
        <div>
          <h2>ANNOUNCEMENTS</h2>
          <p>All specific announcements for this course go here!!</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InstructorCourses;
