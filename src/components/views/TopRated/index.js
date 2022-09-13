import React from "react";
import style from "./toprated.module.scss";
import { Card } from "../../general/Card";
import topRatedProducts from "../../../assets/data/toprated.json";

export const TopRated = () => {
  return (
    <section>
      <div className={style.toprated__browse}>
        <p>Top rated</p>
        <p>Shop all Products</p>
      </div>

      <div className={style.toprated__container}>
        {topRatedProducts.map((product, index) => {
          return (
            <article key={index}>
              <Card
                img={product.img}
                title={product.title}
                description={product.description}
                price={product.price}
                newprice={product?.newprice}
                discount={product.discount}
                btnContent={`Add to cart`}
                btnClass={"primary"}
                icon={true}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
