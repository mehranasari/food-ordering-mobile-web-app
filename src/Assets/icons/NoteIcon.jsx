import React from 'react'
const NoteIcon = (props) => {
  if (!props.fill) {
    return (
      <svg width="17" height="21" viewBox="0 0 17 21" fill={props.fill ? props.fill : "none"} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7701 15.1195H5.27148" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.7701 11.3509H5.27148" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.8015 7.75083H8.20117" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M11.9433 2.80029C11.9433 2.80029 5.0333 2.80389 5.0225 2.80389C2.53825 2.81919 1 4.45376 1 6.94701V15.2242C1 17.7301 2.54996 19.3709 5.05581 19.3709C5.05581 19.3709 11.9649 19.3682 11.9766 19.3682C14.4608 19.3529 16 17.7175 16 15.2242V6.94701C16 4.44116 14.4491 2.80029 11.9433 2.80029Z" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9843 1V3.962" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.01751 1V3.962" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    )
  }
  else {
    return (
      <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.4024 1.90698C12.4024 1.90698 4.57108 1.91106 4.55884 1.91106C1.74335 1.9284 0 3.78091 0 6.60659V15.9874C0 18.8274 1.75662 20.6871 4.59658 20.6871C4.59658 20.6871 12.4269 20.684 12.4401 20.684C15.2556 20.6667 17 18.8131 17 15.9874V6.60659C17 3.76663 15.2424 1.90698 12.4024 1.90698Z" fill={props.fill} />
        <path d="M12.206 16.3577H4.84082" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.206 12.5042H4.84082" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.2415 8.65068H8.16113" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.4491 1V4.35693" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.55259 1V4.35693" stroke={props?.stroke ? props?.stroke : "#212121"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
}

export default NoteIcon