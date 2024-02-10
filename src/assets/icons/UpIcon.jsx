import React from "react";

function UpIcon({ isRotated }) {
  return (
    <svg
      width="10"
      height="20"
      viewBox="0 0 7 6"
      fill="none"
      className={`transform ${
        isRotated ? "rotate-0" : "rotate-180"
      } transition-all cursor-pointer`}
    >
      <path
        d="M2.38419e-07 5.50001L3.33333 0.500008L6.66667 5.50001H2.38419e-07Z"
        fill="white"
      />
    </svg>
  );
}

export default UpIcon;
