import React from "react";
import "../Styles/Features.css";
import bed from "../media/bed.png";
import chair from '../media/chair.png'
function Features() {
  return (
    <div className="features">
      <div className="card">
        <img src={bed} />
      </div>
      <div className="card">
        <img src={chair} />
      </div>
      <div className="card">
        <img src={bed} />
      </div>
      <div className="card">
        <img src={bed} />
      </div>
      <div className="card">
        <img src={bed} />
      </div>
    </div>
  );
}

export default Features;
