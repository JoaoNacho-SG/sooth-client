import React from "react";
import style from "./toprated.module.scss";
import { Card } from "../../../general/Card";
import { Layout } from "../../../layout/Layout";
import { Link } from "react-router-dom";
import { calcPercentage } from "../../../../utils/percentage";

export const TopRated = ({ topRatedProducts }) => {
  return (
    <>
      <Layout>
        <section>
          <div className={style.toprated__browse}>
            <p>Top rated</p>
            <p>Shop all Products</p>
          </div>

          <div className={style.toprated__container}>
            {topRatedProducts.map((product) => {
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
                    btnContent={`Add to cart`}
                    btnClass={"primary"}
                    icon={true}
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
