import React from "react";
import style from "./button.module.scss";
import { MdShoppingCart } from "react-icons/md";

export const Button = ({ btnContent, btnClass, icon }) => {
  if (btnClass === "primary") {
    return (
      <button className={style.btn__primary}>
        {!icon ? (
          `${btnContent}`
        ) : (
          <>
            <MdShoppingCart />
            {btnContent}
          </>
        )}
      </button>
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
};
