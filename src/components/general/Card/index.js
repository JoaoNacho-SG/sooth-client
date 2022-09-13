import React from "react";
import { Button } from "../Button";
import style from "./card.module.scss";
// import { calcPercentage } from "../../../utils/percentage";

export const Card = ({
  img,
  title,
  description,
  price,
  newprice,
  discount,
  btnContent,
  btnClass,
  icon,
}) => {
  return (
    <figure className={style.card__container}>
      <img src={img} alt={title} />
      <figcaption>
        <h4>{title}</h4>
        <p>{description}</p>

        <div className={style.card__price}>
          {!discount ? (
            <p>${price}</p>
          ) : (
            <>
              <p className={style.card__price_discount}>${newprice}</p>
              <p className={style.card__price_nodiscount}>${price}</p>
            </>
          )}
        </div>
      </figcaption>
      <Button btnContent={btnContent} btnClass={btnClass} icon={icon} />
    </figure>
  );
};
