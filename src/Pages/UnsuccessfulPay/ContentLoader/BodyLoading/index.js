import React from "react";
import ContentLoader from "react-content-loader";

const BodyLoading = (props) => (
  <ContentLoader
    rtl
    speed={2}
    viewBox="0 0 339 720"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    {...props}
  >
    <rect x="15" y="20" rx="4" ry="4" width="310" height="35" />
    <rect x="15" y="70" rx="3" ry="3" width="125" height="36" />
    <rect x="15" y="130" rx="3" ry="3" width="310" height="60" />
    <rect x="15" y="200" rx="3" ry="3" width="310" height="56" />
    <rect x="15" y="270" rx="3" ry="3" width="310" height="140" />
    <rect x="15" y="425" rx="3" ry="3" width="310" height="2" />
    <rect x="15" y="435" rx="3" ry="3" width="310" height="66" />
    <rect x="15" y="510" rx="3" ry="3" width="310" height="56" />
    <rect x="15" y="580" rx="3" ry="3" width="310" height="56" />
  </ContentLoader>
);

export default BodyLoading;
