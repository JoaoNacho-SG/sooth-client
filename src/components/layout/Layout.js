import React from "react";
import style from "./layout.module.scss";

export const Layout = ({ children, bgColor }) => {
  return (
    <div
      className={style.layout__margins}
      style={{ backgroundColor: `${bgColor}` }}
    >
      {children}
    </div>
  );
};
