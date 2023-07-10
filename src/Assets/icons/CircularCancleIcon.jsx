import React from "react";

const CircularCancleIcon = ({color}) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.25 10.5C20.25 5.11522 15.8848 0.75 10.5 0.75C5.11522 0.75 0.75 5.11522 0.75 10.5C0.75 15.8848 5.11522 20.25 10.5 20.25C15.8848 20.25 20.25 15.8848 20.25 10.5Z"
        stroke={color? color: "#757575"}
        strokeWidth="1.5"
      />
      <path
        d="M14.0182 12.5656L11.9427 10.4913L14.0171 8.41692C14.4161 8.01908 14.4161 7.37158 14.0171 6.97375C13.6181 6.57242 12.9729 6.57358 12.5739 6.97258L10.4984 9.04692L8.42288 6.97025C8.02388 6.57125 7.37755 6.57358 6.97855 6.97025C6.58072 7.36925 6.58072 8.01675 6.97855 8.41458L9.05522 10.4913L6.98322 12.5621C6.58422 12.9611 6.58422 13.6086 6.98322 14.0052C7.18272 14.2059 7.44288 14.3051 7.70422 14.3051C7.96672 14.3051 8.22688 14.2059 8.42638 14.0064L10.4984 11.9344L12.5751 14.0099C12.7746 14.2094 13.0347 14.3086 13.2961 14.3086C13.5574 14.3086 13.8187 14.2083 14.0182 14.0099C14.4172 13.6109 14.4172 12.9646 14.0182 12.5656Z"
        fill={color? color: "#757575"}

      />
    </svg>
  );
};

export default CircularCancleIcon;
