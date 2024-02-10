import React from "react";

function IconButton({ children }) {
  return (
    <button className="px-3 py-3 bg-blue-500 text-white rounded-md">
      {children}
    </button>
  );
}

export default IconButton;
