import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => (
  <ContentLoader
    rtl
    speed={2}
    viewBox="0 0 339 800"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    {...props}
  >
    {/* header */}
    <rect x="30" y="10" rx="10" ry="10" width="40" height="40" />

    {/* Body */}
    <rect x="25" y="170" rx="15" ry="15" width="70" height="70" />
    <rect x="145" y="225" rx="5" ry="5" width="40" height="6" />
    <rect x="230" y="205" rx="5" ry="5" width="85" height="35" />

    <rect x="20" y="260" rx="5" ry="5" width="75" height="30" />
    <rect x="120" y="260" rx="5" ry="5" width="75" height="30" />
    
    <rect x="20" y="300" rx="5" ry="5" width="250" height="30" />

    <rect x="20" y="350" rx="5" ry="5" width="250" height="20" />

    <rect x="20" y="380" rx="5" ry="5" width="300" height="55" />

    <rect x="20" y="450" rx="5" ry="5" width="300" height="55" />

    <rect x="20" y="530" rx="5" ry="5" width="75" height="20" />

    <rect x="20" y="565" rx="5" ry="5" width="300" height="10" />
    <rect x="20" y="590" rx="5" ry="5" width="300" height="10" />
    <rect x="20" y="615" rx="5" ry="5" width="300" height="10" />

    <rect x="20" y="650" rx="5" ry="5" width="110" height="20" />

    <rect x="20" y="680" rx="5" ry="5" width="300" height="45" />

  </ContentLoader>
);

export default ContentLoading;
