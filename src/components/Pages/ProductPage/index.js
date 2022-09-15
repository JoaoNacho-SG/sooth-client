import React, { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../utils/api";
import { Button } from "../../general/Button";
import { Rating } from "../../general/Rating";
import style from "./productpage.module.scss";

const initialState = { count: 1 };

const counter = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count <= 1) {
        return { count: 1 };
      }
      return { count: state.count - 1 };
    default:
      return;
  }
};

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [state, dispatch] = useReducer(counter, initialState);

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
            <p>
              <span>Quantity</span>
            </p>

            <div className={style.counter__wrapper}>
              <div>
                <button
                  className={style.button_outlined}
                  onClick={() => dispatch({ type: "decrement" })}
                >
                  -
                </button>
                <input type="number" disabled placeholder={`${state.count}`} />
                <button
                  className={style.button_outlined}
                  onClick={() => dispatch({ type: "increment" })}
                >
                  +
                </button>
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
