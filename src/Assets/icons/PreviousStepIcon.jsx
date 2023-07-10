import React from "react";

function PreviousStepIcon({ width, fill, stroke,height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "10"}
      height={height? height : "20"}
      fill={fill}
      viewBox="0 0 10 20"
    >
      <path
        fill={fill}
        stroke={fill}
        strokeMiterlimit="10"
        d="M9.208 18.585a.645.645 0 000-.879l-7.207-7.7 7.207-7.735a.645.645 0 000-.879c-.197-.21-.592-.21-.823.035L.783 9.55a.672.672 0 00-.164.422c0 .14.066.316.164.422l7.602 8.122c.23.316.626.316.823.07z"
      ></path>
    </svg>
  );
}

export default PreviousStepIcon;
