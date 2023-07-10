import React from "react";

function CollectionServiceIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="24"
      viewBox="0 0 23 24"
    >
      <path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M6.659 23h9.693c3.56 0 6.291-1.267 5.515-6.369l-.903-6.914c-.478-2.545-2.125-3.52-3.57-3.52H5.574c-1.467 0-3.018 1.048-3.57 3.52L1.1 16.631c-.66 4.525 1.998 6.37 5.558 6.37z"
        clipRule="evenodd"
        fill={props.fill ? props.fill : ''}
      ></path>
      <path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M6.5 5.944C6.5 3.214 8.745 1 11.516 1v0a5.054 5.054 0 013.56 1.44 4.909 4.909 0 011.477 3.504v0M8.072 11.099h.054M14.842 11.099h.054"
        fill={props.backgroundColor ? props.backgroundColor : "#f9f9f9"}
      ></path>
    </svg>
  );
}

export default CollectionServiceIcon;
