import React from "react";
import { Link } from "react-router-dom";
import style from "./cardproduct.module.scss";

export const CardProduct = ({ product }) => {
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
        <h4 className={style.card__title}>{product?.title}</h4>
      </div>
    </article>
  );
};
