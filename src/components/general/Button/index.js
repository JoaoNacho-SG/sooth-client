import React from "react";
import style from "./button.module.scss";
import { MdShoppingCart } from "react-icons/md";

export const Button = ({ btnContent, btnClass, icon, addToCart }) => {
  if (btnClass === "primary") {
    return (
      <>
        {!icon ? (
          <button className={style.btn__primary}>{btnContent}</button>
        ) : (
          <button className={style.btn__primary} onClick={addToCart}>
            <MdShoppingCart />
            {btnContent}
          </button>
        )}
      </>
    );
  }

  if (btnClass === "secondary") {
    return <button className={style.btn__secondary}>{btnContent}</button>;
  }

  if (btnClass === "tertiary") {
    return <button className={style.btn__tertiary}>{btnContent}</button>;
  }

  if (btnClass === "filled") {
    return <button className={style.btn__filled}>{btnContent}</button>;
  }

  if (btnClass === "login") {
    return <button className={style.btn__login}>{btnContent}</button>;
  }

  if (btnClass === "disabled") {
    return (
      <button disabled className={style.btn__disabled}>
        {btnContent}
      </button>
    );
  }
};
