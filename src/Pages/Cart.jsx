import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const dispetch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0
  );

  console.log(cartTotal);
  console.log(cart);
  return (
    <div className="w-full rounded-xl border-[1px] border-gray-600">
      <div className="flex w-full justify-between items-center py-2 text-slate-950 border-b-[1px] border-gray-600">
        <div className="flex-[50%] flex justify-center ">
          <h2 className="text-white text-md font-semibold text-center">ITEM</h2>
        </div>
        <div className="flex flex-[15%] justify-center">
          <h2 className="text-white text-md font-semibold text-center">
            PRICE
          </h2>
        </div>
        <div className="flex justify-center flex-[15%]">
          <h2 className="text-white text-md font-semibold">QTY</h2>
        </div>
        <div className="flex-[15%] flex justify-center">
          <h2 className="text-white text-md font-semibold text-center">
            TOTAL
          </h2>
        </div>
      </div>
      {cart.length < 1 ? (
        <div className="flex h-full w-full justify-center items-center">
          <p className="text-2xl text-slate-500">Your cart is Empty!</p>
        </div>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex w-full text-slate-950 border-b-[1px] border-gray-600"
          >
            <div className="flex flex-[50%] items-center gap-2 w-full p-4">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="rounded-xl w-32 h-24"
              />
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl text-white">{item.title}</h2>
                <p className="text-sm font-semibold text-white">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="w-full flex gap-1 items-center justify-center flex-[15%]">
              <span className="text-lg text-white"> &#8377; </span>
              <h2 className="text-2xl text-white text-center">
                {item.price.toLocaleString()}
              </h2>
            </div>
            <div className="w-full flex items-center justify-center flex-[15%] px-4">
              <button
                className=" w-full flex flex-row justify-between items-center text-xl
                text-white border-2 rounded-xl border-blue-500 h-10"
              >
                <span
                  className="bg-blue-500 w-full h-full rounded-lg flex justify-center items-center"
                  onClick={() => dispetch(removeFromCart(item.id))}
                >
                  -
                </span>
                <span className="px-2 w-full h-full flex items-center justify-center">
                  {item.cartQuantity}
                </span>
                <span
                  className="bg-blue-500 w-full h-full rounded-lg  flex justify-center items-center"
                  onClick={() => dispetch(addToCart(item))}
                >
                  +
                </span>
              </button>
            </div>
            <div className="w-full flex  items-center justify-center flex-[15%]">
              <h2 className="text-2xl text-white">
                {(item.price * item.cartQuantity).toLocaleString()}
              </h2>
            </div>
          </div>
        ))
      )}
      {/* footer */}
      <div className="flex w-full justify-between items-center py-2 text-slate-950 border-b-[1px] border-gray-600">
        <div className="flex flex-[85%] justify-start px-4">
          <h2 className="text-white text-2xl text-center">Cart Total</h2>
        </div>
        <div className="flex-[15%] flex justify-center">
          <h2 className="text-white text-2xl">{cartTotal.toLocaleString()}</h2>
        </div>
      </div>
    </div>
  );
}

export default Cart;
