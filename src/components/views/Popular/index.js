import React from "react";
import products from "../../../assets/data/products.json";
import { Card } from "../../general/Card";
import style from "./popular.module.scss";

export const Popular = () => {
  return (
    <section>
      <div className={style.popular__browse}>
        <p>Most Popular</p>
        <p>Shop all Products</p>
      </div>

      <div className={style.popular__container}>
        {products.map((product, index) => {
          return (
            <article key={index}>
              <Card
                img={product.img}
                title={product.title}
                description={product.description}
                price={product.price}
                newprice={product?.newprice}
                discount={product.discount}
                icon={true}
                btnContent={`Add to cart`}
                btnClass={"primary"}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
