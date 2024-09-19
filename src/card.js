// card.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';

export function TestComponent({ title, img, onClick, modcontent, modcontent2,cardsynopsis }) {
  return (
    <div className="card-group">
      <div className="card">
        <img className="card-img-top" src={img} alt="Card img cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{cardsynopsis}</p>
          <div className="d-grid gap-2">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => onClick(
                <div className="modal-content-wrapper">
                  <h5 className="modal-title">{title}</h5>
                  <p className="modal-content">{modcontent}</p>
                  <p className="modal-content">{modcontent2}</p>
                </div>
              )}
            >
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
