import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase-config";
import { signOut } from "firebase/auth";

const UserContext = createContext();

function UserProviderWrapper({ children }) {
  const [userInSession, setUserInSession] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const storeUser = (user) => {
    localStorage.setItem("authUser", user);
  };

  const removeUser = () => {
    localStorage.removeItem("authUser");
  };
  //Signout util from Firebase
  const logout = async () => {
    await signOut(auth);
  };

  const authenticateUser = () => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUserInSession(storedUser);
      setIsLoggedIn(true);
    } else {
      setUserInSession(null);
      setIsLoggedIn(false);
    }
  };

  const logoutUser = () => {
    removeUser();
    logout();
    authenticateUser();
    navigate("/");
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInSession,
        setUserInSession,
        isLoggedIn,
        storeUser,
        authenticateUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProviderWrapper, UserContext };
