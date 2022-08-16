import React from "react";

const Order = ({ sandwich }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {sandwich.base} Sandwich with:</p>
      {sandwich.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
