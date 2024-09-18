import React from 'react'; // Correct import
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';

export function TestComponent({ title, img }) {
  return (
    <div className="card-group">
      <div className="card">
        <img className="card-img-top" src={img} alt="Card img cap" /> {/* Use the img prop */}
        <div className="card-body">
          <h5 className="card-title">{title}</h5> {/* Use the title prop */}
          <p className="card-text">Eternity is rarely a blessing <br /> "Til Death do us part? I'm afraid it shall, my dear."</p>
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-sm btn-outline-secondary" id="modal1">More Details</button>
          </div>
        </div>
      </div>
      {/* Add more cards here if needed */}
    </div>
  );
}

export default TestComponent;
