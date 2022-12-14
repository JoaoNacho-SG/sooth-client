import React, { useState, useEffect, useReducer, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../utils/api";
import { CartContext } from "../../../utils/cart.context";
import { calcPercentage } from "../../../utils/percentage";
import { Button } from "../../general/Button";
import { Rating } from "../../general/Rating";
import { Tag } from "../../general/Tag";
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
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      const productFromApi = await getProduct(id);
      setProduct(productFromApi.data);
    })();
  }, [id]);

  return (
    <section className={style.container}>
      <div className={style.product__container}>
        <div
          className={style.img__wrapper}
          style={{ backgroundImage: `url(${product?.image})` }}
        ></div>

        <div className={style.text__container}>
          <div className={style.text__wrapper}>
            {product?.category === "jewelery" && (
              <Tag tagDiscount={false} tagContent={"New!"} productPage={true} />
            )}

            {product?.title.toLowerCase().includes("women") &&
              product?.category !== "jewelery" && (
                <Tag
                  tagDiscount={true}
                  tagContent={"15% off"}
                  productPage={true}
                />
              )}

            <h1 className={style.title}>{product?.title}</h1>
            <Rating stars={product?.rating?.rate} />

            <div>
              <div className={style.price__wrapper}>
                {product?.title.toLowerCase().includes("women") &&
                product?.category !== "jewelery" ? (
                  <>
                    <p className={style.price__discount}>
                      ${calcPercentage(product?.price, 15)}
                    </p>
                    <p className={style.price__nodiscount}>${product?.price}</p>
                  </>
                ) : (
                  <>
                    <p>${product?.price}</p>
                  </>
                )}
              </div>
              <h4>{product?.category}</h4>
              <p>
                <span>{product?.description}</span>
              </p>

              <div className={style.counter__wrapper}>
                <div>
                  <p>
                    <span>Quantity</span>
                  </p>
                  <button
                    className={style.button_outlined}
                    onClick={() => dispatch({ type: "decrement" })}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    disabled
                    placeholder={`${state.count}`}
                  />
                  <button
                    className={style.button_outlined}
                    onClick={() => dispatch({ type: "increment" })}
                  >
                    +
                  </button>
                </div>
                <div className={style.button_add_to_cart}>
                  <Button
                    btnClass={"primary"}
                    icon={true}
                    btnContent={"Add to cart"}
                    addToCart={() => addToCart(product.id, state.count)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
