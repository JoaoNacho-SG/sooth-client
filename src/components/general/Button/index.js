import React from "react";
import style from "./button.module.scss";

export const Button = ({ btnContent, btnBorderColor, btnFontColor }) => {
  return (
    <button
      className={style.btn}
      style={{
        border: `1px solid ${btnBorderColor}`,
        color: `${btnFontColor}`,
      }}
    >
      {btnContent}
    </button>
  );
};
