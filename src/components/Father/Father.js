import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";
import "./Father.css";
const Father = ({ house, ornament }) => {
  return (
    <div className="text-center">
      <h2>Father</h2>
      <p className="text-lg">House: {house}</p>
      <div className="father flex gap-5">
        <MySelf house={house} ornament={ornament} />
        <Sister house={house} />
        <Brother house={house} />
      </div>
    </div>
  );
};

export default Father;
