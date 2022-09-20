export const calcPercentage = (price, percentage) => {
  const percent = Number(percentage);
  const totalPrice = Number(price);

  const valueToSubtract = (percent * totalPrice) / 100;
  const priceWithDiscount = totalPrice - valueToSubtract;

  return priceWithDiscount.toFixed(2);
};
