import React from 'react'
import ContentLoader from "react-content-loader";

const ExternalLinksContentLoading = (props) => {
  return (
    <ContentLoader
    rtl
    speed={2}
    // viewBox="0 0 339 800"
    backgroundColor={props.theme.color_background_secondary}
    foregroundColor={props.theme.color_background_primary}
    width="100%"
    height="250"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="50" />
    <rect x="0" y="60" rx="0" ry="0" width="100%" height="50" />
    <rect x="0" y="120" rx="0" ry="0" width="100%" height="50" />

    <rect x="20" y="190" rx="5" ry="5" width="50" height="50" />
    <rect x="90" y="190" rx="5" ry="5" width="50" height="50" />
    <rect x="160" y="190" rx="5" ry="5" width="50" height="50" />
    <rect x="230" y="190" rx="5" ry="5" width="50" height="50" />

    </ContentLoader>  )
}

export default ExternalLinksContentLoading