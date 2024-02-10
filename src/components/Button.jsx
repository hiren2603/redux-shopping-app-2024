import React from "react";

const Button = ({ btnText, onClick, children, loading }) => {
  return (
    <>
      <button
        className="flex text-lg justify-center items-center w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded"
        disabled={loading}
        onClick={onClick}
      >
        {btnText}
        {children}
      </button>
    </>
  );
};

export default Button;
