import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, useLocation } from "react-router-dom";

//import components
import PageLayout from "../../Shared/PageLayout";
import CheckoutPopup from "../../Modals/checkout";
import OnlyDigitalMenuCheckout from "../../Modals/OnlyDigitalMenuCheckout";
import StaticAlert from "../../Shared/StaticAlert";
import VenueMenuPageLoading from "./ContentLoader/VenueMenuPageLoading";

import VenueMenuPageInner from "./venueMenuPageInner/VenueMenuPageInner";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import Constants from "../../Utils/constants";

import { setOriginUrl } from "../../Redux/action/auth";
import { openHamburgerMenu } from "../../Redux/action/hamburgerMenu";
import { setPageYOffset } from "../../Redux/action/item";
import { clearNewOrder } from "../../Redux/action/ordersHistory";

import {
  VenueMenuWrapper,
  CheckoutWrapper,
  CheckoutButton,
  UpNavigationWrapper,
  UpNavigationContainer,
  StaticAlertWrapper,
  StaticAlertContainer,
} from "./styles.jsx";

import CheckoutIcon from "../../Assets/icons/CheckoutIcon.jsx";
import ColoredInfoIcon from "../../Assets/icons/ColoredInfoIcon.jsx";
import ArrowUpIcon from "../../Assets/icons/ArrowUpIcon.jsx";
import NoteIcon from "../../Assets/icons/NoteIcon.jsx";
import { NameSpace } from "../../Routes/NameSpace";

