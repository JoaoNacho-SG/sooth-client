import { useContext } from "react";
import { UserContext } from "./user.context";
import { Navigate } from "react-router-dom";

import React from "react";

export const IsPrivate = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
