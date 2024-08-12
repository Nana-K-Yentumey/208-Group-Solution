/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./SessionCard.css";

const SessionCard = ({ session }) => {
  return (
    <div className="card">
      <img className="profile-img" src={session.image} alt="" />
      <div>
        <h4>{session.instrument}</h4>
        <p className="email">{session.email}</p>
      </div>
    </div>
  );
};

export default SessionCard;
