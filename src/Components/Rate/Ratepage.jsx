import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rate from './Rate';
import './Ratepage.css';


function Ratepage() {
  return (
    <div className="container-fluid text-center card p-3 free-trial-container">
      <div className="logo-container">
     
      </div>
      <div className="d-flex justify-content-center align-items-center mb-5 " id="freesubcard">
        <Rate />
      </div>
    </div>
  );
}

export default Ratepage;