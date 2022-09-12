import React from "react";
import style from "./infotext.module.scss";

export const InfoText = ({ title, content, textColor }) => {
  return (
    <article className={style.article__text} style={{ color: `${textColor}` }}>
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  );
};
