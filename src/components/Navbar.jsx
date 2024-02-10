import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgLogOff } from "react-icons/cg";
import { CartIcon, UserIcon } from "../assets/icons";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.status);
  const cart = useSelector((state) => state.cart.cart);
  const cartQuantity = cart.reduce((acc, item) => {
    return acc + item.cartQuantity;
  }, 0);
  // console.log(auth);
  return (
    <nav className="h-[70px] flex bg-slate-600">
      <div className="container mx-auto w-[90vw] flex justify-start items-center px-2">
        <div className="flex-[30%]">
          <h1 className="text-4xl font-bold">ShopVista</h1>
        </div>
        <ul className="flex flex-[60%] justify-start gap-40 text-lg  font-semibold">
          <li className="hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/users">Users</Link>
          </li>
          <li className="hover:text-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex justify-between items-center w-[7%]">
          <li className="flex relative">
            <span className="absolute  flex justify-center items-center right-[-15px] top-[-8px] bg-blue-500 rounded-full w-6 h-6 font-semibold text-lg p-3">
              {cartQuantity}
            </span>
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
          {auth ? (
            <li onClick={() => dispatch(logoutUser())}>
              <Link to="/">
                <CgLogOff className="text-xl hover: text-white" />
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <UserIcon />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
