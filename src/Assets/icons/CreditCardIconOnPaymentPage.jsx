import React from "react";

function CreditCardIconOnPaymentPage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="21"
      viewBox="0 0 28 21"
      fill="none"
    >
      <path
        d="M0 7H26.6"
        stroke={props?.stroke ? props.stroke : "#212121"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="0.75"
        y="0.75"
        width="26.5"
        height="19.5"
        rx="4.25"
        stroke={props?.stroke ? props.stroke : "#212121"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.60059 11.2H9.46644"
        stroke={props.fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.60059 16.0221H15.2652"
        stroke={props.fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CreditCardIconOnPaymentPage;
