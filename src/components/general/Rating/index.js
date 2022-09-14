import React from "react";
import style from "./rating.module.scss";

export const Rating = ({ stars }) => {
  if (Math.floor(stars) === 1) {
    return (
      <div className={style.rating__wrapper}>
        <p>★☆☆☆☆</p>
      </div>
    );
  }

  if (Math.floor(stars) === 2) {
    return (
      <div className={style.rating__wrapper}>
        <p>★★☆☆☆</p>
      </div>
    );
  }

  if (Math.floor(stars) === 3) {
    return (
      <div className={style.rating__wrapper}>
        <p>★★★☆☆</p>
      </div>
    );
  }

  if (Math.floor(stars) === 4) {
    return (
      <div className={style.rating__wrapper}>
        <p>★★★★☆</p>
      </div>
    );
  }

  if (Math.floor(stars) === 5) {
    return (
      <div className={style.rating__wrapper}>
        <p>★★★★★</p>
      </div>
    );
  }

  if (Math.floor(stars) === 0) {
    return (
      <div className={style.norating__wrapper}>
        <p>No rating yet</p>
      </div>
    );
  }
};
