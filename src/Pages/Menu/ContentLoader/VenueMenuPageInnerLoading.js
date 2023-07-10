import React from 'react';
import ContentLoader from 'react-content-loader';


const VenueMenuPageInnerLoading = (props) => (
  <ContentLoader
    speed={2}
    // width={375}
    // height={300}
    viewBox="0 0 339 816"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    {...props}
  >
    {/* menu */}
    <rect x="20" y="60" rx="10" ry="10" width="300" height="40" />
    <rect x="20" y="110" rx="10" ry="10" width="300" height="40" />
    {/* *************** */}
    <rect x="210" y="165" rx="10" ry="10" width="100" height="20" />

    <rect x="30" y="200" rx="12" ry="12" width="75" height="75" />
    <rect x="220" y="215" rx="10" ry="10" width="90" height="20" />
    <rect x="170" y="250" rx="6" ry="6" width="140" height="8" />

    <rect x="30" y="300" rx="8" ry="8" width="90" height="30" />
    <rect x="260" y="300" rx="8" ry="8" width="50" height="10" />
    <rect x="260" y="315" rx="8" ry="8" width="50" height="15" />

    <rect x="30" y="350" rx="8" ry="8" width="90" height="30" />
    <rect x="260" y="350" rx="8" ry="8" width="50" height="10" />
    <rect x="260" y="365" rx="8" ry="8" width="50" height="15" />
    {/* *************** */}

    <rect x="210" y="420" rx="10" ry="10" width="100" height="20" />

    <rect x="30" y="465" rx="12" ry="12" width="75" height="75" />
    <rect x="220" y="480" rx="10" ry="10" width="90" height="20" />
    <rect x="170" y="515" rx="6" ry="6" width="140" height="8" />

    <rect x="30" y="565" rx="8" ry="8" width="90" height="30" />
    <rect x="260" y="565" rx="8" ry="8" width="50" height="10" />
    <rect x="260" y="580" rx="8" ry="8" width="50" height="15" />

    <rect x="30" y="615" rx="8" ry="8" width="90" height="30" />
    <rect x="260" y="615" rx="8" ry="8" width="50" height="10" />
    <rect x="260" y="630" rx="8" ry="8" width="50" height="15" />
  </ContentLoader>
)

export default VenueMenuPageInnerLoading;