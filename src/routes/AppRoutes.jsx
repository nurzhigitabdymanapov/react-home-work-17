import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import { MyCart } from "../pages/MyCart";
import { MyOrders } from "../pages/MyOrders";
import { More } from "../pages/More";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/products" element={<Products />} />
        <Route path="/mycards" element={<MyCart />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="products/:id" element={<More />} />
      </Routes>
    </div>
  );
};
