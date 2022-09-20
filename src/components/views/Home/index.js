import React, { useEffect, useState } from "react";
import { Navbar } from "../../Navbar";
import { HeroSection } from "../../Pages/Home/HeroSection";
import { Explore } from "../../Pages/Home//Explore";
import { Popular } from "../../Pages/Home//Popular";
import { CleanProducts } from "../../Pages/Home/CleanProducts";
import { TopRated } from "../../Pages/Home/TopRated";
import { NaturalIngredients } from "../../Pages/Home/NaturalIngredients";
import { BestIngredients } from "../../Pages/Home/BestIngredients";
import { LearnMore } from "../../general/LearnMore";
import { JoinSooth } from "../../general/JoinSooth";
import { Footer } from "../../Footer";
import { getFiftyProducts } from "../../../utils/api";

export const Home = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async () => {
      const productsFromApi = await getFiftyProducts();
      setProductsList(productsFromApi.data);
    })();
  }, []);

  //One product to display in hero section
  const productForHeroSection = productsList[0];
  //4 products to display in popular
  const mostPopular = productsList
    .sort((a, b) => b.rating.count - a.rating.count)
    .slice(0, 4);
  //8 products to display in top rated
  const topRated = productsList
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 8);

  return (
    <>
      <Navbar />
      <HeroSection product={productForHeroSection} />
      <Explore />
      <Popular popularProducts={mostPopular} />
      <CleanProducts />
      <TopRated topRatedProducts={topRated} />
      <NaturalIngredients />
      <BestIngredients />
      <LearnMore />
      <JoinSooth />
      <Footer />
    </>
  );
};
