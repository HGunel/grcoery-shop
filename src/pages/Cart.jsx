import React from "react";
import ShopCart from "../components/ShopCart";
import CardDetails from "../components/CardDetails";
import Delivering from "../components/Delivering";
import Cards from "../components/Cards";

const Cart = () => {
  return (
    <>
      <ShopCart />
      <CardDetails />
      <Delivering/>
      
    </>
  );
};

export default Cart;
