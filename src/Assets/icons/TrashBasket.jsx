import React from "react";

function TrashBasket(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 17 18"
    >
      <path
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M14.776 6.81s-.48 5.825-.758 8.279c-.133 1.172-.874 1.858-2.086 1.88-2.308.04-4.618.043-6.925-.004-1.167-.024-1.895-.719-2.025-1.87-.28-2.476-.758-8.285-.758-8.285M16 4.018H1M13.11 4.018a1.45 1.45 0 01-1.429-1.145l-.215-1.052A1.128 1.128 0 0010.372 1H6.628c-.512 0-.962.336-1.094.82l-.215 1.053A1.45 1.45 0 013.89 4.018"
      ></path>
    </svg>
  );
}

export default TrashBasket;
