/* eslint-disable react/prop-types */
// import React from "react";
import "../../pages/StudentCourses/StudentCourses.css";
const getImageURL = (name) => {
  if (name.startsWith("Drum")) {
    return "Gramophone-backend/assets/pexels-juresiric-730656.jpg"; // Path to drum image
  }else if (name.startsWith("Violin")) {
    return "Gramophone-backend/assets/providence-doucet-wPaBwop_rSo-unsplash.jpg"; // Path to drum image
  }else {
    return "Gramophone-backend/assets/lizzy-heeren-GFMpmzQ4PAc-unsplash.jpg"; // Path to drum image
  }
  // Add more conditions for other course types if needed
  // For example:
  // if (courseCode.startsWith("Piano")) {
  //   return "/assets/images/piano.png";
  // }
  // Gramophone-backend\assets\providence-doucet-wPaBwop_rSo-unsplash.jpg
  // Default image if no match is found
  // return "/assets/images/default.png";
};

const InstructorCourseCard = ({ course }) => {
  return (
    <article className="course-1">
      <div className="course-info">
        <h2>{course.name}</h2>
        
        <div>
          <p>Number of Students</p>
          <h3>{course.numberOfStudents}</h3>
        </div>
        <div>
          <p>Day</p>
          <h3>{course.dayOfSession}</h3>
        </div>
        
      </div>
      <img src={getImageURL(course.name)} alt={course.name} className="course-image" />
    </article>
  );
};

export default InstructorCourseCard;
