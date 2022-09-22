import React, { useContext, useState } from "react";
import style from "./navbar.module.scss";
import { FiSearch } from "react-icons/fi";
import { Layout } from "../layout/Layout";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/user.context";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase-config";
import { Search } from "../general/Search";
import { MdOutlineCancel } from "react-icons/md";

export const Navbar = () => {
  const { isLoggedIn, logoutUser } = useContext(UserContext);
  const [searchClick, setSearchClick] = useState(false);
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
                <div className={style.searchbar__wrapper}>
                  <Search visible={searchClick ? true : false} />

                  <li>
                    {searchClick ? (
                      <MdOutlineCancel
                        onClick={() => setSearchClick(!searchClick)}
                      />
                    ) : (
                      <FiSearch onClick={() => setSearchClick(!searchClick)} />
                    )}
                  </li>
                </div>

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
