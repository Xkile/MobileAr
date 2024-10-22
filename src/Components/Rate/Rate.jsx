import './Rate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function Rate() {
  const [rating, setRating] = useState(0); // state to track the rating

  const handleStarClick = (index) => {
    setRating(index); // set the rating based on the star clicked
  };

  return (
    <div> 
      <div className="col-md-4">
        <div className="card p-3 mb-3" id="Rate">
          {/* Star Rating */}
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <span
                  key={index}
                  className={index <= rating ? "fas fa-star" : "far fa-star"} // filled star if index <= rating, otherwise outline
                  onClick={() => handleStarClick(index)} // handle click for stars
                  style={{ cursor: 'pointer', color: '#FFD700', fontSize: '1.5rem' }} // custom styles
                ></span>
              );
            })}
          </div>

          <h3>
            <b>Rate our app</b> 
          </h3>
          <p className="text-secondary">
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.
          </p>
          <button type="button" className="love-button btn btn-lg m-2 btn-center">
            I love it!
          </button>
          <h4 className="m-2" id="letusknow">
            <a href="#">Don't like the app? Let us know.</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Rate;
