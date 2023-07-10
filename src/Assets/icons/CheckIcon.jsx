import React from 'react'

const CheckIcon = (props) => {
    return (
        <svg width={props.width? props.whidth : "11"} height={props.height? props.height : "8"} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.37195 3.88477C1.23393 3.74207 1.04064 3.65548 0.834038 3.6438C0.627436 3.63213 0.424193 3.69631 0.268425 3.82241C0.112658 3.94851 0.0169373 4.12636 0.00203991 4.31736C-0.0128574 4.50835 0.0542717 4.69707 0.188856 4.84255L2.94023 7.75153C3.01236 7.82783 3.10094 7.88934 3.20028 7.9321C3.29962 7.97487 3.40753 7.99795 3.51708 7.99987C3.62663 8.00179 3.7354 7.9825 3.83642 7.94324C3.93744 7.90398 4.02847 7.84561 4.10367 7.77189L10.7856 1.22669C10.9287 1.08638 11.0057 0.899205 10.9997 0.706357C10.9936 0.513509 10.905 0.33078 10.7533 0.19837C10.6017 0.06596 10.3993 -0.00528581 10.1909 0.000305961C9.98243 0.00589774 9.78492 0.0878691 9.64179 0.228187L3.55339 6.19159L1.37195 3.88477Z" fill={props.fill} />
        </svg>
    )
}

export default CheckIcon