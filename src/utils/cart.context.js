import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const CartContext = createContext();

function CartProviderWrapper({ children }) {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [showCart, setShowCart] = useState(false);

  const cleanCart = () => {
    setCart([]);
  };

  const addToCart = (id, image, title, price, amount) => {
    const userCart = localStorage.getItem("cart");
    const shoppingCart = JSON.parse(userCart);
    //No cart was found
    if (!userCart) {
      const newCart = [
        { id: id, image: image, title: title, price: price, amount: amount },
      ];
      setCart(...newCart);
    }
    //Cart was found and product is not in the cart
    if (shoppingCart.find((product) => product.id === id) === undefined) {
      setCart([
        ...shoppingCart,
        { id: id, image: image, title: title, price: price, amount: amount },
      ]);
    } else {
      //Cart was found and product is in the cart
      let productToUpdate = shoppingCart.find((product) => product.id === id);
      let filteredShoppingCart = shoppingCart.filter(
        (product) => product.id !== id
      );
      productToUpdate = {
        id: id,
        image: image,
        title: title,
        price: price,
        amount: productToUpdate.amount + amount,
      };
      setCart([...filteredShoppingCart, productToUpdate]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ addToCart, cart, cleanCart, showCart, setShowCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProviderWrapper, CartContext };
