import React from "react";

function MinusIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="3"
      fill={props.fill}
      viewBox="0 0 16 4"
    >
      <path
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 2H1"
      ></path>
    </svg>
  );
}

export default MinusIcon;
