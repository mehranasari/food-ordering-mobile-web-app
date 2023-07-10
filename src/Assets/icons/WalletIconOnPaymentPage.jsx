import React from "react";

function WalletIconOnPaymentPage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="21"
      viewBox="0 0 28 21"
      fill="none"
    >
      <rect
        x="0.75"
        y="0.75"
        width="26.5"
        height="19.5"
        rx="4.25"
        fill={props.background? props.background : "white"}
        stroke={props.stroke? props.stroke : "#212121"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0834 13.6564H22.8291C21.2671 13.6554 20.001 12.3903 20 10.8282C20 9.26613 21.2671 8.00096 22.8291 8H27.0834"
        fill={props.background? props.background : "white"}
      />
      <path
        d="M27.0834 13.6564H22.8291C21.2671 13.6554 20.001 12.3903 20 10.8282C20 9.26613 21.2671 8.00096 22.8291 8H27.0834"
        stroke={props.stroke? props.stroke : "#212121"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3096 10.4789H22.9821H23.3096Z"
        fill={props.background? props.background : "white"}
      />
      <path
        d="M23.3096 10.4789H22.9821"
        stroke={props.stroke? props.stroke : "#212121"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.69385 6.04588H11.3675H5.69385Z"
        fill={props.background? props.background : "white"}
      />
      <path
        d="M5.69385 6.04588H11.3675"
        stroke={props.fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WalletIconOnPaymentPage;
