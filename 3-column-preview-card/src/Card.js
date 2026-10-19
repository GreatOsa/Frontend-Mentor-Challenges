import React from "react";
import "./App.css";

export default function Card({ name, info, icon, pryColor }) {
  return (
    <div>
      {" "}
      <div className="card" style={{ "--hover-color": pryColor }}>
        <img src={icon} alt="sedanicon" />
        <h1>{name} </h1>
        <p>{info} </p>
        <button>learn more</button>
      </div>
    </div>
  );
}
