import React from "react";
import { Button } from "../Button";
import { InfoText } from "./../InfoText";
import style from "./textwithimage.module.scss";

export const TextWithImage = ({
  textFirst,
  bgColor,
  img,
  title,
  content,
  textColor,
  btnContent,
  btnClass,
  icon,
}) => {
  if (textFirst) {
    return (
      <section
        className={style.container}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className={style.wrapper__text}>
          <InfoText title={title} content={content} textColor={textColor} />
          <Button btnContent={btnContent} btnClass={btnClass} icon={icon} />
        </div>

        <div className={style.wrapper__img}>
          <img src={img} alt="happy people" />
        </div>
      </section>
    );
  }

  if (!textFirst) {
    return (
      <section
        className={style.container}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className={style.wrapper__img}>
          <img src={img} alt="happy people" />
        </div>

        <div className={style.wrapper__text}>
          <InfoText title={title} content={content} textColor={textColor} />
          <Button btnContent={btnContent} btnClass={btnClass} icon={icon} />
        </div>
      </section>
    );
  }
};
