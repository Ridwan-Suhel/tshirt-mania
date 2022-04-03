import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("Diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Diamond Ring";

  const handleBuyHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
    <RingContext.Provider value={[ornament, house, setHouse]}>
      <div className="text-center">
        <h3 className="text-3xl text-center pt-5">Grandpa</h3>
        <button
          onClick={handleBuyHouse}
          className="my-3 py-2 px-6 text-white bg-black rounded-md"
        >
          Buy a house
        </button>
        <p className="text-lg text-center pb-5">House: {house}</p>
        <div className="grandPa py-5 flex w-8/12 mx-auto justify-center gap-10 text-2xl border border-amber-600">
          <Father house={house} ornament={ornament} />
          <Uncle house={house} />
          <Aunty house={house} />
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
