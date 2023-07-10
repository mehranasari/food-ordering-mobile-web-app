import React from 'react';
import ContentLoader from 'react-content-loader';

const VenueMenuPageLoading = (props) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 339 816"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    {...props}
  >
    {/* header */}
    <rect x="30" y="10" rx="10" ry="10" width="40" height="40" />
    <rect x="100" y="10" rx="10" ry="10" width="140" height="40" />
    <rect x="270" y="10" rx="10" ry="10" width="40" height="40" />

    {/* Body */}
    <rect x="0" y="60" rx="0" ry="0" width="350" height="816" />

  </ContentLoader>
)

export default VenueMenuPageLoading;
