import React, { useContext, useEffect, useState } from "react";
import style from "./shoppingcart.module.scss";
import { CartContext } from "../../utils/cart.context";
import { getFiftyProducts, getProduct } from "../../utils/api";
import { CardProduct } from "../general/CardProduct";
import { MdOutlineCancel } from "react-icons/md";

export const ShoppingCart = () => {
  const [productsInCart, setProductsInCart] = useState([]);
  const { cart, setShowCart, showCart } = useContext(CartContext);

  useEffect(() => {
    (async () => {
      cart.forEach(async (product) => {
        const results = await getProduct(product.id);
        setProductsInCart([
          ...productsInCart,
          {
            amount: product.amount,
            image: results.data.image,
            price: results.data.price,
            title: results.data.title,
          },
        ]);
      });
    })();
  }, []);

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
            {productsInCart.map((product, index) => {
              return (
                <CardProduct
                  key={index}
                  product={product}
                  amountFromCart={product.amount}
                  imageFromApi={product.image ? product.image : "nada"}
                  titleFromApi={product.title}
                  priceFromApi={product.price}
                />
              );
            })}
          </div>
        </aside>
      )}
    </>
  );
};
