import React from "react";
import { Navbar } from "../../Navbar";
import { HeroSection } from "../../Pages/Home/HeroSection";
import { Explore } from "../../Pages/Home//Explore";
import { Popular } from "../../Pages/Home//Popular";
import { CleanProducts } from "../../Pages/Home//CleanProducts";
import { TopRated } from "../../Pages/Home//TopRated";
import { NaturalIngredients } from "../../Pages/Home//NaturalIngredients";
import { BestIngredients } from "../../Pages/Home//BestIngredients";
import { LearnMore } from "../../general/LearnMore";
import { JoinSooth } from "../../general/JoinSooth";
import { Footer } from "../../Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Explore />
      <Popular />
      <CleanProducts />
      <TopRated />
      <NaturalIngredients />
      <BestIngredients />
      <LearnMore />
      <JoinSooth />
      <Footer />
    </>
  );
};
