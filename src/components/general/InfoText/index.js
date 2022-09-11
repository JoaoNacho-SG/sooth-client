import React from "react";
import style from "./infotext.module.scss";

export const InfoText = ({ title, content }) => {
  return (
    <article className={style.article__text}>
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  );
};
