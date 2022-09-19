import axios from "axios";

export const getFiftyProducts = () => {
  return axios.get("https://fakestoreapi.com/products?limit=50");
};

export const getProduct = (id) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};
