import React, { useContext } from "react";
import style from "./navbar.module.scss";
import { FiSearch } from "react-icons/fi";
import { Layout } from "../layout/Layout";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/user.context";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const { isLoggedIn, logoutUser } = useContext(UserContext);

  return (
    <>
      <Layout>
        <header>
          <nav className={style.navbar__container}>
            <GiHamburgerMenu className={style.burger} />
            <ul className={style.navbar}>
              <div className={style.navbar__content_left}>
                <li>About</li>
                <li>Consultation</li>
              </div>
              <div>
                <Link className={"link"} to={"/"}>
                  <li className={style.navbar__logo}>sooth</li>
                </Link>
              </div>
              <div className={style.navbar__content_right}>
                <li>
                  <FiSearch />
                </li>
                <li>Cart</li>
                {!isLoggedIn ? (
                  <Link className={"link"} to={"/login"}>
                    <li>Login</li>
                  </Link>
                ) : (
                  <li onClick={logoutUser}>Logout</li>
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
