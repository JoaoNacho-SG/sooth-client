import React, { useState, useEffect } from "react";
import { Card } from "../../../general/Card";
import { Layout } from "../../../layout/Layout";
import style from "./popular.module.scss";
import { getFourProducts } from "../../../../utils/api";

export const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const productsFromApi = await getFourProducts();
      setPopularProducts(productsFromApi.data.products);
    })();
  }, []);

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
                    img={product.thumbnail}
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
      </Layout>
    </>
  );
};
