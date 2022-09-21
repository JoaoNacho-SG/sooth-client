import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFiftyProducts } from "../../../utils/api";
import style from "./search.module.scss";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async () => {
      const productsFromApi = await getFiftyProducts();
      setProductsList(productsFromApi.data);
    })();
  }, []);

  const filterProductsList = (e) => {
    setQuery(e.target.value);

    if (!query.length) {
      setResults([]);
    }

    setTimeout(() => {
      const productsFound = productsList.filter((product) => {
        return (
          product.title.toLowerCase() === query.toLowerCase() ||
          product.title.toLowerCase().includes(query.toLowerCase())
        );
      });

      setResults(productsFound);
    }, 1500);
  };

  return (
    <div className={style.search__container}>
      <div>
        <input
          className={style.search__input}
          type="text"
          placeholder="Search products"
          value={query}
          onChange={filterProductsList}
        />
      </div>

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
                  <h4 className={style.results__title}>{productFound.title}</h4>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
