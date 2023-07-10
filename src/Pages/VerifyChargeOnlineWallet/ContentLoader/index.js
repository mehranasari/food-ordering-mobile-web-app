import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => (
  <ContentLoader
    speed={2}
    rtl={true}
    viewBox="0 0 350 360"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    {...props}
  >
    {/* ***** */}
    <rect x="calc(50% - 25px)" y="40" rx="8" ry="8" width="50" height="50" />
    <rect x="calc(50% - 100px)" y="120" rx="0" ry="0" width="200" height="30" />
    <rect x="calc(50% - 40px)" y="170" rx="0" ry="0" width="80" height="20" />
    <rect x="calc(50% - 60px)" y="200" rx="0" ry="0" width="120" height="20" />
    {/* *************** */}
    <rect x="20" y="250" rx="0" ry="0" width="100" height="15" />
    <rect x="220" y="250" rx="0" ry="0" width="100" height="15" />
    <rect x="20" y="250" rx="0" ry="0" width="100" height="15" />
    <rect x="220" y="280" rx="0" ry="0" width="100" height="15" />
    <rect x="20" y="310" rx="0" ry="0" width="100" height="15" />
    <rect x="220" y="310" rx="0" ry="0" width="100" height="15" />
    <rect x="20" y="340" rx="0" ry="0" width="100" height="15" />
    <rect x="220" y="340" rx="0" ry="0" width="100" height="15" />
  </ContentLoader>
);
export default ContentLoading;
