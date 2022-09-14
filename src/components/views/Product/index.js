import React from "react";
import { Footer } from "../../Footer";
import { JoinSooth } from "../../general/JoinSooth";
import { Navbar } from "../../Navbar";
import { ProductPage } from "../../Pages/ProductPage";

export const Product = () => {
  return (
    <>
      <Navbar />
      <ProductPage />
      <JoinSooth />
      <Footer />
    </>
  );
};
