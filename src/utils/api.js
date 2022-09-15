import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";

export const getEightProducts = () => {
  return axios.get("https://dummyjson.com/products?limit=8");
};

export const getFourProducts = () => {
  return axios.get("https://dummyjson.com/products?limit=4&skip=10");
};

export const getSingleProduct = () => {
  return axios.get("https://dummyjson.com/products/17");
};

export const getProduct = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};

//Authentication with Firebase
export const register = async (userEmail, userPassword) => {
  try {
    await createUserWithEmailAndPassword(auth, userEmail, userPassword);
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async () => {};

export const logout = async () => {};
