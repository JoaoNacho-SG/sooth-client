import React from "react";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <li>About</li>
          <li>Consultation</li>
        </div>
        <div>
          <li>sooth</li>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <li>
            <FiSearch />
          </li>
          <li>Cart</li>
          <li>Login</li>
        </div>
      </ul>
    </nav>
  );
};
