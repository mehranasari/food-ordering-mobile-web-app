import React from "react";

function CalendarIcon({stroke}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="19"
      fill="none"
      viewBox="0 0 17 19"
    >
      <path
        stroke={stroke ? stroke : "#BDBDBD"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.077 7.293H15.93M12.202 10.613h.007M8.504 10.613h.007M4.798 10.613h.008M12.202 13.917h.007M8.504 13.917h.007M4.798 13.917h.008M11.87 1v2.797M5.138 1v2.797"
      ></path>
      <path
        stroke={stroke ? stroke : "#BDBDBD"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.032 2.342H4.976C2.529 2.342 1 3.732 1 6.29v7.692C1 16.577 2.529 18 4.976 18h7.048C14.48 18 16 16.601 16 14.045V6.29c.008-2.556-1.513-3.947-3.968-3.947z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default CalendarIcon;
