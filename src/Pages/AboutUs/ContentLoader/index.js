import React from "react";
import ContentLoader from "react-content-loader";
import {VenueInfo,Body,AddressWrapper,VenuePhoneNumber} from "../styles.jsx"
const ContentLoading = (props) => (
  <Body>
    <VenueInfo>
      <ContentLoader
        rtl
        speed={2}
        // viewBox="0 0 339 800"
        backgroundColor={props.theme.color_background_secondary}
        foregroundColor={props.theme.color_background_primary}
        {...props}
        width="100%"
        // height="400"
      >
        {/* header */}
        <rect x="calc(50% - 25px)" y="0" rx="5" ry="5" width="50" height="50" />
        <rect x="calc(50% - 30px)" y="60" rx="5" ry="5" width="60" height="20" />
        <rect x="0" y="90" rx="0" ry="0" width="100%" height="16" />
        <rect x="0" y="116" rx="5" ry="5" width="50%" height="16" />
      </ContentLoader>
    </VenueInfo>
    <AddressWrapper>
      <div className="title">نشانی</div>
      <ContentLoader
        rtl
        speed={2}
        // viewBox="0 0 339 800"
        backgroundColor={props.theme.color_background_secondary}
        foregroundColor={props.theme.color_background_primary}
        {...props}
        width="100%"
        height="80"
      >
        {/* header */}
        <rect x="0" y="0" rx="5" ry="5" width="calc(100% - 100px)" height="20" />
        <rect x="0" y="30" rx="5" ry="5" width="20%" height="20" />
        <rect x="calc(100% - 80px)" y="0" rx="0" ry="0" width="80" height="30" />
      </ContentLoader>
    </AddressWrapper>
    <VenuePhoneNumber>
      <div className="title">شماره تماس</div>
      <ContentLoader
        rtl
        speed={2}
        // viewBox="0 0 339 800"
        backgroundColor={props.theme.color_background_secondary}
        foregroundColor={props.theme.color_background_primary}
        {...props}
        width="100%"
        // height="200"
      >
        <rect x="0" y="0" rx="5" ry="5" width="80%" height="20" />
      </ContentLoader>
    </VenuePhoneNumber>
  </Body>
);

export default ContentLoading;
