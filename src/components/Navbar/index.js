import React from "react";
import style from "./navbar.module.scss";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <header>
      <nav className={style.navbar__container}>
        <ul className={style.navbar}>
          <div className={style.navbar__content}>
            <li>About</li>
            <li>Consultation</li>
          </div>
          <div>
            <li className={style.navbar__logo}>sooth</li>
          </div>
          <div className={style.navbar__content}>
            <li>
              <FiSearch />
            </li>
            <li>Cart</li>
            <li>Login</li>
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
  );
};
