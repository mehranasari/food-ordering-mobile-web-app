import React from "react";

function DownArrow({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
    >
      <path
        d="M11.3891 0.61831C11.2346 0.460563 10.9919 0.460563 10.8374 0.61831L6.00396 5.55352L1.14848 0.61831C0.993984 0.460563 0.75121 0.460563 0.596717 0.61831C0.464295 0.753521 0.464295 1.02394 0.618788 1.18169L5.71704 6.38732C5.78325 6.45493 5.89361 6.5 5.98189 6.5C6.07017 6.5 6.18052 6.45493 6.24673 6.38732L11.345 1.18169C11.5436 1.02394 11.5436 0.753521 11.3891 0.61831Z"
        fill={color ? color : "#757575"}
        stroke={color ? color : "#757575"}
        strokeWidth="0.8"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export default DownArrow;
