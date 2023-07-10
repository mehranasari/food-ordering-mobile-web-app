import React from "react";
import ContentLoader from "react-content-loader";
const ContentLoading = (props) => (
      <ContentLoader
        rtl
        speed={2}
        // viewBox="0 0 339 800"
        backgroundColor={props.theme.color_background_secondary}
        foregroundColor={props.theme.color_background_primary}
        {...props}
        width="100%"
        height="100%"
      >
        {/* header */}
        <rect x="calc(50% - 25px)" y="0" rx="5" ry="5" width="50" height="50" />
        <rect x="calc(50% - 30px)" y="60" rx="5" ry="5" width="60" height="20" />
        <rect x="0" y="140" rx="5" ry="5" width="100%" height="70" />

        <rect x="0" y="250" rx="0" ry="0" width="100%" height="30" />
        <rect x="0" y="290" rx="0" ry="0" width="50%" height="30" />

        <rect x="0" y="330" rx="0" ry="0" width="100%" height="25" />
        <rect x="0" y="360" rx="0" ry="0" width="30%" height="25" />

        <rect x="0" y="450" rx="12" ry="12" width="100%" height="60" />
        <rect x="0" y="520" rx="12" ry="12" width="100%" height="60" />
      </ContentLoader>

);

export default ContentLoading;
