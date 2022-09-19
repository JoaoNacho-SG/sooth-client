import React, { useContext } from "react";
import style from "./navbar.module.scss";
import { FiSearch } from "react-icons/fi";
import { Layout } from "../layout/Layout";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase-config";

export const Navbar = () => {
  const { isLoggedIn, logoutUser } = useContext(UserContext);
  //Signout util from Firebase
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <Layout>
        <header>
          <nav className={style.navbar__container}>
            <ul className={style.navbar}>
              <div className={style.navbar__content}>
                <li>About</li>
                <li>Consultation</li>
              </div>
              <div>
                <Link className={"link"} to={"/"}>
                  <li className={style.navbar__logo}>sooth</li>
                </Link>
              </div>
              <div className={style.navbar__content}>
                <li>
                  <FiSearch />
                </li>
                <li>Cart</li>
                {!isLoggedIn ? (
                  <Link className={"link"} to={"/login"}>
                    <li>Login</li>
                  </Link>
                ) : (
                  <li onClick={(logout, logoutUser)}>Logout</li>
                )}
              </div>
            </ul>

            <div>
              <ul className={style.navbar__second_row}>
                <li>Acne</li>
                <li>Sun</li>
                <li>Ezcema</li>
                <li>Psoriasis</li>
                <li>Vitiligio</li>
              </ul>
            </div>
          </nav>
        </header>
      </Layout>
    </>
  );
};
