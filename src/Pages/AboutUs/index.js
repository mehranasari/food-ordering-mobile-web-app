import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import methods
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import { LinkToMapHandler } from "../../Utils/method/LinkToMapHandler";
//import components
import PageLayout from "../../Shared/PageLayout";
import Header from "../../Shared/Header";
import ContentLoading from "./ContentLoader"
import { Row } from "../../Kit/Row";
//import styles
import {
  AboutUsWrapper,
  Body,
  VenueInfo,
  AddressWrapper,
  VenueName,
  VenueDescription,
  VenueAddress,
  NavigationToMapButton,
  VenueAddressContainer,
  VenuePhoneNumber,
} from "./styles.jsx";
//icons
import AboutUsPageIcon from "../../Assets/icons/AboutUsPageIcon.jsx";
import DefaultLogo from "../../Assets/icons/DefaultLogo.jsx";
import LocationIcon from "../../Assets/icons/LocationIcon.jsx";
import CallingStrokeIcon from "../../Assets/icons/CallingStrokeIcon.jsx";

const AboutUs = ({
  auth: { originUrl },
  theme,
  venue: { venue },
}) => {
  const addressRef = useRef();

  useEffect(() => {
    LinkToMapHandler(venue?.location);
  }, [venue]);

  return (
    <PageLayout>
      <AboutUsWrapper>
        <Header
          position={"fixed"}
          previousPage={originUrl}
          fill={theme.color_text_primary}
          // menu
          venueLogo={false}
          pageTitle={"درباره ما "}
          pageIcon={
            <AboutUsPageIcon
              fill={theme.primary}
              stroke={theme.textColorOfPrimaryButtons}
            />
          }
          hasBorder
          backgroundColor={theme.color_background_primary}
        />
       {(venue && venue?.logo?.logoUrlLocation)? <Body>
          <VenueInfo>
            {venue?.logo?.logoUrlLocation ? (
              <img
                className="venueLogo"
                src={venue?.logo?.logoUrlLocation}
              />
            ) : (
              <div className="venueLogo default-logo" hasLogo={false}>
                <DefaultLogo stroke={theme.color_icon_primary}/>
              </div>
            )}
            <VenueName>{venue?.name}</VenueName>
            <VenueDescription>
              {venue?.description?.split("\n").map((i, key) => (
                <div className="descriptionText" key={"desc" + key}>
                  {i}
                </div>
              ))}
            </VenueDescription>
          </VenueInfo>
          <AddressWrapper>
            <div className="title">نشانی</div>
            <VenueAddressContainer>
              <VenueAddress>
                <div className="locationIcon">
                  <LocationIcon stroke={theme.color_icon_primary} />
                </div>
                <div
                  ref={addressRef}
                  className={`${addressRef?.current?.clientHeight > 60
                      ? "venueAddressText fade"
                      : "venueAddressText"
                    }`}
                >
                  {venue?.address}
                </div>
              </VenueAddress>
              {venue?.location?.length > 0 && (
                <NavigationToMapButton>
                  <a href={LinkToMapHandler(venue?.location)} target="_blank">
                    نمایش نقشه
                  </a>
                </NavigationToMapButton>
              )}
            </VenueAddressContainer>
          </AddressWrapper>
          <VenuePhoneNumber>
            <div className="title">شماره تماس</div>
            <Row>
              <CallingStrokeIcon stroke={theme.color_icon_primary}/>
              <div className="phoneNumber">
                {ConvertToPersianDigit(venue?.phoneNumber)}
              </div>
            </Row>
          </VenuePhoneNumber>
        </Body> :<ContentLoading theme={theme}/>}
      </AboutUsWrapper>
    </PageLayout>
  );
};
AboutUs.propTypes = {
  auth: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  venue: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  theme: state.theme.theme,
  venue: state.venue,
});

export default connect(mapStateToProps, {  })(AboutUs);
