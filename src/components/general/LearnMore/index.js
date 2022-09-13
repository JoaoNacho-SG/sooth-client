import React from "react";
import style from "./learnmore.module.scss";
import { AiOutlineShop, AiOutlineShoppingCart } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

export const LearnMore = () => {
  return (
    <section className={style.container}>
      <article className={style.wrapper}>
        <AiOutlineShop className={style.icon} />
        <p>We’re offering new ways to shop.</p>
        <p>learn more</p>
      </article>

      <article className={style.wrapper}>
        <AiOutlineShoppingCart className={style.icon} />
        <p>Buy online, pickup in store</p>
        <p>learn more</p>
      </article>

      <article className={style.wrapper}>
        <FiPhoneCall className={style.icon} />
        <p>Curbside pickup</p>
        <p>learn more</p>
      </article>
    </section>
  );
};
