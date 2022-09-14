import { Routes, Route } from "react-router-dom";
import { Login } from "./components/views/Login";
import { Signup } from "./components/views/Signup";
import { Home } from "./components/views/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
