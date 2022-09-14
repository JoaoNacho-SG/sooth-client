import React, { useState, useEffect } from "react";
import { InfoText } from "../../../general/InfoText";
import { Button } from "../../../general/Button";
import style from "./herosection.module.scss";
import { Layout } from "../../../layout/Layout";
import { getSingleProduct } from "../../../../utils/api";
import { Spinner } from "../../../general/Spinner";

export const HeroSection = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const productFromApi = await getSingleProduct();
      setProduct(productFromApi.data);
      setLoading(false);
    })();
  }, []);

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

          {loading && (
            <div className={style.herosection__wrapper}>
              <Spinner />
            </div>
          )}

          {product.images && (
            <div className={style.herosection__wrapper}>
              <img src={product.images[0]} alt="random product" />
            </div>
          )}
        </section>
      </Layout>
    </>
  );
};
