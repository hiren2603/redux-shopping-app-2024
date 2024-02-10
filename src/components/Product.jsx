import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`product/${product.id}`}>
      <div className="w-[300px] min-h-max bg-gray-600 rounded-lg px-2 py-2 text-white shadow-lg shadow-black cursor-pointer">
        <img src={product.thumbnail} className="rounded-lg h-[200px] w-full" />
        <h2 className="text-xl font-bold hover:text-blue-400">
          {product.title}
        </h2>
        <p className="truncate ...">{product.description}</p>
        {/* <p>{product.category}</p> */}
        <h1 className="text-2xl">
          <span className="text-2xl"> &#8377; </span>
          {(product.price * 83).toLocaleString()}
        </h1>
        <div className="pb-4">
          <Rating rating={product.rating} />
        </div>
      </div>
    </Link>
  );
}

export default Product;
