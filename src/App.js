import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/views/HeroSection";
import { Explore } from "./components/views/Explore";
import { Popular } from "./components/views/Popular";
import { CleanProducts } from "./components/views/CleanProducts";
import { TopRated } from "./components/views/TopRated";
import { NaturalIngredients } from "./components/views/NaturalIngredients";
import { BestIngredients } from "./components/views/BestIngredients";
import { LearnMore } from "./components/general/LearnMore";
import { JoinSooth } from "./components/views/JoinSooth";
import { Footer } from "./components/Footer";

function App() {
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
      {/* Make routes here */}
      <Routes>
        <Route />
      </Routes>
    </>
  );
}

export default App;
