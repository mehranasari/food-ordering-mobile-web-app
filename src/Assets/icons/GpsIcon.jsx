import React from "react";

const GpsIcon = ({fill}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.9998 24.744C8.07422 24.744 3.25562 19.9254 3.25562 13.9998C3.25562 8.07422 8.07422 3.25562 13.9998 3.25562C19.9254 3.25562 24.744 8.07422 24.744 13.9998C24.744 19.9254 19.9254 24.744 13.9998 24.744ZM13.9998 5.2091C9.15515 5.2091 5.2091 9.15515 5.2091 13.9998C5.2091 18.8445 9.15515 22.7905 13.9998 22.7905C18.8445 22.7905 22.7905 18.8445 22.7905 13.9998C22.7905 9.15515 18.8445 5.2091 13.9998 5.2091Z"
        fill={fill? fill : "#616161"}
      />
      <circle cx="13.9999" cy="13.9999" r="4.88372" fill={fill? fill : "#616161"} />
      <path
        d="M13.9999 4.55814C13.466 4.55814 13.0232 4.11535 13.0232 3.58139V0.976744C13.0232 0.442791 13.466 0 13.9999 0C14.5339 0 14.9767 0.442791 14.9767 0.976744V3.58139C14.9767 4.11535 14.5339 4.55814 13.9999 4.55814Z"
        fill={fill? fill : "#616161"}
      />
      <path
        d="M3.58139 14.9767H0.976744C0.442791 14.9767 0 14.5339 0 13.9999C0 13.466 0.442791 13.0232 0.976744 13.0232H3.58139C4.11535 13.0232 4.55814 13.466 4.55814 13.9999C4.55814 14.5339 4.11535 14.9767 3.58139 14.9767Z"
        fill={fill? fill : "#616161"}
      />
      <path
        d="M13.9999 28.0002C13.466 28.0002 13.0232 27.5574 13.0232 27.0234V24.4188C13.0232 23.8848 13.466 23.442 13.9999 23.442C14.5339 23.442 14.9767 23.8848 14.9767 24.4188V27.0234C14.9767 27.5574 14.5339 28.0002 13.9999 28.0002Z"
        fill={fill? fill : "#616161"}
      />
      <path
        d="M27.0234 14.9767H24.4188C23.8848 14.9767 23.442 14.5339 23.442 13.9999C23.442 13.466 23.8848 13.0232 24.4188 13.0232H27.0234C27.5574 13.0232 28.0002 13.466 28.0002 13.9999C28.0002 14.5339 27.5574 14.9767 27.0234 14.9767Z"
        fill={fill? fill : "#616161"}
      />
    </svg>
  );
};

export default GpsIcon;
