import React from "react";

const MoreButtonIcon = ({stroke}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.44043L0 20.5611C0 25.1334 3.23741 28 7.81881 28H20.1812C24.7626 28 28 25.1485 28 20.5611V7.44194C28 2.85449 24.7626 -9.53674e-07 20.1812 -9.53674e-07H7.81881C3.23741 -9.53674e-07 0 2.85449 0 7.44043Z"
        fill="none"
        />
      <path
        d="M14.0197 8.03826V8.02464"
        stroke={stroke ? stroke : "#616161"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0197 14.1054V14.0918"
        stroke={stroke ? stroke : "#616161"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0197 20.1731V20.1595"
        stroke={stroke ? stroke : "#616161"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MoreButtonIcon;
