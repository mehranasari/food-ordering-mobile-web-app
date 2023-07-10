import React from "react";

function ProfileIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      fill="none"
      viewBox="0 0 14 18"
    >
      <path
        fill="#ffffff"
        d="M7 11.857c-3.775 0-7 .612-7 3.06C0 17.367 3.205 18 7 18c3.775 0 7-.611 7-3.06s-3.204-3.083-7-3.083"
      ></path>
      <path
        fill={props.fill}
        d="M7 9.526c2.572 0 4.632-2.12 4.632-4.763S9.572 0 7 0C4.43 0 2.368 2.12 2.368 4.763S4.429 9.526 7 9.526"
      ></path>
    </svg>
  );
}

export default ProfileIcon;
