import React from "react";

function EmailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="15"
      fill="none"
      viewBox="0 0 17 15"
    >
      <path
        stroke={props.stroke ? props.stroke : "#BDBDBD"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.909 5.224L9.582 7.832c-.63.481-1.513.481-2.142 0L4.084 5.224"
      ></path>
      <path
        stroke={props.stroke ? props.stroke : "#BDBDBD"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M4.813 1h7.353c1.06.012 2.07.448 2.793 1.208a3.751 3.751 0 011.034 2.813v4.958a3.751 3.751 0 01-1.034 2.813A3.915 3.915 0 0112.166 14H4.813C2.535 14 1 12.196 1 9.979V5.021C1 2.804 2.535 1 4.813 1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default EmailIcon;
