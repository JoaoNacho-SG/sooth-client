import React from "react";
import { Footer } from "../../Footer";
import { JoinSooth } from "../../general/JoinSooth";
import { Navbar } from "../../Navbar";
import { SignupForm } from "../../Pages/SignupForm";

export const Signup = () => {
  return (
    <>
      <Navbar />
      <SignupForm />
      <JoinSooth />
      <Footer />
    </>
  );
};
