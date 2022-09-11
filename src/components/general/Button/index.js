import React from "react";
import style from "./button.module.scss";

export const Button = ({ content, borderColor, fontColor }) => {
  return (
    <button
      className={style.btn}
      style={{ border: `1px solid ${borderColor}`, color: `${fontColor}` }}
    >
      {content}
    </button>
  );
};
