import React from "react";
import style from "./toprated.module.scss";
import { Card } from "../../../general/Card";
import { Layout } from "../../../layout/Layout";
import { Link } from "react-router-dom";

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
