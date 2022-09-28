import React from "react";
import style from "./cardingredients.module.scss";

export const CardIngredients = ({ img, title, description }) => {
  return (
    <article className={style.card__container}>
      <div
        className={style.card__image}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={style.card__text_wrapper}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
};
