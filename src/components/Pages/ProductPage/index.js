import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../utils/api";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const productFromApi = await getProduct(id);
      //   console.log(productFromApi.data);
      setProduct(productFromApi.data);
    })();
  }, [id]);

  console.log(product);
  return (
    <section>
      <h1>{product.title}</h1>
    </section>
  );
};
