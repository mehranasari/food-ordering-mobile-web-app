import React from "react";

function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill={props.fill}
      viewBox="0 0 20 18"
    >
      <path
        stroke={props.fill}
        strokeLinecap="round"
        strokeWidth="2"
        d="M1.143 1.333L18.857 1.333"
      ></path>
      <path 
        stroke={props.fill}
        strokeLinecap="round"
        strokeWidth="2"
        d="M1.143 9L18.857 9"
      ></path>
      <path
        stroke={props.fill}
        strokeLinecap="round"
        strokeWidth="2"
        d="M7.714 16.666L18.857 16.666"
      ></path>
    </svg>
  );
}

export default MenuIcon;
