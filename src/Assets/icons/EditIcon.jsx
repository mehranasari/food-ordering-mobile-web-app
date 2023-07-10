import React from "react";

function EditIcon({stroke,width,strokeWidth}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width? width : "22"}
      height={width? width : "22"}
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth? strokeWidth : "1.5"}
        d="M10.282 1.041h-3.97C3.047 1.041 1 3.348 1 6.615v8.812C1 18.693 3.038 21 6.312 21h9.369c3.276 0 5.313-2.307 5.313-5.573v-4.27"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth? strokeWidth : "1.5"}
        d="M7.454 9.66l7.934-7.92a2.536 2.536 0 013.58 0l1.292 1.29a2.523 2.523 0 010 3.572l-7.973 7.958a2.307 2.307 0 01-1.63.675H6.68l.1-4.007c.014-.59.255-1.15.674-1.568z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth? strokeWidth : "1.5"}
        d="M14.182 2.963l4.848 4.84"
      ></path>
    </svg>
  );
}

export default EditIcon;
