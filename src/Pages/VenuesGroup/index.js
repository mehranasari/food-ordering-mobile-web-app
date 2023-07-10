/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ContentLoader from "./ContentLoader/index";

//import methods

//import components
import PageLayout from "../../Shared/PageLayout";
import Header from "../../Shared/Header";

//import pages
import NotFound from "../../Pages/NotFound";

//import actions
import { getVenuesGroup } from "../../Redux/action/venuesGroup";
import { setOriginUrl } from "../../Redux/action/auth";

//import styles
import {
  VenuesGroupPageWrapper,
  VenuesGroupPageContainer,
  VenuesGroupBanner,
  TransparnetShadow,
  ShaddowLayer,
  BodyWrapper,
  MenuBodyHeader,
  VenuesGroupGroupContainer,
  VenuesGroupGroupInfoContainer,
  SelectVenueText,
  VenuesCardContainer,
  VenueCard,
  VenueCardInfoContainer,
  VenueCardImg,
  VenueCardNameAndStatus,
  IsOpen,
  Share,
} from "./styles.jsx";

//import icons
import ShareIcon from "../../Assets/icons/ShareIcon.jsx";
import IsOpenIcon from "../../Assets/icons/IsOpenIcon.jsx";
import IsCloseIcon from "../../Assets/icons/IsCloseIcon.jsx";
import LocationIcon from "../../Assets/icons/LocationIcon.jsx";
import PreviousStepIcon from "../../Assets/icons/PreviousStepIcon.jsx";
import { theme } from "../../Shared/Theme";

const VenuesGroup = ({
  getVenuesGroup,
  venuesGroup: { venuesGroup },
  match,
  theme,
}) => {
  const originUrl = useLocation();

  useEffect(() => {
    (async () => {
      await getVenuesGroup(match?.params?.url);
    })();
    setOriginUrl(originUrl.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getVenuesGroup, originUrl.pathname]);

  const [toggleScroll, setToggleScroll] = useState(false);
  let venuesGroupDetails = useRef(null);

  const sharePopUp = async (shareData) => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PageLayout>
      <VenuesGroupPageWrapper>
        {venuesGroup ? (
          <VenuesGroupPageContainer>
            <VenuesGroupBanner bottom={toggleScroll}>
              <img
                className="venuesGroupBannerImage"
                src={venuesGroup?.bannerUrlLocation}
              />
              <TransparnetShadow>
                <ShaddowLayer className={toggleScroll && "shaddowBlur"} />
                <Header
                  fill={theme.color_text_primary}
                  menu
                  venueLogo={false}
                  iconBackgroundColor={theme.color_background_primary}
                />
              </TransparnetShadow>
            </VenuesGroupBanner>

            <BodyWrapper
              bottom={toggleScroll}
              onScroll={() => {
                if (venuesGroupDetails.scrollTop === 0 || !toggleScroll) {
                  setToggleScroll(!toggleScroll);
                }
              }}
            >
              <MenuBodyHeader>
                <img
                  className="venuesGroupLogo"
                  src={venuesGroup?.logoUrlLocation}
                />
                <Share
                  onClick={() =>
                    sharePopUp({
                      title: venuesGroup?.name,
                      text: "کابین را دنبال کنید",
                      // url: `www.${venuesGroupExternalLinks.externalLinks?.primaryLinks?.websiteUrl}`
                    })
                  }
                >
                  <ShareIcon />
                  <div className="shareText">اشتراک</div>
                </Share>
              </MenuBodyHeader>
              <VenuesGroupGroupContainer
                ref={(e) => {
                  venuesGroupDetails = e;
                }}
                venuesGroup={venuesGroup?.description}
              >
                <VenuesGroupGroupInfoContainer>
                  <div className="venuesGroupName">{venuesGroup?.name}</div>
                  <div className="venuesGroupAddress">
                    <LocationIcon />
                    <div className="venueAddressText">
                      {venuesGroup?.address}
                    </div>
                  </div>
                  <div className="venuesGroupDesc">
                    {venuesGroup?.description}
                  </div>
                </VenuesGroupGroupInfoContainer>
                <SelectVenueText>فروشگاه را انتخاب کنید :</SelectVenueText>
                <VenuesCardContainer>
                  {venuesGroup?.venues?.map((venue) => {
                    return (
                      <VenueCard
                        href={`${process.env.REACT_APP_SSL_PROTOCOL}://${venue?.dedicatedDomain ? venue?.dedicatedDomain :  venue?.url+"."+process.env.REACT_APP_DOMAIN_URL}`}
                        key={venue?._id}
                      >
                        <VenueCardInfoContainer>
                          <VenueCardImg src={venue?.logoUrlLocation} />
                          <VenueCardNameAndStatus>
                            <div className="venuesNameText">{venue?.name}</div>
                            <IsOpen>
                              {venue?.isOpen === true ? (
                                <>
                                  <IsOpenIcon />
                                  <div className="isOpenText">باز است</div>
                                </>
                              ) : (
                                <>
                                  <IsCloseIcon />
                                  <div className="isCloseText">بسته است</div>
                                </>
                              )}
                            </IsOpen>
                          </VenueCardNameAndStatus>
                        </VenueCardInfoContainer>
                        <PreviousStepIcon />
                      </VenueCard>
                    );
                  })}
                </VenuesCardContainer>
              </VenuesGroupGroupContainer>
            </BodyWrapper>
          </VenuesGroupPageContainer>
        ) : (
          <div>loading</div>
        )}
      </VenuesGroupPageWrapper>
    </PageLayout>
  );
};

VenuesGroup.propTypes = {
  getVenuesGroup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  venuesGroup: state.venuesGroup,
  theme:state.theme.theme,
});

export default connect(mapStateToProps, {
  getVenuesGroup,
  setOriginUrl,
})(withRouter(VenuesGroup));
