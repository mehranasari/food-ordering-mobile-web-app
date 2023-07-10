import React from "react";

const NoAccessHistoryIcon = (props) => {
  return (
    <svg
      width="82"
      height="80"
      viewBox="0 0 82 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63 47C63 63.5697 49.5697 77 33 77C16.4303 77 3 63.5697 3 47C3 30.4303 16.4303 17 33 17C49.5697 17 63 30.4303 63 47Z"
        stroke="#BDBDBD"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.1313 56.5431L31.9043 49.2491V33.5291"
        stroke={props?.fill ? props.fill : "#FFDD02"}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75.1114 9.34374L67.1681 17.1741C65.8609 18.4627 63.85 18.4627 62.5428 17.1741C61.2357 15.8856 61.2357 13.9032 62.5428 12.6147L70.4862 4.78428C71.7933 3.49574 73.8043 3.49574 75.1114 4.78428C76.318 6.07282 76.318 8.15432 75.1114 9.34374Z"
        fill={props?.fill ? props.fill : "#FFDD02"}
      />
      <path
        d="M56.7451 3.0587V7.4491C56.7451 9.16708 55.2696 10.5033 53.3726 10.5033C51.4755 10.5033 50 9.16708 50 7.4491V3.0587C50 1.34072 51.4755 0.00451252 53.3726 0.00451252C55.1642 -0.0909309 56.7451 1.34072 56.7451 3.0587Z"
        fill={props?.fill ? props.fill : "#FFDD02"}
      />
      <path
        d="M78.7139 29.6029H74.2833C72.5496 29.6029 71.2012 28.1407 71.2012 26.2609C71.2012 24.381 72.5496 22.9189 74.2833 22.9189H78.7139C80.4477 22.9189 81.7961 24.381 81.7961 26.2609C81.8924 28.1407 80.4477 29.6029 78.7139 29.6029Z"
        fill={props?.fill ? props.fill : "#FFDD02"}
      />
    </svg>
  );
};

export default NoAccessHistoryIcon;
