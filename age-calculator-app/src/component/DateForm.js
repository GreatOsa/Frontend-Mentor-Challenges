import React from "react";
import CircleSvg from "./icon-arrow.svg";

export default function DateForm() {
  return (
    <div className="dateForm">
      <div className=" flex">
        <label>
          <p>Day</p>
          <input name="Day" placeholder="DD" />
        </label>
        <label>
          <p>month</p>
          <input name="month" placeholder="MM" />
        </label>
        <label>
          <p>year</p>
          <input name="year" placeholder="YYYY" />
        </label>
      </div>
      <div className="buttonContainer">
        {/* This div contains a straight line and an SVG image */}
        <div className="line">{/* a straight line */}</div>
        <img src={CircleSvg} alt="my svg" />
      </div>

      <div>
        <h1>38 years</h1>
        <h1>38 years</h1>
        <h1>38 years</h1>
      </div>
    </div>
  );
}
