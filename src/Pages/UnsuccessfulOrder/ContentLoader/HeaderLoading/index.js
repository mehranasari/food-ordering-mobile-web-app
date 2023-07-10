import React from "react";
import ContentLoader from "react-content-loader";

const HeaderLoading = (props) => (
  <ContentLoader
    rtl
    speed={2}
    viewBox="0 0 339 60"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    {...props}
  >
    <rect x="30" y="10" rx="10" ry="10" width="40" height="40" />
    <rect x="100" y="10" rx="10" ry="10" width="140" height="40" />
    <rect x="270" y="10" rx="10" ry="10" width="40" height="40" />
  </ContentLoader>
);

export default HeaderLoading;
