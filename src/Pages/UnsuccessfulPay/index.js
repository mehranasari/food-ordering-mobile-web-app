import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import jmoment from "moment-jalaali";

import { NameSpace } from "../../Routes/NameSpace";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";
import Constants from "../../Utils/constants";

//import components
import Header from "../../Shared/Header";
import StaticAlert from "../../Shared/StaticAlert";
import BodyLoading from "./ContentLoader/BodyLoading";
import HeaderLoading from "./ContentLoader/HeaderLoading";
import OrderStatus from "./../../Shared/OrderStatus";
import PageLayout from "../../Shared/PageLayout";
import LoadingWithLabel from "../../Shared/LoadingWithLabel";

//import actions
import {
  getNewOrderByOrderId,
  clearNewOrder,
  setOrderDetailsSourceUrl,
} from "../../Redux/action/ordersHistory";
import {  clearOnlinePortalResponse, onlinePay,} from "../../Redux/action/onlinePortals"

import {
  removingAllItemsFromCart,
} from "../../Redux/action/cart";
import { setOriginUrl } from "../../Redux/action/auth";


//import icons
import WarningIcon from "../../Assets/icons/WarningIcon.jsx";

//import styles
import {
  BackHomeAction,
  UnsuccessfulOrderInner,
  UnsuccessfulOrderMessage,
  UnsuccessfulOrderWrapper,
  TrackingOrderActions,
  TrackingOrderContainer,
  TrackingOrerText,
  CustomerMessageContainer,
  OrderHistoryAction,
  PayButton,
  PaymentsDetailsSection,
  PaymentDetailRow,
  SectionDivider,
} from "./styles.jsx";

const UnsuccessfulPay = (props) => {
  const {
    history,
    getNewOrderByOrderId,
    order,
    clearNewOrder,
    loading,
    theme,
    onlinePay,
    onlinePaymentLoading,
    removingAllItemsFromCart,
    setOriginUrl,
    setOrderDetailsSourceUrl,
    clearOnlinePortalResponse
  } = props;

  const handleGoToOrderDetailsHistoryPage = () => {
    history.push("/account/orderDetailsHistory/" + order?._id);
  };
  const handleBackHome = () => {
    history.push({ pathname: NameSpace.url, });
  };

  useEffect(() => {
    localStorage.removeItem("onlinePaymentResponse");
    clearOnlinePortalResponse()
    if (!!!order?._id) {
      getNewOrderByOrderId(JSON.parse(localStorage.getItem("orderId")));
    }
    return () => {
      clearNewOrder();
      setOriginUrl(NameSpace.menu);
      setOrderDetailsSourceUrl("/")

    };
  }, []);

  useEffect(() => {
    if (order?._id) {
      removingAllItemsFromCart(order?.venue, order?.orderType);
    }
  }, [order?._id]);


  return (
    <>
      {loading ? (
         <PageLayout>
         <HeaderLoading theme={theme}/>
         <BodyLoading theme={theme}/>
       </PageLayout>
      ) : (
        <PageLayout>
          <UnsuccessfulOrderWrapper>
            <Header
              position={"fixed"}
              previousPage={NameSpace.url}
              fill={theme.color_text_primary}
              menu
              venueLogo
              backgroundColor={theme.color_background_primary}
              disableBoxShadow={true}

            />
            <UnsuccessfulOrderInner>
              <CustomerMessageContainer>
                <UnsuccessfulOrderMessage>
                  پرداخت شما انجام نشد !
                </UnsuccessfulOrderMessage>
                <OrderStatus order={order} />
              </CustomerMessageContainer>
              <div className="staticAlarm">
                <StaticAlert
                  text={`این سفارش ثبت نهایی نشده و تا ۱۵ دقیقه دیگر برای شما رزرو شده است. جهت ثبت نهایی سفارش نسبت به پرداخت اقدام نمایید.`}
                  icon={<WarningIcon />}
                  color={"orange"}
                  hasBgColor={false}
                />
              </div>

              {onlinePaymentLoading ? (
                <LoadingWithLabel text={"لطفا منتظر بمانید"} />
              ) : (
                <PayButton onClick={() => onlinePay(order, history)}>
                  پرداخت
                </PayButton>
              )}
              <PaymentsDetailsSection>
                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">کد سفارش</div>
                  <div className="paymentDetailRowAmount">{order?.orderId}</div>
                </PaymentDetailRow>
                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">تاریخ ثبت سفارش</div>
                  <div className="paymentDetailRowAmount">
                    {ConvertToPersianDigit(
                      jmoment(order?.orderRegistrationDate).format(
                        "jYYYY/jMM/jDD"
                      )
                    )}
                    ، ساعت{" "}
                    {ConvertToPersianDigit(
                      jmoment(order?.orderRegistrationDate).format("HH:mm")
                    )}
                  </div>
                </PaymentDetailRow>
                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">مبلغ کل </div>
                  <div className="paymentDetailRowAmount">
                    {`${ConvertToPersianDigitWithComma(order?.totalPrice)}`}
                    <span className="costCurrency"> تومان</span>
                  </div>
                </PaymentDetailRow>
                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">نوع پرداخت</div>
                  <div className="paymentDetailRowAmount">
                    {Constants.paymentMethodsTitle[order?.paymentMethod]}
                  </div>
                </PaymentDetailRow>
              </PaymentsDetailsSection>
              <SectionDivider />
              <TrackingOrderContainer>
                <TrackingOrerText>
                  با کلیک بر روی دکمه زیر یا از طریق منوی نوار کناری، جزئیات
                  سفارش خود را در تاریخچه سفارشات مشاهده و وضعیت سفارش خود را
                  پیگیری کنید.
                </TrackingOrerText>
                <TrackingOrderActions>
                  <OrderHistoryAction onClick={handleGoToOrderDetailsHistoryPage}>
                    پیگیری سفارش
                  </OrderHistoryAction>
                  <BackHomeAction onClick={handleBackHome}>
                    بازگشت به صفحه اصلی
                  </BackHomeAction>
                </TrackingOrderActions>
              </TrackingOrderContainer>
            </UnsuccessfulOrderInner>
          </UnsuccessfulOrderWrapper>
        </PageLayout>
      )}
    </>
  );
};

UnsuccessfulPay.propTypes = {
  //setSelectOrder: PropTypes.func.isRequired,
  getNewOrderByOrderId: PropTypes.func.isRequired,
  clearNewOrder: PropTypes.func.isRequired,
  removingAllItemsFromCart: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  setOriginUrl: PropTypes.func.isRequired,
  setOrderDetailsSourceUrl: PropTypes.func.isRequired,

};

const mapStateToProps = (state) => ({
  order: state.ordersHistory?.newOrder,
  loading: state.ordersHistory?.loading,
  onlinePaymentLoading: state.ordersHistory?.onlinePaymentLoading,
  theme: state.theme.theme,
});

export default connect(mapStateToProps, {
  getNewOrderByOrderId,
  clearNewOrder,
  onlinePay,
  removingAllItemsFromCart,
  setOriginUrl,
  setOrderDetailsSourceUrl,
  clearOnlinePortalResponse
})(withRouter(UnsuccessfulPay));
