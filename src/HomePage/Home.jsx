import React from "react";
import ProductCard from "../categoriesContains/categoriesImage";
import ProductSlider from "../categoriesContains/ImsSli";
import ProductSliderTwo from "../categoriesContains/CardImeg";
import ProductCardTwo from "../categoriesContains/ProductCardTwo";

export default function Home() {
  return (
    <div>
      <ProductCard />
      <ProductSlider />
      <ProductSliderTwo />
      <ProductCardTwo />
    </div>
  );
}
