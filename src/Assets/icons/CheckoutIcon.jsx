import React from "react";

function CheckoutIcon({stroke}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.788 14.733c.342 0 .62.284.62.634 0 .35-.278.633-.62.633a.626.626 0 01-.62-.633c0-.35.278-.634.62-.634zM13.912 14.733c.342 0 .62.284.62.634 0 .35-.278.633-.62.633a.627.627 0 01-.62-.633c0-.35.278-.634.62-.634z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 1l1.686.298.781 9.509c.064.775.697 1.37 1.457 1.37h8.848c.726 0 1.342-.546 1.447-1.282l.77-5.435c.094-.67-.414-1.27-1.076-1.27H2.957M10.223 7.253h2.249"
      ></path>
    </svg>
  );
}

export default CheckoutIcon;
