import React from "react";
import style from "./tag.module.scss";

export const Tag = ({ tagContent, tagDiscount, productPage }) => {
  if (productPage) {
    return (
      <div
        className={
          !tagDiscount
            ? style.tag__new_productpage
            : style.tag__discount_productpage
        }
      >
        <p>{tagContent}</p>
      </div>
    );
  }

  return (
    <div
      className={
        !tagDiscount ? style.tag__wrapper_new : style.tag__wrapper_discount
      }
    >
      <p>{tagContent}</p>
    </div>
  );
};
