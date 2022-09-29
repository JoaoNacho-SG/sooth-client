import React from "react";
import { Card } from "../../../general/Card";
import { Layout } from "../../../layout/Layout";
import style from "./popular.module.scss";
import { calcPercentage } from "../../../../utils/percentage";

export const Popular = ({ popularProducts }) => {
  return (
    <>
      <Layout bgColor={"#EEF3F4"}>
        <section className={style.popular__container}>
          <div className={style.popular__browse}>
            <div className={style.popular__browse_left}>
              <p>
                <a href="#">Most Popular</a>
              </p>
            </div>
            <div className={style.popular__browse_right}>
              <p>
                <a href="#">Shop all Products</a>
              </p>
            </div>
          </div>

          <div className={style.popular__card_container}>
            {popularProducts.map((product) => {
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
                    icon={true}
                    btnContent={`Add to cart`}
                    btnClass={"primary"}
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
