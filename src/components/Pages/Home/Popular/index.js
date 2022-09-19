import React, { useState } from "react";
import { Card } from "../../../general/Card";
import { Layout } from "../../../layout/Layout";
import style from "./popular.module.scss";
import { Link } from "react-router-dom";

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
