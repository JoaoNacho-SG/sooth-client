import { Routes, Route } from "react-router-dom";
import { Login } from "./components/views/Login";
import { Signup } from "./components/views/Signup";
import { Home } from "./components/views/Home";
import { Product } from "./components/views/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
