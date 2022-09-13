import { Routes, Route } from "react-router-dom";
import { Login } from "./components/views/Login";
import { Home } from "./components/views/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
