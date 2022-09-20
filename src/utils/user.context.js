import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
