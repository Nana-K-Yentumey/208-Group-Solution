import Footer from "../../components/Footer/Footer";
import "./InstructorDashboard.css";
import NavbarInstructor from "../../components/Navbar2/NavbarInstructor";
import Announcement from "../../components/Timetable/Announcement";
import React, { useState, useEffect } from "react";

const InstructorDashboard = () => {
  const [instructorName, setInstructorName] = useState("Ampofo");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchInstructorData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        // Fetch courses for the instructor
        const coursesResponse = await fetch("http://localhost:4000/instructors/courses", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!coursesResponse.ok) {
          console.error("Courses response error:", coursesResponse.statusText);
          return;
        }

        const coursesData = await coursesResponse.json();
        setCourses(coursesData.courses);
      } catch (err) {
        console.error("Error fetching instructor data:", err);
      }
    };

    fetchInstructorData();
  }, []);
  

    return (
      <main className="dashboard_main">
        <NavbarInstructor />
        <section className="dashboard_section">
          <h1>WELCOME BACK, {instructorName}!</h1>
          <div className="dashboard_course_text">
            <h3>Courses</h3>
            
          </div>
          <article className="course_preview">
            {courses.map((course, index) => (
              <div key={index}>
                <h3>{course.courseCode}</h3>
                <p>Number of Students</p>
                <h4>{course.numberOfStudents}</h4>
                <p>Day</p>
                <h4>{course.day}</h4>
              </div>
            ))}
          </article>
          
          <section className="wrapper-2">
            <h3>Instructor feedback & Announcements </h3>
            <Announcement />
          </section>
        </section>
        <Footer />
      </main>
    );
  };
  
  export default InstructorDashboard;