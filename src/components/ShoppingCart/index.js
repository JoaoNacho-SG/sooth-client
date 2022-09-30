import React, { useContext, useEffect, useState } from "react";
import style from "./shoppingcart.module.scss";
import { CartContext } from "../../utils/cart.context";
import { getFiftyProducts } from "../../utils/api";
import { CardProduct } from "../general/CardProduct";
import { MdOutlineCancel } from "react-icons/md";

export const ShoppingCart = () => {
  const [productsInCart, setProductsInCart] = useState([]);
  const { cart, setShowCart, showCart } = useContext(CartContext);

  useEffect(() => {
    (async () => {
      const allProducts = await getFiftyProducts();

      const filtered = allProducts.data.filter((product) =>
        cart.some((elem) => elem.id === product.id)
      );

      cart.sort((a, b) => b.id - a.id);
      filtered.sort((a, b) => b.id - a.id);

      setProductsInCart(filtered);
      console.log(filtered, "FILTERED");
      console.log(cart, "CART");
    })();
  }, [cart]);

  // useEffect(() => {
  // (async () => {
  // myArray.filter((el) =>
  //   myFilter.some(
  //     (f) => f.userid === el.userid && f.projectid === el.projectid
  //   )
  // );
  //   cart.forEach(async (product) => {
  //     const results = await getProduct(product.id);
  //     setProductsInCart([
  //       ...productsInCart,
  //       {
  //         amount: product.amount,
  //         image: results.data.image,
  //         price: results.data.price,
  //         title: results.data.title,
  //       },
  //     ]);
  //   });
  // })();
  // }}, []);

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
          <div>
            {productsInCart.map((product) => {
              return (
                <CardProduct
                  key={product.id}
                  product={product}
                  amountFromCart={product.amount}
                />
              );
            })}
          </div>
        </aside>
      )}
    </>
  );
};
