import React, { useContext, useState } from "react";
import style from "./navbar.module.scss";
import { FiSearch } from "react-icons/fi";
import { Layout } from "../layout/Layout";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/user.context";
import { Search } from "../general/Search";
import { MdOutlineCancel } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartContext } from "../../utils/cart.context";

export const Navbar = () => {
  const { isLoggedIn, logoutUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [searchClick, setSearchClick] = useState(false);

  return (
    <>
      <Layout>
        <header>
          <nav className={style.navbar__container}>
            <ul className={style.navbar__first_row}>
              <GiHamburgerMenu className={style.burger} />
              <div className={style.navbar__content_left}>
                <li>About</li>
                <li>Consultation</li>
              </div>
              <div className={style.navbar__logo}>
                <Link className={"link"} to={"/"}>
                  <li>sooth</li>
                </Link>
              </div>
              <div className={style.navbar__content_right}>
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

                <div className={style.cart}>
                  {cart?.length > 0 && (
                    <div className={style.cart__amount}>
                      <p>
                        {cart.reduce(
                          (amount, product) => product.amount + amount,
                          0
                        )}
                      </p>
                    </div>
                  )}
                  <li>Cart</li>
                </div>

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
