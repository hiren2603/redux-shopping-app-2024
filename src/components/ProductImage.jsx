import React from "react";
import ProductButton from "./ProductButton";
import { BagIcon, CartIcon } from "../assets/icons";

function ProductImage({ images, current, onSetCurrent }) {
  return (
    <>
      <div className="flex-[10%] flex items-center flex-col gap-2 justify-start p-2 rounded">
        {images.map((item) => (
          <div
            key={item}
            className="p-2 w-full cursor-pointer border-2 rounded hover:border-2 hover:border-blue-700 transition-all"
            onMouseOver={() => onSetCurrent(item)}
          >
            <img src={item} className="h-full w-full rounded transition-all " />
          </div>
        ))}
      </div>
      <div className="flex-[90%] max-h-[450px] flex shadow-gray-700 rounded">
        <img
          src={current}
          alt="current  "
          className="h-auto w-auto max-w-screen-2xl object-fill"
          // className="max-w-full h-fit w-fit object-cover"
        />
      </div>
    </>
  );
}

export default ProductImage;
