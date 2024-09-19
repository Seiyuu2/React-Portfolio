import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css';

export const Modal = ({ children, onClose }) => {
  return (
    <div className="inmodal-container">
      <div className="inmodal">
        <div className="inmodal-header">
          <p className="inclose" onClick={onClose}>&times;</p>
        </div>
        <div className="inmodal-content">
          {children}
        </div>
        <div className="inmodal-footer">
          <button className="inbtn inbtn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
