import React from "react";

function LocationIcon({ stroke, width, height }) {
  return (
    <svg
      width={width ? width : "17"}
      height={height ? height : "20"}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 8.50051C11 7.11924 9.88076 6 8.50051 6C7.11924 6 6 7.11924 6 8.50051C6 9.88076 7.11924 11 8.50051 11C9.88076 11 11 9.88076 11 8.50051Z"
        stroke={stroke ? stroke : "#C1CAE1"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.49951 19C7.30104 19 1 13.8984 1 8.56329C1 4.38664 4.3571 1 8.49951 1C12.6419 1 16 4.38664 16 8.56329C16 13.8984 9.69799 19 8.49951 19Z"
        stroke={stroke ? stroke : "#C1CAE1"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LocationIcon;
