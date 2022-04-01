import React, { useState } from "react";
import useTshirts from "../../hooks/useTshirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";
const Home = () => {
  const [tShirts, setTshirts] = useTshirts();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (selectedItem) => {
    const exists = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Item already Added");
    }
  };
  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id);
    setCart(rest);
  };
  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="row grid grid-cols-4 gap-5">
          <div className="tshirt-area col-span-3">
            <div className="tshirt-wrapper grid grid-cols-3 gap-5">
              {tShirts.map((tShirt) => (
                <TShirt
                  key={tShirt._id}
                  tShirt={tShirt}
                  handleAddToCart={handleAddToCart}
                ></TShirt>
              ))}
            </div>
          </div>
          <div className="cart-area">
            <Cart
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
