import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import ProductButton from "./ProductButton";
import { BagIcon, CartIcon } from "../assets/icons";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../features/cart/cartSlice";

function ProductContent({ product }) {
  const dispetch = useDispatch();
  // const [cart, setCart] = useState(
  //   JSON.parse(localStorage.getItem("cart")) || []
  // );

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const actualPrice = Math.round(
    (product.discountPercentage / 100) * (product.price * 83) +
      product.price * 83
  );
  let price = product.price * 83;

  const handleAddToCart = () => {
    product = { ...product, price: product.price * 83 };
    dispetch(addToCart(product));
  };

  return (
    <div className=" w-full text-white">
      <div className="flex pl-4">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
      </div>
      <div className="flex space-x-2 p-4">
        <Rating rating={product.rating} />
        <span className="text-gray-400 font-semibold">Ratings</span>
      </div>
      <div className="flex items-end space-x-2 p-4">
        <span className="font-semibold text-2xl">&#8377;</span>
        <h1 className="text-4xl">{price.toLocaleString()}</h1>
        <h2 className="line-through text-lg text-gray-300">
          <span className="text-xl">&#8377;</span>
          {actualPrice.toLocaleString()}
        </h2>
        <p className="font-semibold text-md space-x-2">
          <span className="text-green-700">{product.discountPercentage}</span> %
          off
        </p>
      </div>
      <div className="flex center gap-4 text-lg p-4">
        <h1>Brand: </h1>
        <h1>{product.brand}</h1>
      </div>
      <div className="flex center gap-4 text-lg p-4">
        <h1>Category: </h1>
        <h1 className="capitalize">{product.category}</h1>
      </div>
      <div className="flex center gap-4 text-lg p-4">
        <h1>Description: </h1>
        <h1>{product.description}</h1>
      </div>
      <div className="flex w-full gap-2 pt-3">
        <ProductButton
          label="Add To Cart"
          onClick={handleAddToCart}
          icon={<CartIcon />}
          bgColor="bg-blue-500 hover:bg-blue-600"
        />
        <ProductButton
          label="Buy Now"
          onClick={() => console.log("buy now clicked!")}
          icon={<BagIcon />}
          bgColor="bg-orange-600 hover:bg-orange-700"
        />
      </div>
    </div>
  );
}

export default ProductContent;
