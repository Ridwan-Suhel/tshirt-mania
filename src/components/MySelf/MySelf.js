import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";
import Special from "../Special/Special";
import "./MySelf.css";
const MySelf = () => {
  const [ornament, house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h2>My Self</h2>
      <p className="text-lg">Housee: {house}</p>
      <button
        className="py-2 px-4 text-sm bg-black text-white"
        onClick={() => setHouse(house + 1)}
      >
        Buy House
      </button>

      <div className="mySelf">
        <Special></Special>
      </div>
    </div>
  );
};

export default MySelf;
