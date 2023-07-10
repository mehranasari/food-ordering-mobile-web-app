import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../../Shared/Header";
import StaticAlert from "../../Shared/StaticAlert";
//import actions
import {
  createNewOrderByCustomer,
  setOnlinePayMethod,
} from "../../Redux/action/ordersHistory";
//import methods
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";
import Constants from "../../Utils/constants";
//import icons
import CreditCardIcon from "../../Assets/icons/CreditCardIconOnPaymentPage.jsx";
import WalletIconOnPaymentPage from "../../Assets/icons/WalletIconOnPaymentPage.jsx";
import NextStepIconOnPaymentPage from "../../Assets/icons/NextStepIconOnPaymentPage.jsx";
import ColoredInfoIcon from "../../Assets/icons/ColoredInfoIcon.jsx";
import CashIconOnPaymentPage from "../../Assets/icons/CashIconOnPaymentPage.jsx";
//import styles
import {
  ItemDrawerWrapper,
  StyledSwipeableDrawer,
  BodyContainer,
  TotalPrice,
  PayOptionWrapper,
  PayOption,
  OnlinePortalLogo,
  PayOnlineSeparator,
  IconWrapper,
  OnlineWalletAssetContainer,
} from "./styles.jsx";

const PaymentOption = ({
  show,
  onHide,
  history,
  totalPrice,
  newOrderObject,
  createNewOrderByCustomer,
  setOnlinePayMethod,
  paymentMethods,
  newOrder,
  newOrderLoading,
  theme,
  orderType,
  orderSettings,
  preventBackToSuccessFulOrderPage,
  onlineWallet,
  onlineWalletAsset,
}) => {
  const [windowlocal] = useState(window.location.pathname);
  const { onlinePortals, paymentTime } = paymentMethods;
  useEffect(() => {
    /**Handles the back navigation */
    if (show) {
      history.push({ pathname: windowlocal });
      window.addEventListener("popstate", (event) => {
        onHide();
      });
    }

    return () => {
      window.removeEventListener("popstate", () => null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    //handle create new order successfuly
    if (
      newOrder?.orderId &&
      !newOrderLoading &&
      !preventBackToSuccessFulOrderPage &&
      (newOrder?.paymentMethod === Constants.paymentMethod.CASH ||
        newOrder?.paymentMethod === Constants.paymentMethod.BANK_CARD ||
        newOrder?.paymentMethod === Constants?.paymentMethod?.ONLINE_WALLET)
    ) {
      history.push({
        pathname: `/order/successfulOrder/?orderId=${newOrder._id}`,
      });
    }
  }, [newOrder]);

  const selectPaymentOptionByUser = (paymentMethod, item) => {
    createNewOrderByCustomer(
      { ...newOrderObject, paymentMethod: paymentMethod },
      history
    );
    setOnlinePayMethod(item);
    onHide();
  };
  return (
    <ItemDrawerWrapper>
      <StyledSwipeableDrawer
        disableSwipeToOpen={true}
        anchor={"bottom"}
        open={show}
        onClose={() => {
          onHide();
          history.goBack();
        }}
        onOpen={() => {
          onHide();
          history.goBack();
        }}
      >
        <Header
          isModal={true}
          pageTitle={
            <div>
              <span className="headerTitleBold">نوع پرداخت </span>خود را انتخاب
              کنید:
            </div>
          }
          onClose={() => {
            onHide();
            history.goBack();
          }}
          disableBoxShadow={true}
        />

        <BodyContainer>
          <TotalPrice>
            <div className="totalPriceTitle">مبلغ کل</div>
            <div className="totalPriceAmount">
              {totalPrice && ConvertToPersianDigitWithComma(totalPrice)}
              <span className="costCurrency"> تومان</span>
            </div>
          </TotalPrice>
          <PayOptionWrapper>
            {onlinePortals?.length > 0 && (
              <PayOnlineSeparator>
                <div className="line">
                  <div className="text">پرداخت به صورت آنلاین یا کیف پول</div>
                </div>
              </PayOnlineSeparator>
            )}
            {onlinePortals?.map((item, index) => (
              <PayOption
                key={"onlineMethod" + index}
                onClick={() =>
                  selectPaymentOptionByUser(item?.onlinePortal?.type === Constants.paymentMethod.ZIBAL ? Constants.paymentMethod.ZIBAL : Constants.paymentMethod.NEXT_PAY, item)
                }
              >
                <IconWrapper className="start">
                  <NextStepIconOnPaymentPage />
                </IconWrapper>
                <div className="payOptionTitle">
                  درگاه اینترنتی {item?.onlinePortal?.name}
                </div>
                <IconWrapper className="end logo">
                  <OnlinePortalLogo
                    src={item?.onlinePortal?.icon?.iconUrlLocation}
                  />
                </IconWrapper>
              </PayOption>
            ))}
            {onlineWallet?.status &&
              paymentMethods?.onlineWallet?.status &&
              onlineWalletAsset?.assets > 0 && (
                <PayOption
                  disabled={onlineWalletAsset?.assets < totalPrice}
                  onClick={() => {
                    selectPaymentOptionByUser(
                      Constants.paymentMethod.ONLINE_WALLET
                    );
                  }}
                >
                  <IconWrapper className="start">
                    <NextStepIconOnPaymentPage />
                  </IconWrapper>
                  <div className="payOptionTitle">
                    <OnlineWalletAssetContainer>
                      <div>{Constants?.paymentMethodsTitle?.ONLINE_WALLET}</div>
                      <div className="onlineWallet-assets">
                        <div className="onlineWallet-costumer-assets-title">موجودی : </div>
                        {ConvertToPersianDigitWithComma(
                          onlineWalletAsset?.assets
                        )}{" "}
                        <span className="priceUnit">تومان</span>
                      </div>
                    </OnlineWalletAssetContainer>
                  </div>
                  <IconWrapper className="end logo">
                    <WalletIconOnPaymentPage
                      fill={theme.primary}
                      stroke={theme.color_text_primary}
                      background={theme.color_background_primary}
                    />
                  </IconWrapper>
                </PayOption>
              )}
          </PayOptionWrapper>
          <PayOptionWrapper>
            {(paymentMethods?.cash.status ||
              paymentMethods?.bankCard.status) && (
                <PayOnlineSeparator>
                  <div className="line">
                    <div className="text">پرداخت به صورت حضوری</div>
                  </div>
                </PayOnlineSeparator>
              )}
            {paymentMethods?.cash.status && (
              <PayOption
                onClick={() =>
                  selectPaymentOptionByUser(Constants.paymentMethod.CASH)
                }
              >
                <IconWrapper className="start">
                  <NextStepIconOnPaymentPage />
                </IconWrapper>
                <div className="payOptionTitle">حضوری با پول نقد</div>
                <IconWrapper className="end">
                  <CashIconOnPaymentPage
                    fill={theme.primary}
                    stroke={theme.color_text_primary}
                    background={theme.color_background_primary}
                  />
                </IconWrapper>
              </PayOption>
            )}
            {paymentMethods?.bankCard.status && (
              <PayOption
                onClick={() =>
                  selectPaymentOptionByUser(Constants.paymentMethod.BANK_CARD)
                }
              >
                <IconWrapper className="start">
                  <NextStepIconOnPaymentPage />
                </IconWrapper>
                <div className="payOptionTitle">حضوری با کارت بانکی</div>
                <IconWrapper className="end">
                  <CreditCardIcon
                    fill={theme.primary}
                    stroke={theme.color_text_primary}
                  />
                </IconWrapper>
              </PayOption>
            )}
          </PayOptionWrapper>
          {((newOrderObject?.orderType ===
            Constants?.orderType?.COLLECTION_SERVICE &&
            newOrderObject?.orderDetails?.type ===
            Constants?.pickUpType?.QUICK_PICKUP) ||
            (newOrderObject?.orderType ===
              Constants?.orderType?.DELIVERY_SERVICE &&
              newOrderObject?.orderDetails?.type ===
              Constants?.deliveryType?.QUICK_DELIVERY)) &&
            paymentTime ===
            Constants.peymenetTime.BEFORE_ORDER_CONFIRMATION && (
              <div className="staticAlarm">
                <StaticAlert
                  text={
                    "فقط در صورتی که الان در محل فروشگاه حاضر هستید، گزینه‌های پرداخت نقدی یا با کارت بانکی را انتخاب نمایید.        "
                  }
                  icon={<ColoredInfoIcon />}
                  color={"blue2"}
                  hasBgColor={true}
                />
              </div>
            )}
        </BodyContainer>
      </StyledSwipeableDrawer>
    </ItemDrawerWrapper>
  );
};

PaymentOption.propTypes = {
  cart: PropTypes.object.isRequired,
  venue: PropTypes.object.isRequired,
  createNewOrderByCustomer: PropTypes.func.isRequired,
  setOnlinePayMethod: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  venue: state.venue,
  orderType: state.orderType.orderType,
  newOrder: state.ordersHistory.newOrder,
  newOrderLoading: state.ordersHistory.newOrderLoading,
  preventBackToSuccessFulOrderPage:
    state.ordersHistory.preventBackToSuccessFulOrderPage,
  theme: state.theme.theme,
  orderSettings: state.setting.venueOrderSettings.orderSettings,
  onlineWallet: state.setting.venueSettings?.settings?.onlineWallet,
  onlineWalletAsset: state.userProfile?.onlineWalletAsset,
});

export default connect(mapStateToProps, {
  createNewOrderByCustomer,
  setOnlinePayMethod,
})(withRouter(PaymentOption));
