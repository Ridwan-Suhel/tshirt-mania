import React from "react";

const Cart = ({ handleRemoveFromCart, cart }) => {
  let command;
  if (cart.length === 0) {
    command = <p className="text-red-400">Please add atleast one items</p>;
  } else if (cart.length === 1) {
    command = <p className="text-green-300">Please add More</p>;
  } else {
    command = <h4 className="text-green-800 text-2xl">Thanks for adding</h4>;
  }

  let text;
  if (cart.length === 0) {
    text = "";
  } else if (cart.length > 3) {
    text = (
      <button className="bg-black text-white py-2 px-6">remove all</button>
    );
  } else {
    text = <p className="">keep adding</p>;
  }

  return (
    <div className="relative">
      <h3 className="text-2xl">Selected Item - {cart.length}</h3>
      <p className="mt-5">{command}</p>
      {cart.map((tShirt) => (
        <div key={tShirt._id}>
          <p className="my-3">
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
      {/* {cart.length <= 3 ? (
        <p>Keep Adding</p>
      ) : (
        <button className="hover:bg-red-400 bg-black text-white py-1 px-6 text-center rounded border">
          Remove All
        </button>
      )} */}
      {text}
      {cart.length === 3 && (
        <p className="py-2 px-3 bg-black text-white mt-3">
          Wow You selected 3 Items
        </p>
      )}
      {cart.length === 0 || (
        <div className="w-3 h-3 bg-green-500 rounded-full absolute top-3 right-2"></div>
      )}
    </div>
  );
};

export default Cart;
