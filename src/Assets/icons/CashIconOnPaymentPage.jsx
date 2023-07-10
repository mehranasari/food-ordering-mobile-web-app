import React from "react";

const CashIconOnPaymentPage = (props) => {
  return (
    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="0.75"
        width="26.5"
        height="16.42"
        rx="3.25"
        stroke={props.stroke? props.stroke : "#212121"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="14.0004"
        cy="8.95995"
        r="3.64"
        stroke={props.fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.5996 6.11996C23.8161 6.11996 21.5596 3.86347 21.5596 1.07996"
        stroke={props.stroke? props.stroke : "#212121"}
        strokeWidth="1.5"
      />
      <path
        d="M26.5996 11.8001C23.8161 11.8001 21.5596 14.0566 21.5596 16.8401"
        stroke={props.stroke? props.stroke : "#212121"}
        strokeWidth="1.5"
      />
      <path
        d="M1.12016 6.11996C3.90367 6.11996 6.16016 3.86347 6.16016 1.07996"
        stroke={props.stroke? props.stroke : "#212121"}
        strokeWidth="1.5"
      />
      <path
        d="M1.12016 11.8001C3.90367 11.8001 6.16016 14.0566 6.16016 16.8401"
        stroke={props.stroke? props.stroke : "#212121"}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default CashIconOnPaymentPage;
