import React from "react";

function AddIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill={props.fill}
      viewBox="0 0 16 16"
    >
      <path
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 8H1M8 15V1"
      ></path>
    </svg>
  );
}

export default AddIcon;
