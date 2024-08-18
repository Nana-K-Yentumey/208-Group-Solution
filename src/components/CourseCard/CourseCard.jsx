/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'
import "../../pages/StudentCourses/StudentCourses.css";

const CourseCard = ({ course }) => {


  return (
    <section className="course">
      <article className="course-1">
        <div className="course-info">
          <h2>{course.name}</h2>
          <div>
            <p>Instructor</p>
            <h3>{course.instructorName}</h3>
          </div>
          <div>
            <p>Day</p>
            <h3>{course.dayOfSession}</h3>
          </div>
          <div>
            <p>Time</p>
            <h3>{course.timeOfSession}</h3>
          </div>
        </div>
        <img src={course.imageURL} alt="" />
      </article>
      <article className="course-1">
        <div className="contact_tutor">
          <h3>Contact your tutor</h3>
          <p>Name: {course.instructorName}</p>
          <p>Email: {course.instructorEmail}</p>
          <p>Phone:{course.instructorPhone}</p>
        </div>
        <div className="announcements">
          <h3>Announcements</h3>
          <p>All specific announcements for this course goes here!</p>
        </div>
      </article>
    </section>
  );
};

export default CourseCard;
