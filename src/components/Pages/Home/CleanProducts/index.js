import React from "react";
import { TextWithImage } from "../../../../components/general/TextWithImage";

const image =
  "https://images.unsplash.com/photo-1560365163-3e8d64e762ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNtaWxpbmclMjBmYWNlc3xlbnwwfHwwfHw%3D&w=1000&q=80";

const textContent =
  "A healthier you from the inside out. We’ve sourced the cleanest ingredients to create a line of clean skin care treatments that leave you feeling your best";

export const CleanProducts = () => {
  return (
    <>
      <TextWithImage
        textFirst={true}
        bgColor={"#547665"}
        img={image}
        title={"Clean products that deliver better solutions"}
        content={textContent}
        textColor={"white"}
        titleSize={"3rem"}
        btnContent={"Shop more"}
        btnClass={"secondary"}
        icon={false}
      />
    </>
  );
};
