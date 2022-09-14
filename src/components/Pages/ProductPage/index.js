import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../utils/api";
import { Button } from "../../general/Button";
import { Rating } from "../../general/Rating";
import style from "./productpage.module.scss";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    (async () => {
      const productFromApi = await getProduct(id);
      //   console.log(productFromApi.status);
      setProduct(productFromApi.data);
    })();
  }, [id]);

  return (
    <section className={style.container}>
      <div
        style={{
          backgroundImage: `url(${product?.images[0]})`,
        }}
        className={style.img__wrapper}
      ></div>

      <div>
        <div className={style.text__wrapper}>
          <h1 className={style.title}>{product?.title}</h1>
          <Rating stars={product?.rating} />
          <div>
            <p>${product?.price}</p>
            <h4>{product?.brand}</h4>
            <p>
              <span>{product?.description}</span>
            </p>

            <div className={style.counter__wrapper}>
              <div>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <input type="number" placeholder={`${counter}`} />
                <button onClick={() => setCounter(counter + 1)}>+</button>
              </div>
              <div>
                <Button
                  btnClass={"primary"}
                  icon={true}
                  btnContent={"Add to cart"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
