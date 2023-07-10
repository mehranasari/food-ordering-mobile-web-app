import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => (
  <ContentLoader
    rtl
    speed={2}
    viewBox="0 0 339 800"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    width="100%"
    {...props}
  >


    <rect x="20" y="80" rx="5" ry="5" width="80" height="30" />
    <rect x="20" y="120" rx="5" ry="5" width="300" height="20" />
    <rect x="20" y="150" rx="5" ry="5" width="280" height="20" />
    <rect x="20" y="180" rx="5" ry="5" width="300" height="20" />
    <rect x="20" y="210" rx="5" ry="5" width="120" height="20" />

    <rect x="20" y="260" rx="5" ry="5" width="120" height="30" />
    <rect x="20" y="300" rx="5" ry="5" width="300" height="20" />
    <rect x="20" y="330" rx="5" ry="5" width="280" height="20" />
    <rect x="20" y="360" rx="5" ry="5" width="300" height="20" />
    <rect x="20" y="390" rx="5" ry="5" width="120" height="20" />

    <rect x="20" y="440" rx="5" ry="5" width="100" height="30" />
    <rect x="20" y="480" rx="5" ry="5" width="300" height="20" />
    <rect x="20" y="510" rx="5" ry="5" width="280" height="20" />
    <rect x="20" y="540" rx="5" ry="5" width="300" height="20" />
    <rect x="20" y="570" rx="5" ry="5" width="120" height="20" />

    

  </ContentLoader>
);

export default ContentLoading;
