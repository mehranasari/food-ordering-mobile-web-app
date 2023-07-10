import React from "react";

const FillLocationPinIcon = ({ color }) => {
  return (
    <svg
      width="40"
      height="68"
      viewBox="0 0 40 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="white" />
      <circle
        opacity="0.1"
        cx="20.0001"
        cy="57.3333"
        r="10.2222"
        fill= "#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0001 37.3334C29.573 37.3334 37.3334 29.573 37.3334 20C37.3334 10.4271 29.573 2.66669 20.0001 2.66669C10.4271 2.66669 2.66675 10.4271 2.66675 20C2.66675 29.573 10.4271 37.3334 20.0001 37.3334ZM20.0001 26.2222C23.4365 26.2222 26.2223 23.4365 26.2223 20C26.2223 16.5636 23.4365 13.7778 20.0001 13.7778C16.5637 13.7778 13.7779 16.5636 13.7779 20C13.7779 23.4365 16.5637 26.2222 20.0001 26.2222Z"
        fill={color ? color : "#212121"}
      />
      <rect
        x="18.6667"
        y="40"
        width="2.66667"
        height="18.2222"
        fill="#5F616D"
      />
    </svg>
  );
};

export default FillLocationPinIcon;
