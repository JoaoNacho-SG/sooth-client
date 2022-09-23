export const addOneToCart = (id, amount) => {
  const userCart = localStorage.getItem("cart");
  console.log(JSON.parse(userCart));
  //TO DO
  if (!userCart) {
    const list = [{ id: id, amount: amount }];
    localStorage.setItem("cart", JSON.stringify(list));
  } else if (
    JSON.parse(userCart.find((product) => product.id === id)) == null
  ) {
    return localStorage.setItem(
      "cart",
      JSON.stringify([...userCart, { id: id, amount: 1 }])
    );
  } else {
    return userCart.map((product) => {
      if (product.id === id) {
        return localStorage.setItem(
          "cart",
          JSON.stringify([
            ...userCart,
            { ...product, amount: product.amount + 1 },
          ])
        );
      } else {
        return product;
      }
    });
  }

  //   if (cart.find((product) => product.id === id) == null) {
  //     return [...cart, { id, amount: 1 }];
  //   } else {
  //     return cart.map((product) => {
  //       if (product.id === id) {
  //         return { ...product, amount: product.amount + 1 };
  //       } else {
  //         return product;
  //       }
  //     });
  //   }
};
