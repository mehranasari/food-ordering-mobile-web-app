import React from "react";

const CallingStrokeIcon = ({stroke}) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5547 1C13.4174 1.32447 15.679 3.62974 16 6.55158"
        stroke={stroke ? stroke : "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5547 3.79712C11.9246 4.0687 12.9951 5.16212 13.2619 6.56028"
        stroke={stroke ? stroke : "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.98566 8.87294C11.071 12.0213 11.771 8.37899 13.7355 10.3827C15.6294 12.3153 16.7187 12.7025 14.3183 15.1511C14.0178 15.3976 12.1081 18.3639 5.39679 11.5155C-1.31532 4.66632 1.58905 2.71509 1.83067 2.40838C4.23604 -0.0469639 4.60967 1.07057 6.50358 3.00315C8.46723 5.00776 4.90027 5.72454 7.98566 8.87294Z"
        stroke={stroke ? stroke : "#BDBDBD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CallingStrokeIcon;
