import React from "react";

const ArrowUpIcon = ({color}) => {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.96283 1.00065L6.96283 16.2729"
        stroke={color? color : "#616161"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7.10889L6.9995 0.999966L13 7.10889"
        stroke={color? color : "#616161"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpIcon;
