import React, { useState } from 'react';
import './Modal.css';
import LoginPage from './LoginPage';

const Modal = ({ show, handleClose }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <LoginPage />
      </div>
    </div>
  );
};

export default Modal;
