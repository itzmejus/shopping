import React from "react";
import "../Styles/Features.css";
import bed from "../media/bed.png";
import chair from '../media/chair.png'
import bath from '../media/bath.png'
import dining from '../media/dining.png'

function Features() {
  return (
    <div className="features">
      <div className="card">
        <img src={bed} />
        <h1>Bedroom</h1>  
      </div>
      <div className="card">
        <img src={chair} />
        <h1>Office chair</h1>

      </div>
      <div className="card">
        <img src={bath} />
        <h1>Dining</h1>

      </div>
      <div className="card">
        <img src={chair} />
        <h1>Living</h1>

      </div>
      <div className="card">
        <img src={bed} />
        <h1>Living</h1>

      </div>
    </div>
  );
}

export default Features;
