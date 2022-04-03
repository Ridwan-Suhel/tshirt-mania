import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [ornament, house] = useContext(RingContext);
  return (
    <section>
      <h2>Special</h2>
      <p className="text-sm">
        Gift: {ornament} - House: {house}
      </p>
    </section>
  );
};

export default Special;
