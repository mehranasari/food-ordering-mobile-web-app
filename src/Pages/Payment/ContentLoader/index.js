import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => (
  <ContentLoader
    rtl
    speed={2}
    viewBox="0 0 339 720"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    {...props}
  >
    {/* header */}
    <rect x="30" y="10" rx="10" ry="10" width="40" height="40" />
    <rect x="100" y="10" rx="10" ry="10" width="140" height="40" />
    <rect x="270" y="10" rx="10" ry="10" width="40" height="40" />

    {/* Body */}
    <rect x="25" y="85" rx="3" ry="3" width="88" height="10" />
    <rect x="25" y="120" rx="3" ry="3" width="150" height="13" />
    <rect x="25" y="150" rx="10" ry="10" width="300" height="55" />


    <rect x="25" y="255" rx="3" ry="3" width="88" height="10" />
    <rect x="25" y="285" rx="10" ry="10" width="300" height="55" />


    <rect x="25" y="380" rx="3" ry="3" width="100" height="20" />
    <rect x="200" y="380" rx="3" ry="3" width="120" height="20" />

    <rect x="25" y="420" rx="3" ry="3" width="100" height="20" />
    <rect x="220" y="420" rx="3" ry="3" width="100" height="20" />

    <rect x="25" y="460" rx="3" ry="3" width="100" height="20" />
    <rect x="220" y="460" rx="3" ry="3" width="100" height="20" />

    <rect x="20" y="640" rx="2" ry="2" width="300" height="80" />
  </ContentLoader>
);

export default ContentLoading;
