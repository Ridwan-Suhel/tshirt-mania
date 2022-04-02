import React from "react";
import Special from "../Special/Special";
import "./MySelf.css";
const MySelf = ({ house, ornament }) => {
  return (
    <div>
      <h2>My Self</h2>
      <p className="text-lg">House: {house}</p>

      <div className="mySelf">
        <Special ornament={ornament}></Special>
      </div>
    </div>
  );
};

export default MySelf;
