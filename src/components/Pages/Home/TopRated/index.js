import React, { useState, useEffect } from "react";
import style from "./toprated.module.scss";
import { Card } from "../../../general/Card";
import { Layout } from "../../../layout/Layout";
import { getEightProducts } from "../../../../utils/api";
import { Link } from "react-router-dom";

export const TopRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    (async () => {
      const productsFromApi = await getEightProducts();
      setTopRated(productsFromApi.data.products);
    })();
  }, []);

  return (
    <>
      <Layout>
        <section>
          <div className={style.toprated__browse}>
            <p>Top rated</p>
            <p>Shop all Products</p>
          </div>

          <div className={style.toprated__container}>
            {topRated.map((product) => {
              return (
                <article key={product.id}>
                  <Card
                    img={product.thumbnail}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    newprice={product?.discountPercentage}
                    discount={product.discount}
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
