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
    <rect x="120" y="170" rx="15" ry="15" width="70" height="70" />
    <rect x="230" y="205" rx="5" ry="5" width="85" height="35" />

    <rect x="75" y="260" rx="5" ry="5" width="170" height="25" />
    <rect x="20" y="295" rx="5" ry="5" width="300" height="25" />

    <rect x="20" y="335" rx="5" ry="5" width="300" height="10" />
    <rect x="20" y="355" rx="5" ry="5" width="300" height="10" />
    <rect x="20" y="375" rx="5" ry="5" width="300" height="10" />

    <rect x="20" y="410" rx="5" ry="5" width="140" height="25" />

    <rect x="20" y="450" rx="10" ry="10" width="300" height="70" />
    <rect x="20" y="530" rx="10" ry="10" width="300" height="70" />
    <rect x="20" y="610" rx="10" ry="10" width="300" height="70" />
    <rect x="20" y="690" rx="10" ry="10" width="300" height="70" />

  </ContentLoader>
);

export default ContentLoading;
