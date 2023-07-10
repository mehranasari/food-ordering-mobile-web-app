import React from "react";

const BuzzAppIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_3613_66)">
        <rect x="3" y="3" width="20" height="20" rx="4" fill="#FFDD02" />
      </g>
      <path
        d="M19.333 9.83708L17.3117 9.83708C17.3117 9.83708 15.6152 9.82673 15.1941 9.84121V11.7138L17.5748 11.72C17.5748 11.72 17.5652 11.9307 17.4771 12.2143C16.9129 14.0289 14.9403 15.3596 13.0449 15.3624C11.1186 15.3658 9.62928 14.0367 9.04932 12.1959C8.89865 11.7165 8.80096 10.3242 8.80096 9.83708H7.00031C6.99892 9.93613 7.01909 10.9537 7.02322 11.0627C7.05695 11.9516 7.27672 12.8234 7.66827 13.6216C8.05982 14.4198 8.61439 15.1266 9.29602 15.6961C9.97764 16.2655 10.7711 16.685 11.6248 16.9271C12.4786 17.1693 13.0625 17.2288 13.9406 17.1018C17.0056 16.6749 19.3757 13.9236 19.333 10.8351V9.83708Z"
        fill="#212121"
      />
      <defs>
        <filter
          id="filter0_di_3613_66"
          x="0"
          y="0"
          width="28"
          height="28"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3613_66"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3613_66"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_3613_66"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BuzzAppIcon;
