import React from "react";

function PersonIcon({stroke}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="18"
      fill="none"
      viewBox="0 0 15 18"
    >
      <ellipse
        cx="7.504"
        cy="4.924"
        stroke={stroke ? stroke : "#BDBDBD"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        rx="4.1"
        ry="3.924"
      ></ellipse>
      <path
        stroke={stroke ? stroke : "#BDBDBD"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 14.305a1.754 1.754 0 01.189-.797c.392-.752 1.5-1.15 2.419-1.33a15.036 15.036 0 012.01-.271 22.467 22.467 0 013.763 0 15.2 15.2 0 012.01.27c.92.181 2.027.542 2.42 1.331a1.792 1.792 0 010 1.601c-.393.79-1.5 1.15-2.42 1.323a14.05 14.05 0 01-2.01.278 23.147 23.147 0 01-3.063.045c-.236 0-.464 0-.7-.045a13.786 13.786 0 01-2.002-.278c-.927-.173-2.027-.534-2.427-1.323A1.805 1.805 0 011 14.305z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default PersonIcon;
