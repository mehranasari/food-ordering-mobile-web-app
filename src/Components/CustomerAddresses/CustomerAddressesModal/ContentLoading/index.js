import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => {
  return (
    <ContentLoader
      rtl
      speed={2}
      backgroundColor={props.theme.color_background_secondary}
      foregroundColor={props.theme.color_background_primary} 
          //  foregroundColor="#E8EAF4"
      // viewBox="0 0 1038 358"
      width={"calc(100% - 1.429rem)"}
      height={265}
    >
      <rect x="0" y="0" rx="15" ry="15" width="100%" height="72" />
      <rect x="0" y="88" rx="15" ry="15" width="100%" height="72" />
      <rect x="0" y="176" rx="15" ry="15" width="100%" height="72" />
    </ContentLoader>
  );
};
export default ContentLoading;
