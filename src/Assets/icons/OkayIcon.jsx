import React from "react";

function OkayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="url(#pattern0)" d="M0 0H32V32H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00625)" xlinkHref="#image0"></use>
        </pattern>
        <image
          id="image0"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default OkayIcon;