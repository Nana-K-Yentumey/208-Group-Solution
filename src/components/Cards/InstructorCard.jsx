/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./SessionCard.css";

const InstructorCard = ({ instructor }) => {
  return (
    <div className="card">
      <img className="profile-img" src={instructor.image} alt="" />
      <div>
        <h4>{instructor.name}</h4>
        <p className="email">{instructor.email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
