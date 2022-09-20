import React from "react";
import style from "./tag.module.scss";

export const Tag = ({ tagContent, tagDiscount }) => {
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
