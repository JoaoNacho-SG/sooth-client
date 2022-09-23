import React from "react";
import { TextWithImage } from "../../../general/TextWithImage";

const textContent =
  "A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best";
const image =
  "https://img.freepik.com/free-psd/person-with-tattoo-mock-up-arm-back_23-2149447871.jpg?w=2000";

export const NaturalIngredients = () => {
  return (
    <>
      <TextWithImage
        textFirst={false}
        bgColor={"#C6B9B6"}
        img={image}
        title={"All Natural Ingredients."}
        content={textContent}
        textColor={"#2E2E22"}
        titleSize={"38px"}
        btnContent={"Shop more"}
        btnClass={"tertiary"}
        icon={false}
      />
    </>
  );
};
