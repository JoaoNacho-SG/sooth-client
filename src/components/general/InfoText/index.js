import React from "react";
import style from "./infotext.module.scss";

export const InfoText = ({ title, content, textColor, titleSize }) => {
  return (
    <article className={style.article__text} style={{ color: `${textColor}` }}>
      <h1 style={{ fontSize: `${titleSize}` }}>{title}</h1>
      <p>{content}</p>
    </article>
  );
};
