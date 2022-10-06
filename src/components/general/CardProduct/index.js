import React from "react";
import { Link } from "react-router-dom";
import style from "./cardproduct.module.scss";

export const CardProduct = ({ product, showPrice }) => {
  return (
    <article className={style.card__container}>
      <div className={style.card__image_container}>
        <Link to={`/product/${product?.id}`}>
          <div
            className={style.card__image_wrapper}
            style={{ backgroundImage: `url(${product?.image})` }}
          ></div>
        </Link>
      </div>
      <div>
        <h4 className={style.card__title}>
          {product?.amount && `x${product.amount}`} {product?.title}
        </h4>
        {showPrice && <p className={style.card__price}>${product?.price}</p>}
      </div>
    </article>
  );
};
