// import { Button } from "./components/general/Button";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/views/HeroSection";
import { Explore } from "./components/views/Explore";
import { Popular } from "./components/views/Popular";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <HeroSection />
      </Layout>

      <Explore />

      <Layout>
        <Popular />
      </Layout>

      {/* Make routes here */}
      <Routes>
        <Route />
      </Routes>
    </>
  );
}

export default App;
