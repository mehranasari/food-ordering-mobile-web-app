import React from "react";

const DeleteAddressIcon = ({stroke,background}) => {
  return (
    <svg
      width="48"
      height="54"
      viewBox="0 0 48 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.1111 22.8348C30.1111 18.9979 27.0021 15.8889 23.168 15.8889C19.3312 15.8889 16.2222 18.9979 16.2222 22.8348C16.2222 26.6688 19.3312 29.7778 23.168 29.7778C27.0021 29.7778 30.1111 26.6688 30.1111 22.8348Z"
        stroke={stroke? stroke : "#BDBDBD"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1652 52C19.8361 52 2.33325 37.8288 2.33325 23.0091C2.33325 11.4073 11.6585 2 23.1652 2C34.6719 2 43.9999 11.4073 43.9999 23.0091C43.9999 37.8288 26.4943 52 23.1652 52Z"
        stroke={stroke? stroke : "#BDBDBD"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37 33C42.5222 33 47 37.4768 47 43C47 48.5222 42.5222 53 37 53C31.4768 53 27 48.5222 27 43C27 37.4768 31.4768 33 37 33Z"
        fill={background? background : "white"}
        stroke="#F65164"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.589 40.3999L34.4084 45.5804"
        stroke="#F65164"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.5889 45.5858L34.4041 40.3999"
        stroke="#F65164"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteAddressIcon;
