import React from "react";
import { Footer } from "../../Footer";
import { JoinSooth } from "../../general/JoinSooth";
import { Navbar } from "../../Navbar";
import { LoginForm } from "../../Pages/Login/LoginForm";

export const Login = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
      <JoinSooth />
      <Footer />
    </>
  );
};
