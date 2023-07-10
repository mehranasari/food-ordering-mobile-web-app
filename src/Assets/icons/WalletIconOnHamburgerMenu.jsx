import React from "react";

function WalletIconOnHamburgerMenu(props) {
  return (
    <svg
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6094 4.3001H15.9972V4.27029C15.9972 1.5829 14.368 0 11.611 0H4.38684C1.62916 0 0 1.5829 0 4.27029V10.1235C0 12.8109 1.62916 14.4 4.38684 14.4H11.6139C14.3708 14.4 16 12.8109 16 10.1235V9.87872H12.6094C11.0293 9.87664 9.75076 8.62586 9.75289 7.08525C9.75573 5.54811 11.0329 4.30287 12.6094 4.3001Z"
        fill="white"
      />
      <path
        d="M8.30368 4.29404H3.79168C3.4539 4.29265 3.18083 4.02433 3.18226 3.69499C3.18368 3.36704 3.45603 3.10149 3.79168 3.1001H8.30652C8.6443 3.09872 8.92021 3.36496 8.92163 3.6943C8.92306 4.02433 8.64999 4.29265 8.31221 4.29404H8.30652H8.30368Z"
        fill={props.fill ? props.fill : "#FFDD02"}
      />
      <path
        d="M11.0374 7.39667C11.2465 8.34785 12.0805 9.01707 13.0326 8.99967H16.2825C16.6787 8.99967 17 8.67158 17 8.26605V5.73449C16.9991 5.32982 16.6787 5.00087 16.2825 5H12.9561C11.8731 5.00348 10.9983 5.90245 11 7.01028C11 7.13994 11.0128 7.26961 11.0374 7.39667Z"
        fill={props.fill ? props.fill : "#FFDD02"}
      />
      <ellipse cx="12.8" cy="7.11995" rx="0.8" ry="0.8" fill="#212121" />
    </svg>
  );
}

export default WalletIconOnHamburgerMenu;
