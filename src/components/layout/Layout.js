import React from "react";
import { Navbar } from "../Navbar";
import "./layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>{children}</div>
      <footer></footer>
    </>
  );
};
