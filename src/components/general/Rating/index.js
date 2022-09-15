import React from "react";
import style from "./rating.module.scss";

export const Rating = ({ stars }) => {
  if (Math.round(stars) === 1) {
    return (
      <div className={style.rating__wrapper}>
        <p>★☆☆☆☆</p>
      </div>
    );
  }

  if (Math.round(stars) === 2) {
    return (
      <div className={style.rating__wrapper}>
        <p>★★☆☆☆</p>
      </div>
    );
  }

  if (Math.round(stars) === 3) {
    return (
      <div className={style.rating__wrapper}>
        <p>★★★☆☆</p>
      </div>
    );
  }

  if (Math.round(stars) === 4) {
    return (
      <div className={style.rating__wrapper}>
        <p>★★★★☆</p>
      </div>
    );
  }

  if (Math.round(stars) === 5) {
    return (
      <div className={style.rating__wrapper}>
        <p>★★★★★</p>
      </div>
    );
  }

  if (Math.round(stars) === 0) {
    return (
      <div className={style.norating__wrapper}>
        <p>No rating yet</p>
      </div>
    );
  }
};
