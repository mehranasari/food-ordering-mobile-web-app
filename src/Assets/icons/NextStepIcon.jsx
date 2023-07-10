import React from "react";

function NextStepIcon({stroke,width,height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width? width : "9"}
      height={height? height : "16"}
      fill="none"
      viewBox="0 0 9 16"
    >
      <path
        fill="#616161"
        stroke={stroke}
        strokeMiterlimit="10"
        d="M1.138 1.141a.516.516 0 000 .702l5.758 6.152-5.758 6.18a.516.516 0 000 .702c.158.168.473.168.657-.028L7.87 8.36A.537.537 0 008 8.023a.537.537 0 00-.131-.337L1.795 1.197c-.184-.253-.5-.253-.657-.056z"
      ></path>
    </svg>
  );
}

export default NextStepIcon;
