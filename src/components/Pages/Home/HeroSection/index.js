import React from "react";
import { InfoText } from "../../../general/InfoText";
import { Button } from "../../../general/Button";
import style from "./herosection.module.scss";
import { Layout } from "../../../layout/Layout";

export const HeroSection = ({ product }) => {
  return (
    <>
      <Layout>
        <section className={style.herosection__container}>
          <div className={style.herosection__text_wrapper}>
            <InfoText
              title={"All Natural Skin Remedies"}
              content={`A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best`}
              textColor={"#354E57"}
              titleSize={window.innerWidth <= 505 ? "40px" : "48px"}
            />
            <Button btnContent={"Shop products"} btnClass={"primary"} />
          </div>

          <div className={style.herosection__img_wrapper}>
            <img
              src={product?.image}
              alt="random product"
              className={style.herosection__img}
            />
          </div>
        </section>
      </Layout>
    </>
  );
};
