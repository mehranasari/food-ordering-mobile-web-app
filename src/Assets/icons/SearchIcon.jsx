import React from "react";

function SearchIcon({stroke,size}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size? size :"14"}
      height={size? size : "15"}
      fill="none"
      viewBox="0 0 14 15"
    >
      <path
        stroke={stroke? stroke : "#9E9E9E"}
        strokeLinecap="round"
        strokeWidth="1.2"
        d="M6.395 12.404c2.98 0 5.395-2.553 5.395-5.702C11.79 3.552 9.375 1 6.395 1 3.415 1 1 3.553 1 6.702c0 3.15 2.415 5.702 5.395 5.702z"
      ></path>
      <path fill={stroke? stroke : "#9E9E9E"} d="M10.277 11.122L13 14l-2.723-2.878z"></path>
      <path
        stroke={stroke? stroke : "#9E9E9E"}
        strokeLinecap="round"
        strokeWidth="1.2"
        d="M10.277 11.122L13 14"
      ></path>
    </svg>
  );
}

export default SearchIcon;
