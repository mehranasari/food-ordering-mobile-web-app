import React from "react";

function BlogIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="none"
      viewBox="0 0 16 17"
    >
      <path
        fill="#fff"
        d="M11.212 0H4.09C1.503 0 0 1.513 0 4.106v8.78C0 15.521 1.504 17 4.088 17h7.124c2.626 0 4.088-1.479 4.088-4.114v-8.78C15.3 1.512 13.838 0 11.212 0z"
      ></path>
      <rect width="9" height="5" x="3" y="8" fill={props.fill} rx="1"></rect>
      <path
        fill="#2A2A2F"
        d="M3.852 4.008V4H7.12c.471 0 .854.298.854.662 0 .375-.383.673-.854.673H3.852c-.47 0-.852-.298-.852-.663 0-.366.381-.663.852-.663z"
      ></path>
    </svg>
  );
}

export default BlogIcon;
