import React from "react";

const TShirt = (props) => {
  const { handleAddToCart, tShirt } = props;
  const { name, picture, price } = tShirt;
  return (
    <div className="single-tshirt border rounded-md p-8">
      <img className="w-100 h-80 object-cover" src={picture} alt="img" />
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <button
        className="py-2 mt-3 rounded-md text-white px-8 bg-zinc-700"
        onClick={() => handleAddToCart(tShirt)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default TShirt;
