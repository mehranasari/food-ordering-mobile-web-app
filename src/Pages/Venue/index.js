/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//import methods
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import Constants from "../../Utils/constants";
import { LinkToMapHandler } from "../../Utils/method/LinkToMapHandler";

//import components
import PageLayout from "../../Shared/PageLayout";
import Header from "../../Shared/Header";
import VenueTradingTimes from "../../Components/Venue/VenueTradingTimes";
import ContentLoader from "./ContentLoader/index";
import ExternalLinksContentLoading from "./ContentLoader/ExternalLinksContentLoading";
import OrderSettingsContentLoading from "./ContentLoader/OrderSettingsContentLoading";
import CustomerAddressesModal from "../../Modals/CustomerAddressesModal";
import { Row } from "../../Kit/Row";

// import VenueMapLocation from '../../Components/Venue/VenueMapLocation'

//import actions
import { setOriginUrl } from "../../Redux/action/auth";
import { setShowCustomerAddressesModal } from "../../Redux/action/addresses";
import { setOrderType } from "../../Redux/action/orderType";
import { setSelectAddress } from "../../Redux/action/addresses";
import { clearItem } from "../../Redux/action/item";
import { getExternalLinksByVenueId } from "../../Redux/action/settings/externalLinks";

//import styles
import {
  VenuePageWrapper,
  VenuePageContainer,
  VenueBanner,
  TransparnetShadow,
  ShaddowLayer,
  BodyWrapper,
  MenuBodyHeader,
  VenueDetails,
  Share,
  VenueInfo,
  VenueNameAndStatus,
  IsOpen,
  LocationWrapper,
  OrderTypeItem,
  OrderTypeAccordion,
  OrderTypeAccordionSummary,
  OrderTypeTitle,
  OrderTypeBody,
  PreparationTime,
  SelectOrderTypeButton,
  ExternalLinkContainer,
  ExternalLink,
  ExternalLinkATag,
  ExternalLinkInfo,
  SocialMeida,
  SocialMediaLink,
  OrderingTypes,
  Description,
  VenueAddress,
  NavigationToMapButton,
  BuzzAppContainer,
} from "./styles.jsx";

//import icons
import MenuSizeHandlerIcon from "../../Assets/icons/MenuSizeHandlerIcon.jsx";
import ShareIcon from "../../Assets/icons/ShareIcon.jsx";
import IsOpenIcon from "../../Assets/icons/IsOpenIcon.jsx";
import IsCloseIcon from "../../Assets/icons/IsCloseIcon.jsx";
import LocationIcon from "../../Assets/icons/LocationIcon.jsx";
import TableServiceIcon from "../../Assets/icons/TableServiceIcon.jsx";
import CollectionServiceIcon from "../../Assets/icons/CollectionServiceIcon.jsx";
import CallIcon from "../../Assets/icons/CallIcon.jsx";
import BrowserIcon from "../../Assets/icons/BrowserIcon.jsx";
import InstagramIcon from "../../Assets/icons/InstagramIcon.jsx";
import FacebookIcon from "../../Assets/icons/FacebookIcon.jsx";
import TwitterIcon from "../../Assets/icons/TwitterIcon.jsx";
import DownArrow from "../../Assets/icons/DownArrow.jsx";
import PreviousStepIcon from "../../Assets/icons/PreviousStepIcon.jsx";
import ExternalLinkIcon from "../../Assets/icons/ExternalLinkIcon.jsx";
import TelegramIcon from "../../Assets/icons/TelegramIcon.jsx";
import DefaultLogo from "../../Assets/icons/DefaultLogo.jsx";
import DeliveryServiceIcon from "../../Assets/icons/DeliveryServiceIcon.jsx";
import BuzzAppIcon from "../../Assets/icons/BuzzAppIcon.jsx";

