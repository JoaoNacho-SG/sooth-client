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
  btnContent,
  btnBorderColor,
  btnFontColor,
}) => {
  if (textFirst) {
    return (
      <section className={style.container}>
        <div className={style.wrapper__text}>
          <InfoText title={title} content={content} textColor={textColor} />
          <Button
            btnContent={btnContent}
            btnBorderColor={btnBorderColor}
            btnFontColor={btnFontColor}
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
          <InfoText title={title} content={content} textColor={textColor} />
          <Button
            btnContent={btnContent}
            btnBorderColor={btnBorderColor}
            btnFontColor={btnFontColor}
          />
        </div>
      </section>
    );
  }
};
