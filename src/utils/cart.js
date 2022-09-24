export const addToCart = (id, amount) => {
  window.location.reload();
  const userCart = localStorage.getItem("cart");
  const shoppingCart = JSON.parse(userCart);
  //No cart was found
  if (!userCart) {
    const list = [{ id: id, amount: amount }];
    return localStorage.setItem("cart", JSON.stringify(list));
  }
  //Cart was found and product is not in the cart
  if (shoppingCart.find((product) => product.id === id) === undefined) {
    return localStorage.setItem(
      "cart",
      JSON.stringify([...shoppingCart, { id: id, amount: 1 }])
    );
  } else {
    //Cart was found and product is in the cart
    let productToUpdate = shoppingCart.find((product) => product.id === id);
    let newShoppingCart = shoppingCart.filter((product) => product.id !== id);
    productToUpdate = [
      ...newShoppingCart,
      { id: id, amount: productToUpdate.amount + amount },
    ];
    return localStorage.setItem("cart", JSON.stringify([...productToUpdate]));
  }
};
