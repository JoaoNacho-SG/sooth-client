import { Routes, Route } from "react-router-dom";
import { Login } from "./components/views/Login";
import { Signup } from "./components/views/Signup";
import { Home } from "./components/views/Home";
import { Product } from "./components/views/Product";
import { IsPrivate } from "./utils/isPrivate";
import { IsLogged } from "./utils/isLogged";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  return (
    <>
      <Navbar />
      <ShoppingCart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <IsLogged>
              <Login />
            </IsLogged>
          }
        />
        <Route
          path="/signup"
          element={
            <IsLogged>
              <Signup />
            </IsLogged>
          }
        />
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
