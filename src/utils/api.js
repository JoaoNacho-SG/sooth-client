import axios from "axios";

export const getEightProducts = () => {
  return axios.get("https://dummyjson.com/products?limit=8");
};

export const getFourProducts = () => {
  return axios.get("https://dummyjson.com/products?limit=4&skip=10");
};

export const getSingleProduct = () => {
  return axios.get("https://dummyjson.com/products/17");
};
