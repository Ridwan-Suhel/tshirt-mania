import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ornament }) => {
  const ring = useContext(RingContext);
  return (
    <section>
      <h2>Special</h2>
      <p className="text-sm">Gift: {ring}</p>
    </section>
  );
};

export default Special;
