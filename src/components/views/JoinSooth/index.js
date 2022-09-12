import React from "react";
import { Button } from "../../general/Button";
import style from "./joinsooth.module.scss";

export const JoinSooth = () => {
  return (
    <section className={style.container}>
      <div className={style.title__wrapper}>
        <h1>Join the Sooth Family</h1>
      </div>
      <div className={style.text__wrapper}>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </p>
      </div>
      <div className={style.input__wrapper}>
        <input type="text"></input>
        <Button />
      </div>
    </section>
  );
};