const Venue = (props) => {
  const {
    getExternalLinksByVenueId,
    clearItem,
    setOriginUrl,
    venue: { venue },
    venueOrderSettings,
    venueExternalLinks,
    setOrderType,
    history,
    theme,
    pageYOffset,
    setShowCustomerAddressesModal,
    showCustomerAddressesModal,
    setSelectAddress,
  } = props;

  //constants and states
  const originUrl = useLocation();
  const onlyDigitalMenu = venue?.onlyDigitalMenu;
  const tradingTimes = venueOrderSettings?.orderSettings?.general?.tradingTimes;
  const addressRef = useRef();
  const [toggleScroll, setToggleScroll] = useState(false);
  let venueDetails = useRef(null);
  const [tableServiceAccordionEnabled, setTableServiceAccordionEnabled] =
    useState(false);
  const [collectionAccordionEnabled, setCollectionAccordionEnabled] =
    useState(false);
  const [deliveryAccordionEnabled, setDeliveryAccordionEnabled] =
    useState(false);
  const listOfActiveOrderType = useRef([]);
  const isSingleMenu =
    listOfActiveOrderType.current.length === 1 ? true : false;

  //*******functions**************** */
  const sharePopUp = async (shareData) => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
    }
  };
  const hasTradingTimes = () => {
    for (let key in tradingTimes) {
      if (
        tradingTimes?.[key]?.length !== 0 &&
        tradingTimes?.[key]?.some((item) => item.status)
      )
        return true;
    }
    return false;
  };

  //**********************useEffects
  // Manifest.json
  useEffect(() => {
    if (venue?.logo?.logoUrlLocation) {
      let manifest = {
        short_name: venue?.name,
        name: venue?.name,
        icons: [
          {
            src: venue?.logo?.logoUrlLocation,
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/png",
            purpose: "any",
          },
          {
            src: venue?.logo?.logoUrlLocation,
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
          {
            src: venue?.logo?.logoUrlLocation,
            type: "image/png",
            sizes: "192x192",
            purpose: "any",
          },
          {
            src: venue?.logo?.logoUrlLocation,
            type: "image/png",
            sizes: "512x512",
            purpose: "any",
          },
        ],
        start_url:venue?.dedicatedDomain ? `${process.env.REACT_APP_SSL_PROTOCOL}://${venue?.dedicatedDomain}` : `${process.env.REACT_APP_SSL_PROTOCOL}://${venue?.url}.${process.env.REACT_APP_DOMAIN_URL}`,
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
      };
      const stringManifest = JSON.stringify(manifest);
      const blob = new Blob([stringManifest], { type: "application/json" });
      const manifestURL = URL.createObjectURL(blob);
      document
        .querySelector("#custom-manifest")
        .setAttribute("href", manifestURL);
    }
    if (venue) {
      getExternalLinksByVenueId(venue?._id);
      LinkToMapHandler(venue?.location);
    }
    setOriginUrl(originUrl.pathname);
  }, [venue]);

  useEffect(() => {
    pageYOffset > 0 && clearItem();
  }, [pageYOffset]);

  useEffect(() => {
    if (venueOrderSettings?.orderSettings) {
      listOfActiveOrderType.current = [];
      if (venueOrderSettings?.orderSettings?.tableService?.status) {
        listOfActiveOrderType.current.push("tableService");
      }
      if (venueOrderSettings?.orderSettings?.collectionService?.status) {
        listOfActiveOrderType.current.push("collectionService");
      }
      if (venueOrderSettings?.orderSettings?.deliveryService?.status) {
        listOfActiveOrderType.current.push("deliveryService");
      }
      if (listOfActiveOrderType.current.length === 1) {
        if (listOfActiveOrderType.current?.[0] === "tableService") {
          setTableServiceAccordionEnabled(true);
        } else if (listOfActiveOrderType.current?.[0] === "collectionService") {
          setCollectionAccordionEnabled(true);
        } else setDeliveryAccordionEnabled(true);
      }
    }
  }, [venueOrderSettings?.orderSettings]);

  return (
    <PageLayout>
      <VenuePageWrapper>
        {venue ? (
          <VenuePageContainer>
            <VenueBanner
              bottom={toggleScroll}
              src={venue?.banner?.bannerUrlLocation}
            >
              {venue?.banner?.bannerUrlLocation && (
                <img
                  src={venue?.banner?.bannerUrlLocation}
                  height="100%"
                  width="100%"
                />
              )}
              <TransparnetShadow
                hasImage={venue?.banner?.bannerUrlLocation ? true : false}
              >
                <ShaddowLayer className={toggleScroll && "shaddowBlur"} />
                <Header
                  fill={theme.color_text_primary}
                  menu
                  venueLogo={false}
                  iconBackgroundColor={theme.color_background_primary}
                  disableBoxShadow={true}
                  className={"header"}
                />
              </TransparnetShadow>
            </VenueBanner>

            <BodyWrapper bottom={toggleScroll}>
              <MenuBodyHeader hasLogo={!venue?.logo?.logoUrlLocation}>
                {venue?.logo?.logoUrlLocation ? (
                  <img
                    className="venueLogo"
                    src={venue?.logo?.logoUrlLocation}
                  />
                ) : (
                  <div className="venueLogo">
                    <DefaultLogo stroke={theme.color_icon_primary} />
                  </div>
                )}
                <MenuSizeHandlerIcon color={theme.color_border_primary} />

                <Share
                  onClick={() =>
                    sharePopUp({
                      title: venue?.name,
                      text: `${venue?.name}

${venue?.description}
📞 ${venue?.phoneNumber}
📍 ${venue?.address}

برای مشاهده منوی دیجیتال${venue?.name}، روی لینک زیر کلیک کنید و به آسانی سفارش دهید:
${process.env.REACT_APP_SSL_PROTOCOL}://${venue?.dedicatedDomain ? venue?.dedicatedDomain : venue?.url+"."+process.env.REACT_APP_DOMAIN_URL}

منوباز | سفارش و پرداخت موبایلی قدرتمند
`,
                    })
                  }
                >
                  <ShareIcon />
                  <div className="shareText">اشتراک</div>
                </Share>
              </MenuBodyHeader>
              <VenueDetails
                ref={(e) => {
                  venueDetails = e;
                }}
                venue={venue?.description}
                onScroll={() => {
                  if (venueDetails.scrollTop === 0 || !toggleScroll) {
                    setToggleScroll(!toggleScroll);
                  }
                }}
              >
                <VenueInfo>
                  <VenueNameAndStatus>
                    <h1 className="venueNameText">{venue?.name}</h1>
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
                  </VenueNameAndStatus>
                  <LocationWrapper>
                    <VenueAddress>
                      <div className="locationIcon">
                        <LocationIcon />
                      </div>
                      <div
                        ref={addressRef}
                        className={`${
                          addressRef?.current?.clientHeight > 60
                            ? "venueAddressText fade"
                            : "venueAddressText"
                        }`}
                      >
                        {venue?.address}
                      </div>
                    </VenueAddress>
                    {venue?.location?.length > 0 && (
                      <NavigationToMapButton>
                        <a
                          href={LinkToMapHandler(venue?.location)}
                          target="_blank"
                        >
                          نمایش نقشه
                        </a>
                      </NavigationToMapButton>
                    )}
                  </LocationWrapper>
                  {/* <VenueMapLocation/> */}
                </VenueInfo>

                {venueOrderSettings?.loading ? (
                  <OrderingTypes>
                    <OrderSettingsContentLoading theme={theme} />
                  </OrderingTypes>
                ) : (
                  venueOrderSettings?.orderSettings && (
                    <OrderingTypes>
                      {!isSingleMenu && (
                        <div className="orderTypeSelection">
                          {onlyDigitalMenu
                            ? "منوی مورد نظر را بر اساس سفارش خود انتخاب کنید:"
                            : "نوع سفارش خود را انتخاب کنید:"}
                        </div>
                      )}
                      {venueOrderSettings?.orderSettings?.tableService
                        ?.status && (
                        <OrderTypeItem>
                          <OrderTypeAccordion
                            onChange={(e, expanded) => {
                              setTableServiceAccordionEnabled(expanded);
                            }}
                            expanded={tableServiceAccordionEnabled}
                          >
                            <OrderTypeAccordionSummary
                              expandIcon={
                                <DownArrow color={theme.color_icon_primary} />
                              }
                              aria-controls={`panel-dine-in-content`}
                              id={`panel-dine-in-header`}
                            >
                              <TableServiceIcon
                                fill={
                                  tableServiceAccordionEnabled
                                    ? theme.primary
                                    : "none"
                                }
                                stroke={
                                  tableServiceAccordionEnabled
                                    ? theme.color_text_primary
                                    : theme.color_text_primary_l5
                                }
                              />
                              <OrderTypeTitle
                                enabled={tableServiceAccordionEnabled}
                              >
                                {venueOrderSettings?.orderSettings?.tableService
                                  ?.label
                                  ? venueOrderSettings?.orderSettings
                                      ?.tableService?.label
                                  : "بر روی میز"}
                              </OrderTypeTitle>
                            </OrderTypeAccordionSummary>
                            <OrderTypeBody>
                              <PreparationTime>
                                <div className="preparationTimeTitle">
                                  زمان آماده‌سازی
                                </div>
                                <div className="preparationTimeValue">
                                  {ConvertToPersianDigit(
                                    venueOrderSettings?.orderSettings
                                      ?.tableService?.prepTime
                                  )}{" "}
                                  دقیقه
                                </div>
                              </PreparationTime>
                              <SelectOrderTypeButton
                                onClick={() => {
                                  setOrderType(
                                    Constants.orderType.TABLE_SERVICE,
                                    history
                                  );
                                  setSelectAddress(null);
                                }}
                              >
                                <div className="selectOrderTypeButtonWrapper">
                                  <div className="selectOrderTypeButtonText">
                                    مشاهده منو{" "}
                                    {venueOrderSettings?.orderSettings
                                      ?.tableService?.label
                                      ? venueOrderSettings?.orderSettings
                                          .tableService?.label
                                      : "بر روی میز"}
                                  </div>
                                </div>
                              </SelectOrderTypeButton>
                            </OrderTypeBody>
                          </OrderTypeAccordion>
                        </OrderTypeItem>
                      )}

                      {venueOrderSettings?.orderSettings?.collectionService
                        ?.status && (
                        <OrderTypeItem>
                          <OrderTypeAccordion
                            onChange={(e, expanded) => {
                              setCollectionAccordionEnabled(expanded);
                            }}
                            expanded={collectionAccordionEnabled}
                          >
                            <OrderTypeAccordionSummary
                              expandIcon={
                                <DownArrow color={theme.color_icon_primary} />
                              }
                              aria-controls={`panel-dine-in-content`}
                              id={`panel-dine-in-header`}
                            >
                              <CollectionServiceIcon
                                fill={
                                  collectionAccordionEnabled
                                    ? theme.primary
                                    : "none"
                                }
                                stroke={
                                  collectionAccordionEnabled
                                    ? theme.color_text_primary
                                    : theme.color_text_primary_l5
                                }
                                backgroundColor={theme.color_background_primary}
                              />
                              <OrderTypeTitle
                                enabled={collectionAccordionEnabled}
                              >
                                {venueOrderSettings?.orderSettings
                                  ?.collectionService.label
                                  ? venueOrderSettings?.orderSettings
                                      ?.collectionService.label
                                  : "تحویل حضوری"}
                              </OrderTypeTitle>
                            </OrderTypeAccordionSummary>
                            <OrderTypeBody>
                              <PreparationTime>
                                <div className="preparationTimeTitle">
                                  زمان آماده‌سازی
                                </div>
                                <div className="preparationTimeValue">
                                  {ConvertToPersianDigit(
                                    venueOrderSettings?.orderSettings
                                      .collectionService.prepTime
                                  )}{" "}
                                  دقیقه
                                </div>
                              </PreparationTime>
                              <SelectOrderTypeButton
                                onClick={() => {
                                  setOrderType(
                                    Constants.orderType.COLLECTION_SERVICE,
                                    history
                                  );
                                  setSelectAddress(null);
                                }}
                              >
                                <div className="selectOrderTypeButtonWrapper">
                                  <div className="selectOrderTypeButtonText">
                                    مشاهده منو{" "}
                                    {venueOrderSettings?.orderSettings
                                      ?.collectionService.label
                                      ? venueOrderSettings?.orderSettings
                                          .collectionService.label
                                      : "تحویل حضوری"}
                                  </div>
                                </div>
                              </SelectOrderTypeButton>
                            </OrderTypeBody>
                          </OrderTypeAccordion>
                        </OrderTypeItem>
                      )}
                      {venueOrderSettings?.orderSettings?.deliveryService
                        ?.status && (
                        <OrderTypeItem>
                          <OrderTypeAccordion
                            onChange={(e, expanded) => {
                              setDeliveryAccordionEnabled(expanded);
                            }}
                            expanded={deliveryAccordionEnabled}
                          >
                            <OrderTypeAccordionSummary
                              expandIcon={
                                <DownArrow color={theme.color_icon_primary} />
                              }
                              aria-controls={`panel-dine-in-content`}
                              id={`panel-dine-in-header`}
                            >
                              <DeliveryServiceIcon
                                fill={
                                  deliveryAccordionEnabled
                                    ? theme.primary
                                    : "none"
                                }
                                stroke={
                                  deliveryAccordionEnabled
                                    ? theme.color_text_primary
                                    : theme.color_text_primary_l5
                                }
                              />
                              <OrderTypeTitle
                                enabled={deliveryAccordionEnabled}
                              >
                                {venueOrderSettings?.orderSettings
                                  ?.deliveryService.label
                                  ? venueOrderSettings?.orderSettings
                                      ?.deliveryService.label
                                  : "ارسال با پیک"}
                              </OrderTypeTitle>
                            </OrderTypeAccordionSummary>
                            <OrderTypeBody>
                              <PreparationTime>
                                <div className="preparationTimeTitle">
                                  زمان آماده‌سازی
                                </div>
                                <div className="preparationTimeValue">
                                  {ConvertToPersianDigit(
                                    venueOrderSettings?.orderSettings
                                      .deliveryService.prepTime
                                  )}{" "}
                                  دقیقه
                                </div>
                              </PreparationTime>
                              <SelectOrderTypeButton
                                onClick={() => {
                                  //  setOrderType(
                                  //   Constants.orderType.DELIVERY_SERVICE,
                                  //   history
                                  // )
                                  setShowCustomerAddressesModal(true);
                                }}
                              >
                                <div className="selectOrderTypeButtonWrapper">
                                  <div className="selectOrderTypeButtonText">
                                    مشاهده منو{" "}
                                    {venueOrderSettings?.orderSettings
                                      ?.deliveryService.label
                                      ? venueOrderSettings?.orderSettings
                                          .deliveryService.label
                                      : "ارسال با پیک"}
                                  </div>
                                </div>
                              </SelectOrderTypeButton>
                            </OrderTypeBody>
                          </OrderTypeAccordion>
                        </OrderTypeItem>
                      )}
                    </OrderingTypes>
                  )
                )}

                {venue?.description && (
                  <Description>
                    <div className="descriptionTitle">توضیحات</div>
                    {venue?.description?.split("\n").map((i, key) => (
                      <div className="descriptionText" key={"desc" + key}>
                        {i}
                      </div>
                    ))}
                  </Description>
                )}

                {tradingTimes && hasTradingTimes() && (
                  <VenueTradingTimes
                    tradingTimes={tradingTimes}
                    theme={theme}
                  />
                )}

                {venueExternalLinks?.loading ? (
                  <ExternalLinkContainer>
                    <ExternalLinksContentLoading theme={theme} />
                  </ExternalLinkContainer>
                ) : (
                  <>
                    {venueExternalLinks?.externalLinks?.customLinks &&
                      venueExternalLinks?.externalLinks?.customLinks?.length !==
                        0 &&
                      venueExternalLinks?.externalLinks?.customLinks?.some(
                        (item) => item.status
                      ) && (
                        <ExternalLinkContainer>
                          <div className="title">لینک های خارجی</div>
                          {venueExternalLinks?.externalLinks?.customLinks.map(
                            (externalLink, index) => {
                              return (
                                externalLink.status && (
                                  <ExternalLink key={`ExternalLink-${index}`}>
                                    <ExternalLinkATag
                                      href={externalLink?.url}
                                      target={"blank"}
                                    >
                                      <ExternalLinkInfo>
                                        {externalLink?.icon ? (
                                          <div className="icon">
                                            {externalLink?.icon}
                                          </div>
                                        ) : (
                                          <ExternalLinkIcon />
                                        )}
                                        <div className="name">
                                          {externalLink?.name}
                                        </div>
                                      </ExternalLinkInfo>
                                      <PreviousStepIcon
                                        fill={theme.color_icon_primary}
                                        width="7"
                                        height="12"
                                      />
                                    </ExternalLinkATag>
                                  </ExternalLink>
                                )
                              );
                            }
                          )}
                        </ExternalLinkContainer>
                      )}

                    {venueExternalLinks?.externalLinks?.primaryLinks && (
                      <SocialMeida>
                        {venue?.phoneNumber && (
                          <SocialMediaLink
                            href={`tel:${venue?.phoneNumber}`}
                            onclick="ga('send', 'event', {eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                            rel="noopener noreferrer"
                          >
                            <CallIcon className="socialMediaIcon" />
                          </SocialMediaLink>
                        )}

                        {venueExternalLinks?.externalLinks?.primaryLinks
                          ?.websiteUrl && (
                          <SocialMediaLink
                            href={`https://www.${venueExternalLinks?.externalLinks?.primaryLinks?.websiteUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BrowserIcon className="socialMediaIcon" />
                          </SocialMediaLink>
                        )}
                        {venueExternalLinks?.externalLinks?.primaryLinks
                          ?.instagramUrl && (
                          <SocialMediaLink
                            href={`https://www.instagram.com/${venueExternalLinks?.externalLinks?.primaryLinks?.instagramUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <InstagramIcon className="socialMediaIcon" />
                          </SocialMediaLink>
                        )}
                        {venueExternalLinks?.externalLinks?.primaryLinks
                          ?.facebookUrl && (
                          <SocialMediaLink
                            href={`https://www.facebook.com/${venueExternalLinks?.externalLinks?.primaryLinks?.facebookUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FacebookIcon className="socialMediaIcon" />
                          </SocialMediaLink>
                        )}
                        {venueExternalLinks?.externalLinks?.primaryLinks
                          ?.twittermUrl && (
                          <SocialMediaLink
                            href={`https://www.twitter.com/${venueExternalLinks?.externalLinks?.primaryLinks?.twittermUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <TwitterIcon className="socialMediaIcon" />
                          </SocialMediaLink>
                        )}
                        {venueExternalLinks?.externalLinks?.primaryLinks
                          ?.telegramUrl && (
                          <SocialMediaLink
                            href={`https://t.me/${venueExternalLinks?.externalLinks?.primaryLinks?.telegramUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <TelegramIcon className="socialMediaIcon" />
                          </SocialMediaLink>
                        )}
                      </SocialMeida>
                    )}
                  </>
                )}
                <BuzzAppContainer
                  href="https://www.menobuzz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>طراحی و پیاده‌سازی شده توسط</div>
                  <Row>
                    <BuzzAppIcon />
                    <div className="menubuzz">منوباز</div>
                  </Row>
                </BuzzAppContainer>
              </VenueDetails>
            </BodyWrapper>
          </VenuePageContainer>
        ) : (
          <ContentLoader theme={theme} />
        )}
      </VenuePageWrapper>
      <CustomerAddressesModal
        show={showCustomerAddressesModal}
        venueLocation={venue?.location}
        onHide={() => {
          setShowCustomerAddressesModal(false);
        }}
      />
    </PageLayout>
  );
};

Venue.propTypes = {
  getExternalLinksByVenueId: PropTypes.func.isRequired,
  venue: PropTypes.object.isRequired,
  venueOrderSettings: PropTypes.object.isRequired,
  venueExternalLinks: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  setOrderType: PropTypes.func.isRequired,
  clearItem: PropTypes.func.isRequired,
  setShowCustomerAddressesModal: PropTypes.func.isRequired,
  setSelectAddress: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  venue: state.venue,
  theme: state.theme.theme,
  pageYOffset: state.item.pageYOffset,
  showCustomerAddressesModal: state.addresses.showCustomerAddressesModal,
  venueOrderSettings: state.setting.venueOrderSettings,
  venueExternalLinks: state.setting.venueExternalLinks,
});

export default connect(mapStateToProps, {
  getExternalLinksByVenueId,
  setOriginUrl,
  setOrderType,
  clearItem,
  setShowCustomerAddressesModal,
  setSelectAddress,
})(withRouter(Venue));
