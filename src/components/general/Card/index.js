import React from "react";
import { Link } from "react-router-dom";
import { addOneToCart } from "../../../utils/cart";
import { Button } from "../Button";
import { Tag } from "../Tag";
import style from "./card.module.scss";

export const Card = ({
  id,
  img,
  title,
  description,
  price,
  newprice,
  discount,
  btnContent,
  btnClass,
  icon,
  tagCategory,
}) => {
  return (
    <figure className={style.card__container}>
      {tagCategory === "jewelery" && (
        <Tag tagDiscount={false} tagContent={"New!"} />
      )}

      {tagCategory === "women" && (
        <Tag tagDiscount={true} tagContent={"15% off"} />
      )}
      <Link to={`/product/${id}`}>
        <img src={img} alt={title} />
      </Link>
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
      <Button
        btnContent={btnContent}
        btnClass={btnClass}
        icon={icon}
        addToCart={() => addOneToCart(id, 1)}
      />
    </figure>
  );
};
