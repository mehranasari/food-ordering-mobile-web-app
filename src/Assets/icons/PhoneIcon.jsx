import React from "react";

const PhoneIcon = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4168 3.49C11.9408 3.40206 11.5036 3.70586 
             11.4129 4.17054C11.3223 4.63522 11.627 5.08891
              12.0901 5.17984C13.4844 5.45166 14.561 6.53092 
              14.8339 7.92996V7.93096C14.9115 8.33368 15.2661
               8.62648 15.6744 8.62648C15.7292 8.62648 15.7839
                8.62148 15.8397 8.61149C16.3028 8.51856 16.6076
                 8.06587 16.5169 7.60018C16.1096 5.51062 14.5012
                  3.89672 12.4168 3.49Z"
        fill={props.fill ? props?.fill : "#FFDD02"}
      />
      <path
        d="M12.3539 0.00792977C12.1308 -0.0240483 11.9067
              0.0419065 11.7285 0.183809C11.5452 0.32771 11.4307
               0.535568 11.4058 0.768408C11.353 1.23909 11.6926 
               1.66479 12.1627 1.71776C15.4043 2.07951 17.924 4.60478
                18.2885 7.85655C18.3373 8.29225 18.7028 8.62102 19.139
                 8.62102C19.1718 8.62102 19.2037 8.61902 19.2366
                  8.61503C19.4646 8.59004 19.6678 8.47712 19.8112
                   8.29724C19.9536 8.11737 20.0184 7.89352 19.9925
                    7.66468C19.5383 3.60746 16.3983 0.458621 12.3539 
                    0.00792977Z"
        fill={props.fill ? props?.fill : "#FFDD02"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.03175 10.9724C13.0208 14.9604 13.9258 10.3467 16.4657
              12.8848C18.9143 15.3328 20.3216 15.8232 17.2193 18.9247C16.8307 
              19.237 14.3616 22.9943 5.68461 14.3197C-2.99348 5.644 0.761586 
              3.17245 1.07397 2.78395C4.18387 -0.326156 4.66587 1.08938
               7.1145 3.53733C9.65437 6.0765 5.04266 6.98442 9.03175 10.9724Z"
        fill={props.stroke ? props.stroke : "#212121"}
      />
    </svg>
  );
};

export default PhoneIcon;
