import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./cardproduct.module.scss";

export const CardProduct = ({
  product,
  imageFromApi,
  titleFromApi,
  priceFromApi,
  amountFromCart,
}) => {
  //   if (inShoppingCart) {
  //     useEffect(() => {
  //       (async () => {})();
  //     }, []);
  //   }

  //   console.log(imageFromApi, "IAMGEEEGSFad");

  return (
    <article className={style.card__container}>
      <div className={style.card__image_container}>
        <Link to={`/product/${product?.id}`}>
          {imageFromApi ? (
            <div
              className={style.card__image_wrapper}
              style={{ backgroundImage: `url(${imageFromApi})` }}
            ></div>
          ) : (
            <div
              className={style.card__image_wrapper}
              style={{ backgroundImage: `url(${product?.image})` }}
            ></div>
          )}
        </Link>
      </div>
      <div>
        {titleFromApi ? (
          <h4
            className={style.card__title}
          >{`x${amountFromCart} ${titleFromApi}`}</h4>
        ) : (
          <h4 className={style.card__title}>{product?.title}</h4>
        )}
        {priceFromApi && <p>{priceFromApi}</p>}
      </div>
    </article>
  );
};
