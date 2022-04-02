import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Aunty = ({ house }) => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Aunty</h2>
      <p className="text-lg">House: {ring}</p>
    </div>
  );
};

export default Aunty;
