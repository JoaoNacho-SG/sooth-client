import React from "react";
import { InfoText } from "../../general/InfoText";
import { Button } from "../../general/Button";
import style from "./herosection.module.scss";

export const HeroSection = () => {
  return (
    <section className={style.herosection__container}>
      <div style={{ width: "40%" }}>
        <InfoText
          title={"All Natural Skin Remedies"}
          content={`A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best`}
        />
        <Button
          content={"Shop products"}
          borderColor={"#354E57"}
          fontColor={"#2E2E22"}
        />
      </div>

      <div style={{ width: "40%" }}>
        <img
          src={
            "https://img.freepik.com/premium-vector/white-cosmetic-bottle-cream-tube-cosmetic-serum-package-template-blank-toothpaste-packaging-design-body-ointment-flacon-face-moisturizer-essence-dispenser_83194-1503.jpg?w=2000"
          }
          alt="bottleimg"
        />
      </div>
    </section>
  );
};