//Component Start
const VenueMenuPage = (props) => {
  const {
    venue: { venue, loading },
    cart: { currentVenueCart },
    setOriginUrl,
    orderType: { orderType },
    setPageYOffset,
    theme,
    clearNewOrder,
    history,
  } = props;

  const originUrl = useLocation();
  const staticAlarmRef = useRef();
  const CheckoutButtonRef = useRef();
  const onlyDigitalMenu = venue?.onlyDigitalMenu;
  const disableAlertForOnlyDigitalMenu =
    localStorage.getItem("disableAlertForOnlyDigitalMenu") === "undefined"
      ? false
      : JSON.parse(localStorage.getItem("disableAlertForOnlyDigitalMenu"));
  const [showUpNavigation, setShowUpNavigation] = useState(false);
  //Checkout Popup
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
  const [showOnlyDigitalMenuAlert, setShowOnlyDigitalMenuAlert] = useState(
    !disableAlertForOnlyDigitalMenu
  );
  //navigation button
  const scrollRefElement = document.getElementById("ContentsWrapper");
  const handleUpNavigationButton = () => {
    if (scrollRefElement?.scrollTop > 500) {
      setShowUpNavigation(true);
    } else setShowUpNavigation(false);
  };
  const handleUpNavigationButtonForPhone = () => {
    if (window.pageYOffset > 300) setShowUpNavigation(true);
    else setShowUpNavigation(false);
  };

  useEffect(() => {
    setOriginUrl(originUrl.pathname);
    clearNewOrder();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originUrl.pathname]);


  // handle up navigation button
  useEffect(() => {
    if (window.innerWidth < 800) {
      window.addEventListener("scroll", handleUpNavigationButtonForPhone);
    } else if(scrollRefElement)
      scrollRefElement?.addEventListener("scroll", handleUpNavigationButton);
    return () => {
      if (window.innerWidth < 800) {
        window.removeEventListener("scroll", handleUpNavigationButtonForPhone);
      }
      else if(scrollRefElement) scrollRefElement.removeEventListener("scroll", handleUpNavigationButton);
    };
  },[scrollRefElement]);

  const closeCheckoutPopup = () => {
    setShowCheckoutPopup(false);
  };

  const openCheckoutPopup = (status) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowCheckoutPopup(status);
  };

  const handleUpNavigation = () => {
    if(window.innerWidth<800){

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else scrollRefElement.scrollTo({ top: 0, behavior: "smooth" })
  };

  return (
    <>
      {loading || venue === null ? (
        <VenueMenuPageLoading theme={theme} />
      ) : (
        <PageLayout>
          <VenueMenuPageInner venue={venue} />
          <VenueMenuWrapper>
            <UpNavigationWrapper
              show={showUpNavigation}
              onClick={handleUpNavigation}
              position={
                venue?.isOpen &&
                currentVenueCart !== null &&
                currentVenueCart.items.length > 0
                  ? CheckoutButtonRef?.current?.clientHeight
                  : onlyDigitalMenu
                  ? staticAlarmRef?.current?.clientHeight
                  : 15
              }
            >
              <UpNavigationContainer>
                <ArrowUpIcon color={theme.color_icon_primary} />
              </UpNavigationContainer>
            </UpNavigationWrapper>
            {onlyDigitalMenu &&
              currentVenueCart.items.length === 0 &&
              showOnlyDigitalMenuAlert && (
                <StaticAlertWrapper ref={staticAlarmRef}>
                  <StaticAlertContainer>
                    <StaticAlert
                      onClose={() => {
                        localStorage.setItem(
                          "disableAlertForOnlyDigitalMenu",
                          JSON.stringify(true)
                        );
                        setShowOnlyDigitalMenuAlert(false);
                      }}
                      text={
                        " مواردی که می‌خواهید سفارش دهید را به یادداشت اضافه کنید تا مبلغ کل را مشاهده کنید. همچنین در زمان ثبت سفارش در صندوق جرئیات آن در یاد خواهید داشت."
                      }
                      icon={<ColoredInfoIcon />}
                      color={"blue2"}
                      hasBgColor={true}
                    />
                  </StaticAlertContainer>
                </StaticAlertWrapper>
              )}

            {venue?.isOpen &&
              currentVenueCart !== null &&
              currentVenueCart.items.length > 0 && (
                <CheckoutWrapper ref={CheckoutButtonRef}>
                  <CheckoutButton
                    onClick={() => {
                      setTimeout(openCheckoutPopup(true), 150);
                    }}
                  >
                    {onlyDigitalMenu ? (
                      <NoteIcon stroke={theme.textColorOfPrimaryButtons} />
                    ) : (
                      <CheckoutIcon stroke={theme.textColorOfPrimaryButtons} />
                    )}
                    <div
                      className="checkoutButtonText"
                      onClick={() => setPageYOffset(window.pageYOffset)}
                    >
                      {onlyDigitalMenu ? "مشاهده یادداشت" : "تکمیل خرید"}
                    </div>
                    <div className="checkoutButtonCounter">
                      {currentVenueCart.itemQty &&
                        ConvertToPersianDigit(currentVenueCart.itemQty)}
                    </div>
                  </CheckoutButton>
                </CheckoutWrapper>
              )}
          </VenueMenuWrapper>
          {onlyDigitalMenu ? (
            <OnlyDigitalMenuCheckout
              show={showCheckoutPopup}
              onHide={closeCheckoutPopup}
              setOriginUrl={setOriginUrl}
              currentVenueCart={currentVenueCart}
              venue={venue}
              orderType={orderType}
            />
          ) : (
            <CheckoutPopup
              show={showCheckoutPopup}
              onHide={closeCheckoutPopup}
              setOriginUrl={setOriginUrl}
              currentVenueCart={currentVenueCart}
              venue={venue}
              orderType={orderType}
            />
          )}
        </PageLayout>
      )}
    </>
  );
};

VenueMenuPage.propTypes = {
  openHamburgerMenu: PropTypes.func.isRequired,
  venue: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  orderType: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  setOriginUrl: PropTypes.func.isRequired,
  setPageYOffset: PropTypes.func.isRequired,
  clearNewOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  venue: state.venue,
  cart: state.cart,
  orderType: state.orderType,
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {
  openHamburgerMenu,
  setOriginUrl,
  setPageYOffset,
  clearNewOrder,
})(withRouter(VenueMenuPage));
