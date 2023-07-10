import React, { useEffect, useRef } from "react";
import { withRouter, useParams, Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import jmoment from "moment-jalaali";
import PropTypes from "prop-types";
import { NameSpace } from "../../Routes/NameSpace";

//import components
import Header from "../../Shared/Header";
import StaticAlert from "../../Shared/StaticAlert";
import OrderStatusProgress from "../../Shared/OrderStatusProgress";
import BodyLoading from "./ContentLoader/BodyLoading";
import LoadingWithLabel from "../../Shared/LoadingWithLabel";
import OrderQrCode from "../../Shared/OrderQrCode";
import OrderQrCodeModal from "../../Modals/OrderQrCodeModal";
import PageLayout from "../../Shared/PageLayout";
//import actions
import {
  setShowQrCodeModal,
  setOrderDetailsSourceUrl,
  clearSelectOrder,
  getOrderByOrderId,
  getOrderByOrderIdForUpdateStatus,
} from "../../Redux/action/ordersHistory";
import { onlinePay } from "../../Redux/action/onlinePortals";
import { setOriginUrl } from "../../Redux/action/auth";

//import styles
import {
  OrderDetailsHistoryDrawerWrapper,
  BodyWrapper,
  OrderBasicInfoSection,
  OrderVenue,
  VenueLogo,
  VenueDesc,
  OrderInfoContainer,
  OrderRefContainer,
  OrderRef,
  HistoryItemStatus,
  OrderPlaced,
  OrderTyped,
  VenueArea,
  PaymentsDetailsSection,
  PaymentDetailRow,
  TotalPrice,
  ItemSummarySection,
  ItemContainer,
  ItemInfoWrapper,
  ItemInfoContainer,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemPreferencesAndExtras,
  ItemPreferencesAndExtrasNameContainer,
  ItemPreferencesAndExtrasQtyAndPriceContainer,
  ExtraItemSize,
  PayButton,
  PaySection,
  PayAlaramContainer,
  NoAccessWrapper,
  NoAccessHistoryIconWrapper,
  SigninButton,
  UserNote,
  OrderAddress,
} from "./styles.jsx";
import { ItemSize } from "../../Components/Item/ExtraGroups/styles.jsx";

//import icons
import TableServiceIcon from "../../Assets/icons/TableServiceIcon.jsx";
import CollectionServiceIcon from "../../Assets/icons/CollectionServiceIcon.jsx";
import DefaultLogo from "../../Assets/icons/DefaultLogo.jsx";
import WarningIcon from "../../Assets/icons/WarningIcon.jsx";
import NoAccessHistoryIcon from "../../Assets/icons/NoAccessHistoryIcon.jsx";
import DeliveryServiceIcon from "../../Assets/icons/DeliveryServiceIcon.jsx";

//import utils
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";
import Constants from "../../Utils/constants";

const OrderDetailsHistory = ({
  history,
  order,
  theme,
  isAuthenticated,
  getOrderByOrderId,
  setOriginUrl,
  onlinePay,
  orderLoading,
  userLoading,
  onlinePaymentLoading,
  setShowQrCodeModal,
  showQrCodeModal,
  orderDetailsSourceUrl,
  setOrderDetailsSourceUrl,
  getOrderByOrderIdForUpdateStatus,
}) => {
  const itemsCount = order?.items?.length;
  const orderDetailsSourceUrlRef = useRef(orderDetailsSourceUrl);
  const awaitingPay =
    (order?.paymentMethod === Constants.paymentMethod.ZIBAL ||
      order?.paymentMethod === Constants.paymentMethod.NEXT_PAY ||
      order?.paymentTime ===
        Constants.peymenetTime.BEFORE_ORDER_CONFIRMATION) &&
    order?.paymentStatus === "AWAITING_PAY"
      ? true
      : false;
  const enablePay =
    (order?.paymentMethod === Constants.paymentMethod.ZIBAL ||
      order?.paymentMethod === Constants.paymentMethod.NEXT_PAY) &&
    order?.paymentStatus === "AWAITING_PAY"
      ? true
      : false;
  const params = useParams();
  const location = useLocation();

  const handlePopState = () => {
    if (!window.location?.href?.includes("orderDetailsHistory")) {
      history.push(NameSpace.orderHistory);
    }
    window.removeEventListener("popstate", handlePopState);
  };
  const handleClose = () => {
    history.goBack();
    history.push(NameSpace.orderHistory);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        if (
          isAuthenticated &&
          (order?.orderStatus ===
            Constants.orderStatus?.AWAITING_ACCEPT?.value ||
            order?.orderStatus === Constants.orderStatus?.PREPARING?.value)
        ) {
          getOrderByOrderIdForUpdateStatus(order?._id);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [order]);

  useEffect(() => {
    if (isAuthenticated) getOrderByOrderId(params?.orderId);
    return () => {
      clearSelectOrder();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      setOrderDetailsSourceUrl(null);
      // window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <PageLayout>
      <OrderDetailsHistoryDrawerWrapper>
        <Header
          onClose={handleClose}
          pageTitle={"جزئیات سفارش"}
          position={"fixed"}
          backgroundColor={theme.color_background_primary}
        />
        {orderLoading || userLoading ? (
          <BodyLoading theme={theme} />
        ) : isAuthenticated ? (
          <BodyWrapper>
            {/* Order Basic Info Section */}

            <OrderBasicInfoSection>
              <OrderVenue
                href={order?.venueInfo?.dedicatedDomain ? `${process.env.REACT_APP_SSL_PROTOCOL}://${order?.venueInfo?.dedicatedDomain}` : `${process.env.REACT_APP_SSL_PROTOCOL}://${order?.venueInfo?.url}.${process.env.REACT_APP_DOMAIN_URL}`}
              >
                {order?.venueInfo?.logoUrlLocation ? (
                  <VenueLogo src={order?.venueInfo?.logoUrlLocation} />
                ) : (
                  <div className="venueLogo">
                    <DefaultLogo stroke={theme.color_icon_primary} />
                  </div>
                )}

                <VenueDesc>
                  <div className="VenueName">{order?.venueInfo?.name}</div>
                  <div className="VenueAddress">
                    {order?.venueInfo?.address}
                  </div>
                </VenueDesc>
              </OrderVenue>
              <OrderInfoContainer>
                <OrderRefContainer>
                  <OrderRef>
                    <div className="orderInfoTitle">شماره سفارش</div>
                    <div className="orderRefId">{order?.orderId}</div>
                  </OrderRef>
                  <HistoryItemStatus>
                    <OrderStatusProgress order={order} />
                  </HistoryItemStatus>
                </OrderRefContainer>
                {awaitingPay && !enablePay && (
                  <PayAlaramContainer>
                    <div className="message">
                      {/* لطفا جهت نهایی کردن سفارش خود، به صندوق مراجعه و جهت پرداخت
                    کد سفارش خود را به مسئول صندوق اعلام فرمایید. */}
                      {order?.paymentDemoText}
                    </div>
                  </PayAlaramContainer>
                )}
                {order?.orderType ===
                  Constants?.orderType?.COLLECTION_SERVICE && (
                  <OrderQrCode order={order} />
                )}

                <OrderPlaced>
                  <div className="orderInfoTitle">زمان سفارش</div>
                  <div className="orderPlaced">
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
                </OrderPlaced>
                <OrderTyped>
                  <div className="orderInfoTitle">نوع سفارش</div>
                  <div className="OrderTyped">
                    {order?.orderType ===
                    Constants?.orderType?.TABLE_SERVICE ? (
                      <TableServiceIcon
                        fill={theme.primary}
                        stroke={theme.color_text_primary}
                      />
                    ) : order?.orderType ===
                      Constants.orderType.DELIVERY_SERVICE ? (
                      <DeliveryServiceIcon
                        fill={theme.primary}
                        stroke={theme.color_text_primary}
                      />
                    ) : (
                      <CollectionServiceIcon
                        fill={theme.primary}
                        stroke={theme.color_text_primary}
                        backgroundColor={theme.color_background_primary}
                      />
                    )}
                    <div className="OrderTypedText">
                      {Constants.orderTypesTitle[order?.orderType]}
                    </div>
                  </div>
                </OrderTyped>
                {order?.orderType === Constants?.orderType?.TABLE_SERVICE ? (
                  <VenueArea>
                    <div className="orderInfoTitle">محل و شماره میز</div>
                    <div className="venueArea">
                      {order?.orderDetails?.name} ، میز شماره{" "}
                      {ConvertToPersianDigit(order?.orderDetails?.tableNumber)}
                    </div>
                  </VenueArea>
                ) : (
                  <VenueArea>
                    <div className="orderInfoTitle">زمان دریافت سفارش</div>
                    <div className="venueArea">
                      {order?.orderDetails?.type ===
                        Constants?.pickUpType?.QUICK_PICKUP ||
                      order?.orderDetails?.type ===
                        Constants?.deliveryType?.QUICK_DELIVERY ? (
                        <div>تحویل در سریع‌ترین زمان ممکن</div>
                      ) : (
                        <div>
                          {ConvertToPersianDigit(
                            jmoment(order?.orderDetails?.time).format(
                              "jYYYY/jMM/jDD"
                            )
                          )}
                          ، ساعت{" "}
                          {ConvertToPersianDigit(
                            jmoment(order?.orderDetails?.time).format("HH:mm")
                          )}
                        </div>
                      )}
                    </div>
                  </VenueArea>
                )}
                {order?.orderType ===
                  Constants?.orderType?.DELIVERY_SERVICE && (
                  <>
                    <OrderAddress>
                      <div className="OrderAddressTitle">
                        نشانی تحویل گیرنده
                      </div>
                      <div className="OrderAddress">
                        {order?.orderDetails?.addressInfo?.address}{" "}
                        {order?.orderDetails?.addressInfo?.details}
                      </div>
                    </OrderAddress>
                    <OrderAddress>
                      <div className="OrderAddressTitle">
                        شماره تماس تحویل گیرنده
                      </div>
                      <div className="OrderAddress">
                        {ConvertToPersianDigit(
                          order?.orderDetails?.addressInfo?.receiverPhoneNumber
                        )}
                      </div>
                    </OrderAddress>
                  </>
                )}
              </OrderInfoContainer>
            </OrderBasicInfoSection>

            {order?.userNote && (
              <UserNote>
                <div className="userNoteTitle">توضیحات</div>
                <div className="userNote">{order?.userNote}</div>
              </UserNote>
            )}
            {enablePay && (
              <PaySection>
                <StaticAlert
                  text={`این سفارش ثبت نهایی نشده‌است؛ جهت ثبت نهایی سفارش نسبت به پرداخت اقدام نمایید.`}
                  icon={<WarningIcon />}
                  color={"orange"}
                  hasBgColor={false}
                />
                {onlinePaymentLoading ? (
                  <LoadingWithLabel text={"لطفا منتظر بمانید"} />
                ) : (
                  <PayButton onClick={() => onlinePay(order, history)}>
                    پرداخت
                  </PayButton>
                )}
              </PaySection>
            )}
            {/* Payments Details Section */}
            <PaymentsDetailsSection>
              <div className="paymentsDetailsSectionTitle">اطلاعات پرداخت</div>
              <PaymentDetailRow>
                <div className="paymentDetailRowTitle">
                  قیمت آیتم‌ها (
                  {ConvertToPersianDigit(order?.totalItemsQuantity)}
                  مورد)
                </div>
                <div className="paymentDetailRowAmount">
                  {`${ConvertToPersianDigitWithComma(order?.itemsPrice)}`}
                  <span className="costCurrency"> تومان</span>
                </div>
              </PaymentDetailRow>

              {order?.fees?.map((fee) => (
                <PaymentDetailRow key={"fee_" + fee._id}>
                  <div className="paymentDetailRowTitle">
                    {" "}
                    {fee.name}
                    {fee.type === "PERCENT" &&
                      " (%" + ConvertToPersianDigit(fee?.percent) + ")"}
                  </div>
                  <div className="paymentDetailRowAmount">
                    {`${ConvertToPersianDigitWithComma(fee?.finalAmount)}`}
                    <span className="costCurrency"> تومان</span>
                  </div>
                </PaymentDetailRow>
              ))}
              {order?.tippingDetails &&
                order?.tippingDetails.type !== "disabled" && (
                  <PaymentDetailRow>
                    <div className="paymentDetailRowTitle">انعام</div>
                    <div className="paymentDetailRowAmount">
                      {`${ConvertToPersianDigitWithComma(
                        order?.tippingDetails.price
                      )}`}
                      <span className="costCurrency"> تومان</span>
                    </div>
                  </PaymentDetailRow>
                )}
              {order?.totalDiscountPrice !== 0 && (
                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle"> تخفیف آیتم‌ها</div>
                  <div className="paymentDetailRowAmount discount">
                    {order?.discounts?.manualByMerchant?.amount
                      ? ConvertToPersianDigitWithComma(
                          order?.totalDiscountPrice -
                            order?.discounts?.manualByMerchant?.finalAmount
                        )
                      : ConvertToPersianDigitWithComma(
                          order?.totalDiscountPrice
                        )}
                    <span className="costCurrencytotalDiscountPrice">
                      تومان{" "}
                    </span>
                  </div>
                </PaymentDetailRow>
              )}

              {order?.discounts?.manualByMerchant?.amount && (
                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">
                    {" "}
                    تخفیف دستی
                    {order?.discounts?.manualByMerchant?.type === "PERCENT" && (
                      <>
                        (
                        {ConvertToPersianDigitWithComma(
                          order?.discounts?.manualByMerchant?.amount
                        )}
                        %)
                      </>
                    )}
                  </div>

                  <div className="paymentDetailRowAmount discount">
                    {ConvertToPersianDigitWithComma(
                      order?.discounts?.manualByMerchant?.finalAmount
                    )}
                    <span className="costCurrencytotalDiscountPrice">
                      تومان
                    </span>
                  </div>
                </PaymentDetailRow>
              )}

              <PaymentDetailRow>
                <div className="paymentDetailRowTitle">نحوه پرداخت</div>
                <div className="paymentDetailRowAmount">
                  {" "}
                  {Constants.paymentMethodsTitle[order?.paymentMethod]}
                </div>
              </PaymentDetailRow>
              {order?.paymentRefNumber && (
                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">کد مرجع تراکنش</div>
                  <div className="paymentDetailRowAmount">
                    {ConvertToPersianDigit(order?.paymentRefNumber)}
                  </div>
                </PaymentDetailRow>
              )}
              <TotalPrice>
                <div className="totalPriceTitle">مجموع قیمت</div>
                <div className="totalPriceAmount">
                  {`${ConvertToPersianDigitWithComma(order?.totalPrice)} `}
                  <span className="costCurrency"> تومان</span>
                </div>
              </TotalPrice>
            </PaymentsDetailsSection>

            {/* Item Summary Section */}
            <ItemSummarySection>
              <div className="itemSummarySectionTitle">خلاصه آیتم‌ها</div>
              {order?.items?.map((item, index) => (
                <ItemContainer
                  itemsCount={itemsCount}
                  itemIndex={index}
                  key={"orderItem" + index}
                >
                  <ItemInfoWrapper>
                    <ItemInfoContainer>
                      {item?.imageUrlLocation && (
                        <ItemImage src={item?.imageUrlLocation} />
                      )}
                      <ItemInfo>
                        <div className="itemName">{item?.name}</div>
                        <div className="itemSize">{item?.price?.title}</div>
                      </ItemInfo>
                      <ItemPreferencesAndExtrasQtyAndPriceContainer>
                        {item?.quantity > 1 && (
                          <div className="itemQuantity">
                            <span>{ConvertToPersianDigit(item?.quantity)}</span>
                            <span> x </span>
                          </div>
                        )}
                      </ItemPreferencesAndExtrasQtyAndPriceContainer>
                    </ItemInfoContainer>

                    <ItemPrice>
                      <ItemSize key={item?._id} value={item?.price}>
                        <div>
                          {/* {item?.totalFinalDiscountPrice === 0 || item?.discountPercent === null ? ( */}
                          {item?.price.discountPercent === 0 ||
                          item?.price.discountPercent === null ? (
                            <div className="costWithoutDiscount">
                              <div className="costText">
                                {ConvertToPersianDigitWithComma(
                                  item?.price?.finalPrice
                                )}
                                <span className="costCurrency"> تومان</span>
                              </div>
                            </div>
                          ) : (
                            <div className="costWithDiscountWrapper">
                              <div className="discountPercent">
                                {ConvertToPersianDigit(
                                  item?.price?.discountPercent
                                )}
                                %
                              </div>
                              <div className="costWithDiscount">
                                <div className="priceWithoutDiscount">
                                  {ConvertToPersianDigitWithComma(
                                    item?.price?.originalPrice
                                  )}
                                </div>
                                <div className="priceWithDiscount">
                                  {ConvertToPersianDigitWithComma(
                                    item?.price?.finalPrice
                                  )}
                                  <span className="costCurrency"> تومان</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </ItemSize>
                    </ItemPrice>
                  </ItemInfoWrapper>
                  {item?.preferenceItems?.map((preference, index) => (
                    <ItemPreferencesAndExtras key={`preference-${index}`}>
                      <ItemPreferencesAndExtrasNameContainer>
                        <div className="dot" />
                        <div className="name">{preference?.name}</div>
                        <ItemPreferencesAndExtrasQtyAndPriceContainer>
                          {preference?.quantity > 1 && (
                            <div className="quantity">
                              <div> x </div>{" "}
                              {ConvertToPersianDigit(preference?.quantity)}
                            </div>
                          )}
                        </ItemPreferencesAndExtrasQtyAndPriceContainer>
                      </ItemPreferencesAndExtrasNameContainer>
                    </ItemPreferencesAndExtras>
                  ))}
                  {item?.extraItems?.map((extra, index) => (
                    <ItemPreferencesAndExtras key={`extra-${index}`}>
                      <ItemPreferencesAndExtrasNameContainer>
                        <div className="dot" />
                        <div className="name">
                          {`${extra?.name} ${
                            extra?.price.title.length !== 0
                              ? `(${extra?.price.title})`
                              : ""
                          }`}
                        </div>
                        <ItemPreferencesAndExtrasQtyAndPriceContainer>
                          {extra?.quantity > 1 && (
                            <div className="quantity">
                              <div> x </div>{" "}
                              {ConvertToPersianDigit(extra?.quantity)}
                            </div>
                          )}
                        </ItemPreferencesAndExtrasQtyAndPriceContainer>
                      </ItemPreferencesAndExtrasNameContainer>
                      <ItemPreferencesAndExtrasQtyAndPriceContainer>
                        <ExtraItemSize key={extra?._id}>
                          <div>
                            {extra?.totalDiscountPrice === 0 ||
                            extra?.discountPercent === null ? (
                              <div className="costWithoutDiscount">
                                <div className="costText">
                                  {ConvertToPersianDigitWithComma(
                                    extra?.price?.finalPrice
                                  )}
                                  <span className="costCurrency"> تومان</span>
                                </div>
                              </div>
                            ) : (
                              <div className="costWithDiscountWrapper">
                                <div className="discountPercent">
                                  {ConvertToPersianDigit(
                                    extra?.price?.discountPercent
                                  )}
                                  %
                                </div>
                                <div className="costWithDiscount">
                                  <div className="priceWithoutDiscount">
                                    {ConvertToPersianDigitWithComma(
                                      extra?.price?.originalPrice
                                    )}
                                  </div>
                                  <div className="priceWithDiscount">
                                    {ConvertToPersianDigitWithComma(
                                      extra?.price?.finalPrice
                                    )}
                                    <span className="costCurrency"> تومان</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </ExtraItemSize>
                      </ItemPreferencesAndExtrasQtyAndPriceContainer>
                    </ItemPreferencesAndExtras>
                  ))}
                </ItemContainer>
              ))}
            </ItemSummarySection>
          </BodyWrapper>
        ) : (
          <NoAccessWrapper>
            <NoAccessHistoryIconWrapper>
              <NoAccessHistoryIcon fill={theme.primary} />
            </NoAccessHistoryIconWrapper>
            <div className="title">وارد حساب کاربری خود نشده‌اید</div>
            <div className="message">
              برای اینکه بتوانید جزئیات سفارش مورد نظر را نشان کنید، باید به
              حساب کاربری خود وارد شوید.
            </div>
            <Link
              to="/account/login/"
              onClick={() => {
                setOriginUrl(location.pathname);
              }}
            >
              <SigninButton>
                <div className="signinButtonText">ورود به حساب کاربری</div>
              </SigninButton>
            </Link>
          </NoAccessWrapper>
        )}
        <OrderQrCodeModal
          show={showQrCodeModal}
          onHide={() => {
            setShowQrCodeModal(false);
          }}
          order={order}
        />
        {/* </StyledSwipeableDrawer> */}
      </OrderDetailsHistoryDrawerWrapper>
    </PageLayout>
  );
};

OrderDetailsHistory.propTypes = {
  clearSelectOrder: PropTypes.func.isRequired,
  getOrderByOrderId: PropTypes.func.isRequired,
  setOriginUrl: PropTypes.func.isRequired,
  setShowQrCodeModal: PropTypes.func.isRequired,
  setOrderDetailsSourceUrl: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  order: state.ordersHistory.order,
  theme: state.theme.theme,
  isAuthenticated: state?.auth?.isAuthenticated,
  userLoading: state?.auth?.loading,
  orderLoading: state.ordersHistory.loading,
  showQrCodeModal: state.ordersHistory.showQrCodeModal,
  onlinePaymentLoading: state.ordersHistory?.onlinePaymentLoading,
  orderDetailsSourceUrl: state.ordersHistory?.orderDetailsSourceUrl,
  originUrl: state.auth?.originUrl,
});
export default connect(mapStateToProps, {
  clearSelectOrder,
  getOrderByOrderId,
  setOriginUrl,
  onlinePay,
  setShowQrCodeModal,
  setOrderDetailsSourceUrl,
  getOrderByOrderIdForUpdateStatus,
})(withRouter(OrderDetailsHistory));
