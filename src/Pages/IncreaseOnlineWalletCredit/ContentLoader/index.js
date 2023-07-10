import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => (
  <ContentLoader
    speed={2}
    // width={"100%"}
    // height={"100%"}
    rtl={true}
    viewBox="0 0 500 700"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    {...props}
  >
    {/* menu */}
    <rect x="20" y="20" rx="0" ry="0" width="120" height="60" />
    <rect x="160" y="20" rx="0" ry="0" width="120" height="60" />
    <rect x="300" y="20" rx="0" ry="0" width="120" height="60" />
    {/* *************** */}
    <rect x="20" y="100" rx="0" ry="0" width="200" height="20" />
    <rect x="20" y="130" rx="0" ry="0" width="calc(100% - 20px)" height="60" />

    <rect x="20" y="210" rx="8" ry="8" width="75" height="50" />
    <rect x="120" y="210" rx="8" ry="8" width="75" height="50" />
    <rect x="220" y="210" rx="8" ry="8" width="75" height="50" />

    <rect x="20" y="290" rx="8" ry="8" width="calc(100% - 20px)" height="100" />

    {/* *************** */}

    <rect x="20" y="420" rx="0" ry="0" width="120" height="20" />

    <rect x="20" y="460" rx="8" ry="8" width="75" height="55" />
    <rect x="120" y="460" rx="8" ry="8" width="75" height="55" />
    <rect x="220" y="460" rx="8" ry="8" width="75" height="55" />
    {/* *************** */}

    <rect
      x="20"
      y="calc(100% - 80px)"
      rx="8"
      ry="8"
      width="calc(100% - 20px)"
      height="60"
    />
  </ContentLoader>
);
export default ContentLoading;
