import React from "react";
import { Card } from "../../../general/Card";
import { Layout } from "../../../layout/Layout";
import style from "./popular.module.scss";
import { Link } from "react-router-dom";
import { calcPercentage } from "../../../../utils/percentage";

export const Popular = ({ popularProducts }) => {
  return (
    <>
      <Layout>
        <section>
          <div className={style.popular__browse}>
            <p>Most Popular</p>
            <p>Shop all Products</p>
          </div>

          <div className={style.popular__container}>
            {popularProducts.map((product) => {
              if (product.category === "jewelery") {
                return (
                  <article key={product.id}>
                    <Card
                      img={product.image}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      icon={true}
                      btnContent={`Add to cart`}
                      btnClass={"primary"}
                      tagCategory={"jewelery"}
                    />

                    <Link className="link" to={`/product/${product.id}`}>
                      <p className={style.details}>more details</p>
                    </Link>
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

                    <Link className="link" to={`/product/${product.id}`}>
                      <p className={style.details}>more details</p>
                    </Link>
                  </article>
                );
              }

              return (
                <article key={product.id}>
                  <Card
                    img={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    icon={true}
                    btnContent={`Add to cart`}
                    btnClass={"primary"}
                  />

                  <Link className="link" to={`/product/${product.id}`}>
                    <p className={style.details}>more details</p>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};
