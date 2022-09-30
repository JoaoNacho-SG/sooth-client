import React, { useContext, useEffect, useState } from "react";
import style from "./shoppingcart.module.scss";
import { CartContext } from "../../utils/cart.context";
// import { getFiftyProducts } from "../../utils/api";
import { CardProduct } from "../general/CardProduct";
import { MdOutlineCancel } from "react-icons/md";

export const ShoppingCart = () => {
  const [productsInCart, setProductsInCart] = useState([]);
  const { cart, setShowCart, showCart } = useContext(CartContext);

  useEffect(() => {
    (async () => {
      setProductsInCart(cart);
      // const allProducts = await getFiftyProducts();
      // const filtered = allProducts.data.filter((product) =>
      //   cart.some((elem) => elem.id === product.id)
      // );
      // cart.sort((a, b) => b.id - a.id);
      // filtered.sort((a, b) => b.id - a.id);
      // let newArr = [];
      // let newObj = {};
      // filtered.forEach((element) => {
      //   cart.forEach((product) => {
      //     newObj = { ...element, amount: product.amount };
      //     newArr.push(newObj);
      //   });
      // });
      // const newNewArr = [...new Set(newArr)];
      // console.log(newNewArr);
    })();
  }, [cart]);

  return (
    <>
      {showCart && (
        <aside className={style.cart__container}>
          <div className={style.cart__header}>
            <div className={style.cart__title_wrapper}>
              <h1>Your Cart</h1>
              {!productsInCart.length && <p>No items selected yet</p>}
            </div>
            <div className={style.icon}>
              <MdOutlineCancel onClick={() => setShowCart(false)} />
            </div>
          </div>
          <div className={style.products__container}>
            <ul>
              {productsInCart.map((product) => {
                return (
                  <li key={product.id} className={style.products__wrapper}>
                    <CardProduct product={product} showPrice={true} />
                  </li>
                );
              })}
            </ul>
          </div>

          {productsInCart.length >= 1 && (
            <>
              <hr className={style.divider} />
              <div className={style.totalprice__wrapper}>
                <p>Total</p>
                <p>
                  $
                  {cart
                    .reduce((total, product) => {
                      const item = cart.find((i) => i.id === product.id);
                      return total + item?.price * product.amount;
                    }, 0)
                    .toFixed(2)}
                </p>
              </div>
            </>
          )}
        </aside>
      )}
    </>
  );
};
