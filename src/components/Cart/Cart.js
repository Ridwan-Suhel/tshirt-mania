import React from "react";

const Cart = ({ handleRemoveFromCart, cart }) => {
  return (
    <div>
      <h3 className="text-2xl">Selected Item - {cart.length}</h3>
      {cart.map((tShirt) => (
        <div key={tShirt._id}>
          <p>
            Tshirt Name: {tShirt.name}{" "}
            <button
              onClick={() => handleRemoveFromCart(tShirt)}
              className="ml-3 hover:bg-red-400 bg-black text-white w-8 h-8 text-center rounded border"
            >
              X
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
