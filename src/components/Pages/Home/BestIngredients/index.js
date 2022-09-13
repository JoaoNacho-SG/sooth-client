import React from "react";
import ingredients from "../../../../assets/data/ingredients.json";
import { CardIngredients } from "../../../general/CardIngredients";
import { Layout } from "../../../layout/Layout";
import style from "./bestingredients.module.scss";

export const BestIngredients = () => {
  return (
    <>
      <Layout>
        <section className={style.container}>
          <div className={style.text__wrapper}>
            <h1>We use the best</h1>
            <p>Explore our innovative skincare products</p>
          </div>

          <div className={style.cards__wrapper}>
            {ingredients.map((ingredient, index) => {
              return (
                <CardIngredients
                  key={index}
                  img={ingredient.img}
                  title={ingredient.title}
                  description={ingredient.description}
                />
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};
