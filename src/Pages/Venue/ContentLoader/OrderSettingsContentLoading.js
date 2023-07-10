import React from 'react'
import ContentLoader from "react-content-loader";

const OrderSettingsContentLoading = (props) => {
    return (
        <ContentLoader
        rtl
        speed={2}
        // viewBox="0 0 339 800"
        backgroundColor={props.theme.color_background_secondary}
        foregroundColor={props.theme.color_background_primary}
        width="100%"
        height="200"
        {...props}
      >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="60" />
        <rect x="0" y="70" rx="0" ry="0" width="100%" height="60" />
        <rect x="0" y="140" rx="0" ry="0" width="100%" height="60" />
    
        </ContentLoader>  )
    }

export default OrderSettingsContentLoading