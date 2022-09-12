import React from "react";
import { Button } from "../Button";
import { InfoText } from "./../InfoText";
import style from "./textwithimage.module.scss";

export const TextWithImage = ({
  textFirst,
  img,
  title,
  content,
  textColor,
}) => {
  if (textFirst) {
    return (
      <section className={style.container}>
        <div className={style.wrapper__text}>
          <InfoText title={title} content={content} textColor={textColor} />
          <Button
            content={"Shop more"}
            borderColor={"white"}
            fontColor={"white"}
          />
        </div>

        <div className={style.wrapper__img}>
          <img src={img} alt="happy people" />
        </div>
      </section>
    );
  }

  if (!textFirst) {
    return (
      <section className={style.container}>
        <div className={style.wrapper__img}>
          <img src={img} alt="happy people" />
        </div>

        <div className={style.wrapper__text}>
          <InfoText title={title} content={content} />
        </div>
      </section>
    );
  }
};
