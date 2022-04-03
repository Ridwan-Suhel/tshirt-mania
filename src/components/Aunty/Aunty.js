import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [ornament, house] = useContext(RingContext);
  return (
    <div>
      <h2>Aunty</h2>
      <p className="text-lg">House: {ornament}</p>
    </div>
  );
};

export default Aunty;
