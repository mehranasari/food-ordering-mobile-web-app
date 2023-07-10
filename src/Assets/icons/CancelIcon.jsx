import React from "react";

function CancelIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width? props.width : "16"}
      height={props.height? props.height : "16"}
      fill={props.fill}
      viewBox="0 0 16 16"
    >
      <path
        fill={props.fill}
        d="M14.068 15.665L8.011 9.612l-6.064 6.053a1.139 1.139 0 01-1.614-1.606l6.064-6.053L.333 1.938A1.135 1.135 0 111.939.333l6.065 6.06L14.06.333a1.136 1.136 0 011.606 1.605L9.61 7.998l6.057 6.054a1.135 1.135 0 11-1.606 1.605l.007.008z"
      ></path>
    </svg>
  );
}

export default CancelIcon;
