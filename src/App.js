import { Routes, Route } from "react-router-dom";
import { Login } from "./components/views/Login";
import { Signup } from "./components/views/Signup";
import { Home } from "./components/views/Home";
import { Product } from "./components/views/Product";
import { IsPrivate } from "./utils/isPrivate";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/product/:id"
          element={
            <IsPrivate>
              <Product />
            </IsPrivate>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
