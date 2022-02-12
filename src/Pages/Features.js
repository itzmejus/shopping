import React from "react";
import "../Styles/Features.css";
import bed from "../media/bed.png";
function Features() {
  return (
    <div className="features">
      <div className="card">
        <img src={bed} />
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
      <div className="card">
        <img src={bed} />
      </div>
    </div>
  );
}

export default Features;
