import React from "react";
import { useContext } from "react";
import { UserContext } from "./user.context";
import { Navigate } from "react-router-dom";
import { Spinner } from "../components/general/Spinner";

export const IsPrivate = ({ children }) => {
  const { isLoggedIn, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
