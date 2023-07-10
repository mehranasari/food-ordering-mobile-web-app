import React from "react";

function MenuSizeHandlerIcon({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="5"
      fill="none"
      viewBox="0 0 42 5"
    >
      <rect width="42" height="5" fill={color? color : "#E8EAF4"} rx="2.5"></rect>
    </svg>
  );
}

export default MenuSizeHandlerIcon;
