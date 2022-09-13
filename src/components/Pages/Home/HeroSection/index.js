import React from "react";
import { InfoText } from "../../../general/InfoText";
import { Button } from "../../../general/Button";
import style from "./herosection.module.scss";
import { Layout } from "../../../layout/Layout";

export const HeroSection = () => {
  return (
    <>
      <Layout>
        <section className={style.herosection__container}>
          <div className={style.herosection__wrapper}>
            <InfoText
              title={"All Natural Skin Remedies"}
              content={`A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best`}
              textColor={"#354E57"}
              titleSize={"48px"}
            />
            <Button btnContent={"Shop products"} btnClass={"primary"} />
          </div>

          <div className={style.herosection__wrapper}>
            <img
              src={
                "https://img.freepik.com/premium-vector/white-cosmetic-bottle-cream-tube-cosmetic-serum-package-template-blank-toothpaste-packaging-design-body-ointment-flacon-face-moisturizer-essence-dispenser_83194-1503.jpg?w=2000"
              }
              alt="bottleimg"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};
