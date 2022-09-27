import React from "react";
import style from "./toprated.module.scss";
import { Card } from "../../../general/Card";
import { Layout } from "../../../layout/Layout";
import { calcPercentage } from "../../../../utils/percentage";

export const TopRated = ({ topRatedProducts }) => {
  return (
    <>
      <Layout bgColor={"#EEF3F4"}>
        <section className={style.toprated__container}>
          <div className={style.toprated__browse}>
            <div className={style.toprated__browse_left}>
              <p>
                <a href="#">Top rated</a>
              </p>
            </div>
            <div className={style.toprated__browse_right}>
              <p>
                <a href="#"> Shop all Products</a>
              </p>
            </div>
          </div>

          <div className={style.toprated__card_container}>
            {topRatedProducts.map((product) => {
              if (product.category === "jewelery") {
                return (
                  <article key={product.id}>
                    <Card
                      id={product.id}
                      img={product.image}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      icon={true}
                      btnContent={`Add to cart`}
                      btnClass={"primary"}
                      tagCategory={"jewelery"}
                    />
                  </article>
                );
              }

              if (
                product.title.toLowerCase().includes("women") &&
                product.category !== "jewelery"
              ) {
                return (
                  <article key={product.id}>
                    <Card
                      id={product.id}
                      img={product.image}
                      title={product.title}
                      description={product.description}
                      discount={true}
                      price={product.price}
                      newprice={`${calcPercentage(product.price, 15)}`}
                      icon={true}
                      btnContent={`Add to cart`}
                      btnClass={"primary"}
                      tagCategory={"women"}
                    />
                  </article>
                );
              }

              return (
                <article key={product.id}>
                  <Card
                    id={product.id}
                    img={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    btnContent={`Add to cart`}
                    btnClass={"primary"}
                    icon={true}
                  />
                </article>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};
