import React from 'react'

const HandIcon = () => {
    return (
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path d="M0 30.1H30V0.0999998H0V30.1Z" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1791_432" transform="scale(0.015625)"/>
</pattern>
<image id="image0_1791_432" width="64" height="64" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
        )
}

export default HandIcon