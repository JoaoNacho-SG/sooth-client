import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFiftyProducts } from "../../../utils/api";
import style from "./search.module.scss";

export const Search = ({ visible }) => {
  const [results, setResults] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async () => {
      const productsFromApi = await getFiftyProducts();
      setProductsList(productsFromApi.data);
    })();
  }, []);

  useEffect(() => {
    if (!visible) {
      setResults([]);
    }
  }, [visible]);

  const filterProductsList = (e) => {
    const typedQuery = e.target.value;

    if (!typedQuery.length) {
      setResults([]);
    }

    setTimeout(() => {
      const productsFound = productsList.filter((product) => {
        if (!typedQuery.length) {
          return null;
        }

        return (
          product.title.toLowerCase() === typedQuery.toLowerCase() ||
          product.title.toLowerCase().includes(typedQuery.toLowerCase())
        );
      });

      setResults(productsFound);
    }, 1500);
  };

  return (
    <div className={style.search__container}>
      <div
        className={visible ? style.searchbar_enabled : style.searchbar_disabled}
      >
        <input
          className={style.search__input}
          type="text"
          placeholder="Search products"
          onChange={filterProductsList}
        />
      </div>

      {visible && (
        <div className={style.results__container}>
          <ul>
            {results &&
              results.map((productFound) => {
                return (
                  <li key={productFound.id} className={style.results__wrapper}>
                    <Link to={`/product/${productFound.id}`}>
                      <img
                        src={productFound.image}
                        alt="product match"
                        className={style.results__image}
                      />
                    </Link>
                    <h4 className={style.results__title}>
                      {productFound.title}
                    </h4>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};
