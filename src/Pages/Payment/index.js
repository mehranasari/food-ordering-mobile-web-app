import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import { Formik } from "formik";
import jmoment from "moment-jalaali";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import { VenueTradingTimesConfig } from "../../Components/Venue/VenueTradingTimes/VenueTradingTimesConfig";
import { NameSpace } from "../../Routes/NameSpace";
//redux
import {
  filterCurrentVenueCartItems,
  validationDiscountCode,
  removeDiscountCode,
  setDiscountCode,
} from "../../Redux/action/cart";
import { getDistanceBetweenCustomerAndVenue } from "../../Redux/action/addresses";

//import components
import PageLayout from "../../Shared/PageLayout";
import Header from "../../Shared/Header";
import { FormInput } from "../../Shared/StyledInput";
import PayOrderSection from "../../Components/Payment/PayOrderSection";
import TableService from "../../Modals/tableService";
import SelectTimeForCollectionAndDelivery from "../../Modals/SelectTimeForCollectionAndDelivery";
import CreatingNewOrderLoading from "../../Components/Payment/CreatingNewOrderLoading";
import ContentLoading from "./ContentLoader";
import StaticAlert from "../../Shared/StaticAlert";
import OnlinePaymentLoading from "../../Components/Payment/OnlinePaymentLoading";

//utils
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";
import ConvertToSepratedDigitWithComma from "../../Utils/method/ConvertToSepratedDigitWithComma";
import Constants from "../../Utils/constants";

import {
  PaymentPageWrapper,
  PaymentPageBody,
  OrderTypeMethod,
  OrderTypeIconAndTitle,
  OrderType,
  ChangeButton,
  OrderTypeWrapper,
  InvoiceContainer,
  TotalPrice,
  UserMessage,
  Form,
  TotalDiscount,
  OrderDeliveryMessage,
  StaticAlertContainer,
  TippingOptionsContainer,
  TippingOption,
  CustomPriceInputWrapper,
  CustomPriceInput,
  TippingOptionWrapper,
  TippingAccordion,
  TippingAccordionSummary,
  TippingBody,
  TippingAccordionWrapper,
  DiscountCodeAccordionWrapper,
  DiscountCodeAccordion,
  DiscountCodeAccordionSummary,
  DiscountCodeBody,
  DiscountCodeOptionsContainer,
  CustomDiscountCodeInput,
  CustomDiscountCodeInputWrapper,
  ApplyDiscountCodeButton,
  LoadingIconWrapper,
  RemoveDiscountCodeButton,
  NotSuccessfulApplyDiscountCode,
  SuccessfulApplyDiscountCode,
  CircularCancelWrapper,
} from "./styles.jsx";
//icons
import WarningIcon from "../../Assets/icons/WarningIcon.jsx";
import CheckIcon from "../../Assets/icons/CheckIcon.jsx";
import TableServiceIcon from "../../Assets/icons/TableServiceIcon.jsx";
import CollectionServiceIcon from "../../Assets/icons/CollectionServiceIcon.jsx";
import NextStepIconOnPaymentPage from "../../Assets/icons/NextStepIconOnPaymentPage.jsx";
import EditIcon from "../../Assets/icons/EditIcon.jsx";
import DownArrow from "../../Assets/icons/DownArrow.jsx";
import AddIcon from "../../Assets/icons/AddIcon.jsx";
import LoadingIcon from "../../Assets/icons/LoadingIcon.jsx";
import CircularCancelIcon from "../../Assets/icons/CircularCancelIcon.jsx";
import DeliveryServiceIcon from "../../Assets/icons/DeliveryServiceIcon.jsx";

const Payment = (props) => {
  const {
    getDistanceBetweenCustomerAndVenue,
    filterCurrentVenueCartItems,

    auth: { user },
    venue: { venue, loading },
    cart: {
      currentVenueCart,
      allVenuesCartItems,
      discountCode,
      acceptedDiscounts,
      discountCodeValidationCode,
    },
    orderType: { orderType },
    setting,
    newOrderLoading,
    onlinePaymentLoading,
    theme,
    onlinePayMethod,
    validationDiscountCode,
    removeDiscountCode,
    setDiscountCode,
    addressesState: { selectedAddress, distanceBetweenCustomerAndVenue },
    onlineWalletAsset,
    
  } = props;
  const history = useHistory();
  const pickUpTypes =
    setting?.venueOrderSettings?.orderSettings?.collectionService?.pickUpTypes;
  const deliveryTypes =
    setting?.venueOrderSettings?.orderSettings?.deliveryService?.deliveryTypes;
  const tradingTimes =
    setting?.venueOrderSettings?.orderSettings?.general?.tradingTimes;
  const venueTipping =
    setting?.venueOrderSettings?.orderSettings?.general?.tipping;
  const selectedDay = VenueTradingTimesConfig.filter(
    (day) => day.key === new Date().getDay()
  )?.[0]?.value;
  const today = new Date();
  const validTimes =
    tradingTimes?.[selectedDay].filter(
      (item) =>
        item.status &&
        (new Date(item.availableTo).getHours() > today.getHours() ||
          (new Date(item.availableTo).getHours() === today.getHours() &&
            new Date(item.availableTo).getMinutes() > today.getMinutes()))
    ) || [];
  const originUrl =
    localStorage.getItem("originUrl") === "undefined"
      ? undefined
      : JSON.parse(localStorage.getItem("originUrl"));
  const tippingActiveOptionsCount = venueTipping?.options?.reduce(
    (preVal, curVal) => {
      if (curVal?.status) return ++preVal;
      else return preVal;
    },
    0
  );
  const dynamicCourierFee =
    setting.venueOrderSettings?.orderSettings?.deliveryService
      ?.dynamicCourierFee;
  const totalCourierFee =
    orderType === Constants.orderType.DELIVERY_SERVICE &&
    dynamicCourierFee?.status
      ? Math.ceil(distanceBetweenCustomerAndVenue) *
        dynamicCourierFee?.feePerKilometer
      : 0;
  const [tipping, setTipping] = useState({
    type: venueTipping?.defaultOption,
    value: 0,
  });
  const [getVenueFromApisuccessfuly, setGetVenueFromApisuccessfuly] =
    useState(false);
  const [totalPrice, setTotalPrice] = useState(null);
  const [tableServiceDetails, setTableServiceDetails] = useState(null);
  const [showTableServicePopup, setShowTableServicePopup] = useState(false);
  const [collectionServiceDetails, setCollectionServiceDetails] = useState({
    pickUpTime: undefined,
    type: pickUpTypes?.quickPickUp?.status
      ? Constants.pickUpType.QUICK_PICKUP
      : Constants.pickUpType.SPECIFIC_TIME_PICKUP,
  });
  const [deliveryServiceDetails, setDeliveryServiceDetails] = useState({
    deliveryTime: undefined,
    type: deliveryTypes?.quickDelivery?.status
      ? Constants.deliveryType.QUICK_DELIVERY
      : Constants.deliveryType.SPECIFIC_TIME_DELIVERY,
    addressId: selectedAddress?._id,
  });

  const [showSelectTimePopup, setShowSelectTimePopup] = useState(false);

  useEffect(() => {
    if (venue) {
      if (originUrl.includes(NameSpace.unsuccessfulPay) && !onlinePaymentLoading) {
        history.push(NameSpace.unsuccessfulPay);
      }
      setGetVenueFromApisuccessfuly(true);
    }
    window.scrollTo(0, 0);
  }, [venue]);
  useEffect(() => {
    if (
      venue &&
      orderType === Constants?.orderType.DELIVERY_SERVICE &&
      !distanceBetweenCustomerAndVenue
    ) {
      getDistanceBetweenCustomerAndVenue({
        location: selectedAddress?.location,
      });
    }
  }, [selectedAddress, venue]);

  useEffect(() => {
    if (setting?.venueOrderSettings?.orderSettings) {
      calculateTotalPrice();

      orderType === Constants.orderType.COLLECTION_SERVICE &&
        setCollectionServiceDetails({
          pickUpTime: undefined,
          type: pickUpTypes?.quickPickUp?.status
            ? Constants.pickUpType.QUICK_PICKUP
            : Constants.pickUpType.SPECIFIC_TIME_PICKUP,
        });
      orderType === Constants.orderType.DELIVERY_SERVICE &&
        setDeliveryServiceDetails({
          ...deliveryServiceDetails,
          deliveryTime: undefined,
          type: deliveryTypes?.quickDelivery?.status
            ? Constants.deliveryType.QUICK_DELIVERY
            : Constants.deliveryType.SPECIFIC_TIME_DELIVERY,
        });
    }
    if (
      ((orderType === Constants.orderType.COLLECTION_SERVICE &&
        !pickUpTypes?.quickPickUp?.status) ||
        (orderType === Constants.orderType.DELIVERY_SERVICE &&
          !deliveryTypes?.quickDelivery?.status)) &&
      validTimes.length !== 0
    ) {
      setShowSelectTimePopup(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setting?.venueOrderSettings?.orderSettings]);



  useEffect(() => {
    getVenueFromApisuccessfuly &&
      filterCurrentVenueCartItems(venue && venue._id, orderType);

    if (
      orderType === Constants.orderType.TABLE_SERVICE &&
      tableServiceDetails === null
    ) {
      setShowTableServicePopup(true);
    }

    if (
      orderType === Constants.orderType.COLLECTION_SERVICE &&
      (collectionServiceDetails?.type ===
        Constants.pickUpType.SPECIFIC_TIME_PICKUP ||
        !pickUpTypes?.quickPickUp?.status) &&
      validTimes.length !== 0
    ) {
      setShowSelectTimePopup(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getVenueFromApisuccessfuly, allVenuesCartItems]);

  //Table Service Selection Popup
  const tableServiceSelectionPopUp = (item) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowTableServicePopup(true);
  };
  const closeTableServiceSelectionPopUp = () => {
    setShowTableServicePopup(false);
  };

  //SelectTimeForCollectionServiceAndDeliverySerive Selection Popup
  const timeSelectionPopUp = (item) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowSelectTimePopup(true);
  };
  const closeCollectionSelectionPopUp = () => {
    setShowSelectTimePopup(false);
  };

  const tableNumberHandler = (selectedTableNumber) => {
    setCollectionServiceDetails(null);
    setTableServiceDetails(selectedTableNumber);
  };

  const pickupTimeHandler = (type, pickUpTime = undefined) => {
    setTableServiceDetails(null);
    setDeliveryServiceDetails(null);
    setCollectionServiceDetails({ pickUpTime, type });
  };
  const deliveryTimeHandler = (type, deliveryTime = undefined) => {
    setTableServiceDetails(null);
    setCollectionServiceDetails(null);
    setDeliveryServiceDetails({
      ...deliveryServiceDetails,
      deliveryTime,
      type,
    });
  };

  //Redirect if Order Type doesn't set
  if (
    getVenueFromApisuccessfuly &&
    (orderType === null ||
      !allVenuesCartItems.find(
        (cartItem) => cartItem.orderType === orderType
      ) ||
      !venue?.isOpen)
  ) {
    history.push(NameSpace.url);
    // return window.location.assign(`${process.env.REACT_APP_SSL_PROTOCOL}://${venue.url}.${process.env.REACT_APP_DOMAIN_URL}`);
  }

  const computTipping = (value, price) => {
    if (value === "zero") return 0;
    else if (value === "roundUp") {
      const total = Math.ceil(price);
      const ceiledTotal = Math.ceil(total / 1000) * 1000;
      return ceiledTotal - total;
    } else if (value === "customValue") return "0";
    else return Math.ceil((Math.ceil(price) / 100) * value);
  };

  const computeTotalPrice = () => {
    const totalPriceAndCourierFee = totalPrice + totalCourierFee;
    if (venueTipping?.status) {
      if (typeof tipping.value === "number") {
        return Math.ceil(totalPriceAndCourierFee) + tipping.value;
      } else if (isNaN(parseInt(tipping.value.replaceAll(",", ""))))
        return Math.ceil(totalPriceAndCourierFee);
      else
        return (
          Math.ceil(totalPriceAndCourierFee) +
          parseInt(tipping.value.replaceAll(",", ""))
        );
    } else {
      return Math.ceil(totalPriceAndCourierFee);
    }
  };

  //Calculate Total Price
  const calculateTotalPrice = () => {
    let fees =
      setting?.venueOrderSettings?.orderSettings[
        orderType === Constants.orderType.TABLE_SERVICE
          ? "tableService"
          : orderType === Constants.orderType.COLLECTION_SERVICE
          ? "collectionService"
          : "deliveryService"
      ].fees;

    let firstValueFees = fees[0]?.status
      ? fees[0]?.type === Constants.fees.TOMAN
        ? fees[0]?.amount
        : (currentVenueCart?.cartPrice * fees[0].amount) / 100
      : 0;

    let finalFees = fees.reduce(
      (previousValue, currentValue) =>
        previousValue +
        (currentValue?.status
          ? currentValue?.type === Constants.fees.TOMAN
            ? currentValue?.amount
            : (currentVenueCart?.cartPrice * currentValue.amount) / 100
          : 0),
      firstValueFees
    );
    finalFees = finalFees - firstValueFees;
    let totalPrice = currentVenueCart?.cartPrice + finalFees;
    const defaultOptionValue = venueTipping?.options?.filter(
      (item) => item.id === venueTipping?.defaultOption
    )?.[0]?.value;
    setTipping({
      type: venueTipping?.defaultOption,
      value: computTipping(defaultOptionValue, totalPrice),
    });
    setTotalPrice(totalPrice);
  };
  return loading ||
    venue === null ||
    setting.venueOrderSettings.loading ||
    setting.venueOrderSettings.orderSettings === null ? (
    <ContentLoading theme={theme} />
  ) : onlinePaymentLoading ? (
    <OnlinePaymentLoading onlinePayMethod={onlinePayMethod} />
  ) : newOrderLoading ? (
    <CreatingNewOrderLoading />
  ) : (
    <PageLayout>
      <Formik initialValues={{ note: "" }}>
        {(props) => {
          const { values, handleSubmit, setFieldValue } = props;
          return (
            <PaymentPageWrapper>
              <Header
                position={"fixed"}
                previousPage={"/menu/"}
                fill={theme.color_text_primary}
                menu={true}
                pageTitle={"بررسی و پرداخت"}
                // venueLogo={true}
                backgroundColor={theme.color_background_primary}
              />
              <PaymentPageBody>
                <OrderTypeMethod>
                  <div className="orderTypeMethodTitle">نوع سفارش</div>
                  {orderType === Constants.orderType.TABLE_SERVICE && (
                    <>
                      <OrderTypeIconAndTitle>
                        <TableServiceIcon
                          fill={theme.primary}
                          stroke="#212121"
                        />
                        <div className="title">
                          {setting.venueOrderSettings?.orderSettings
                            ?.tableService?.label
                            ? setting.venueOrderSettings?.orderSettings
                                ?.tableService?.label
                            : "بر روی میز"}
                        </div>
                      </OrderTypeIconAndTitle>
                      <OrderType
                        onClick={tableServiceSelectionPopUp(true)}
                        tablenumber={tableServiceDetails?.tableNumber}
                      >
                        <OrderTypeWrapper>
                          {tableServiceDetails?.tableArea &&
                          tableServiceDetails?.tableArea !== null ? (
                            <>
                              <div className="selectedItemInfo">{`${tableServiceDetails?.tableArea} , ${tableServiceDetails?.tableName}`}</div>
                              <ChangeButton>
                                <span>تغییر</span>
                              </ChangeButton>
                            </>
                          ) : (
                            <>
                              <NextStepIconOnPaymentPage />
                              <div className="selectionTip">
                                شماره میز خود را انتخاب کنید
                              </div>
                              <div className="blankSpace" />
                            </>
                          )}
                        </OrderTypeWrapper>
                      </OrderType>
                    </>
                  )}
                  {
                    //****-----------------------Collection service-------------------------------------*****/
                    orderType === Constants.orderType.COLLECTION_SERVICE && (
                      <>
                        <OrderTypeIconAndTitle>
                          <CollectionServiceIcon
                            fill={theme.primary}
                            stroke={theme.color_text_primary}
                            backgroundColor={theme.color_background_primary}
                          />
                          <div className="title">
                            {setting.venueOrderSettings?.orderSettings
                              ?.collectionService?.label
                              ? setting.venueOrderSettings?.orderSettings
                                  ?.collectionService?.label
                              : "تحویل حضوری"}
                          </div>
                        </OrderTypeIconAndTitle>
                        {pickUpTypes.specificTimePickUp.status &&
                          validTimes?.length !== 0 && (
                            <OrderDeliveryMessage>
                              زمان تحویل سفارش خود را انتخاب کنید:
                            </OrderDeliveryMessage>
                          )}
                        {pickUpTypes.quickPickUp.status && (
                          <OrderType
                            pickuptime={
                              collectionServiceDetails?.type ===
                              Constants.pickUpType.QUICK_PICKUP
                                ? Constants.pickUpType.QUICK_PICKUP
                                : undefined
                            }
                            onClick={() =>
                              pickupTimeHandler(
                                Constants.pickUpType.QUICK_PICKUP
                              )
                            }
                          >
                            <div
                              className={
                                collectionServiceDetails?.type ===
                                Constants.pickUpType.QUICK_PICKUP
                                  ? "selectedItemInfo"
                                  : "selectionTip"
                              }
                            >
                              در سریعترین زمان ممکن
                            </div>
                            {collectionServiceDetails?.type ===
                              Constants.pickUpType.QUICK_PICKUP && (
                              <div className="checkButton">
                                <CheckIcon
                                  fill={theme.textColorOfPrimaryButtons}
                                />
                              </div>
                            )}
                          </OrderType>
                        )}

                        {tradingTimes &&
                          validTimes.length !== 0 &&
                          pickUpTypes.specificTimePickUp.status && (
                            <OrderType
                              onClick={timeSelectionPopUp(true)}
                              pickuptime={
                                collectionServiceDetails?.type !==
                                Constants.pickUpType.QUICK_PICKUP
                                  ? jmoment(
                                      collectionServiceDetails?.pickUpTime
                                    ).format("HH:mm")
                                  : undefined
                              }
                            >
                              <OrderTypeWrapper>
                                {collectionServiceDetails &&
                                collectionServiceDetails?.type !==
                                  Constants.pickUpType.QUICK_PICKUP &&
                                collectionServiceDetails?.pickUpTime !==
                                  undefined ? (
                                  <>
                                    <div
                                      className={
                                        collectionServiceDetails?.type !==
                                        Constants.pickUpType.QUICK_PICKUP
                                          ? "selectedItemInfo"
                                          : "selectionTip"
                                      }
                                    >
                                      <span> امروز ، ساعت</span>
                                      <span>
                                        {ConvertToPersianDigit(
                                          jmoment(
                                            collectionServiceDetails?.pickUpTime
                                          ).format("HH:mm")
                                        )}{" "}
                                      </span>
                                    </div>
                                    <ChangeButton>
                                      <span>تغییر</span>
                                    </ChangeButton>
                                    {collectionServiceDetails?.type !==
                                      Constants.pickUpType.QUICK_PICKUP && (
                                      <div className="checkButton">
                                        <CheckIcon
                                          fill={theme.textColorOfPrimaryButtons}
                                        />
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <div className="blankSpace" />
                                    <div
                                      className={
                                        collectionServiceDetails?.type !==
                                        Constants.pickUpType.QUICK_PICKUP
                                          ? "selectedItemInfo"
                                          : "selectionTip"
                                      }
                                    >
                                      انتخاب زمانی دیگر
                                    </div>
                                    <div className="blankSpace" />

                                    {collectionServiceDetails?.type !==
                                      Constants.pickUpType.QUICK_PICKUP && (
                                      <div className="checkButton">
                                        <CheckIcon
                                          fill={theme.textColorOfPrimaryButtons}
                                        />
                                      </div>
                                    )}
                                  </>
                                )}
                              </OrderTypeWrapper>
                            </OrderType>
                          )}

                        {!pickUpTypes.quickPickUp.status &&
                          validTimes?.length === 0 && (
                            <StaticAlertContainer>
                              <StaticAlert
                                text={
                                  "درحال حاضر انواع سرویس تحویل حضوری غیرفعال می‌باشد."
                                }
                                icon={<WarningIcon fill={theme.red1} />}
                                color={"red1"}
                                hasBgColor={false}
                              />
                            </StaticAlertContainer>
                          )}
                      </>
                    )
                  }

                  {
                    //*****------------------------Delivery Service---------------------------------------****/
                    orderType === Constants.orderType.DELIVERY_SERVICE && (
                      <>
                        <OrderTypeIconAndTitle>
                          <DeliveryServiceIcon
                            fill={theme.primary}
                            stroke={theme.color_text_primary}
                          />
                          <div className="title">
                            {setting.venueOrderSettings?.orderSettings
                              ?.deliveryService?.label
                              ? setting.venueOrderSettings?.orderSettings
                                  ?.deliveryService?.label
                              : "ارسال با پیک"}
                          </div>
                        </OrderTypeIconAndTitle>
                        {deliveryTypes.specificTimeDelivery.status &&
                          validTimes?.length !== 0 && (
                            <OrderDeliveryMessage>
                              زمان تحویل سفارش خود را انتخاب کنید:
                            </OrderDeliveryMessage>
                          )}
                        {deliveryTypes.quickDelivery.status && (
                          <OrderType
                            pickuptime={
                              deliveryServiceDetails?.type ===
                              Constants.deliveryType.QUICK_DELIVERY
                                ? Constants.deliveryType.QUICK_DELIVERY
                                : undefined
                            }
                            onClick={() =>
                              deliveryTimeHandler(
                                Constants.deliveryType.QUICK_DELIVERY
                              )
                            }
                          >
                            <div
                              className={
                                deliveryServiceDetails?.type ===
                                Constants.deliveryType.QUICK_DELIVERY
                                  ? "selectedItemInfo"
                                  : "selectionTip"
                              }
                            >
                              در سریعترین زمان ممکن
                            </div>
                            {deliveryServiceDetails?.type ===
                              Constants.deliveryType.QUICK_DELIVERY && (
                              <div className="checkButton">
                                <CheckIcon
                                  fill={theme.textColorOfPrimaryButtons}
                                />
                              </div>
                            )}
                          </OrderType>
                        )}

                        {tradingTimes &&
                          validTimes.length !== 0 &&
                          deliveryTypes.specificTimeDelivery.status && (
                            <OrderType
                              onClick={timeSelectionPopUp(true)}
                              pickuptime={
                                deliveryServiceDetails?.type !==
                                Constants.deliveryType.QUICK_DELIVERY
                                  ? jmoment(
                                      deliveryServiceDetails?.deliveryTime
                                    ).format("HH:mm")
                                  : undefined
                              }
                            >
                              <OrderTypeWrapper>
                                {deliveryServiceDetails &&
                                deliveryServiceDetails?.type !==
                                  Constants.deliveryType.QUICK_DELIVERY &&
                                deliveryServiceDetails?.deliveryTime !==
                                  undefined ? (
                                  <>
                                    <div
                                      className={
                                        deliveryServiceDetails?.type !==
                                        Constants.deliveryType.QUICK_DELIVERY
                                          ? "selectedItemInfo"
                                          : "selectionTip"
                                      }
                                    >
                                      <span> امروز ، ساعت</span>
                                      <span>
                                        {ConvertToPersianDigit(
                                          jmoment(
                                            deliveryServiceDetails?.deliveryTime
                                          ).format("HH:mm")
                                        )}{" "}
                                      </span>
                                    </div>
                                    <ChangeButton>
                                      <span>تغییر</span>
                                    </ChangeButton>
                                    {deliveryServiceDetails?.type !==
                                      Constants.deliveryType.QUICK_DELIVERY && (
                                      <div className="checkButton">
                                        <CheckIcon
                                          fill={theme.textColorOfPrimaryButtons}
                                        />
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <div className="blankSpace" />
                                    <div
                                      className={
                                        deliveryServiceDetails?.type !==
                                        Constants.deliveryType.QUICK_DELIVERY
                                          ? "selectedItemInfo"
                                          : "selectionTip"
                                      }
                                    >
                                      انتخاب زمانی دیگر
                                    </div>
                                    <div className="blankSpace" />

                                    {deliveryServiceDetails?.type !==
                                      Constants.deliveryType.QUICK_DELIVERY && (
                                      <div className="checkButton">
                                        <CheckIcon
                                          fill={theme.textColorOfPrimaryButtons}
                                        />
                                      </div>
                                    )}
                                  </>
                                )}
                              </OrderTypeWrapper>
                            </OrderType>
                          )}

                        {!deliveryTypes.quickDelivery.status &&
                          validTimes?.length === 0 && (
                            <StaticAlertContainer>
                              <StaticAlert
                                text={
                                  "درحال حاضر انواع سرویس ارسال با پیک غیرفعال می‌باشد."
                                }
                                icon={<WarningIcon fill={theme.red1} />}
                                color={"red1"}
                                hasBgColor={false}
                              />
                            </StaticAlertContainer>
                          )}
                      </>
                    )
                  }
                </OrderTypeMethod>

                {orderType === Constants?.orderType?.DELIVERY_SERVICE && (
                  <UserMessage>
                    <div className="userMessageTitle">نشانی</div>
                    <div>
                      {selectedAddress?.address +
                        " " +
                        selectedAddress?.details}
                    </div>
                  </UserMessage>
                )}

                <UserMessage>
                  <div className="userMessageTitle">توضیحات</div>
                  <Form autoComplete="OFF" onSubmit={handleSubmit}>
                    <FormInput
                      type="text"
                      onChange={(e) => setFieldValue("note", e.target.value)}
                      value={values.note}
                      name="note"
                      placeholder="توضیحات سفارش خود را اینجا بنویسید"
                    />
                  </Form>
                </UserMessage>

                {venueTipping?.status && (
                  <TippingAccordionWrapper>
                    <TippingAccordion>
                      <TippingAccordionSummary
                        expandIcon={
                          <DownArrow color={theme.color_icon_primary} />
                        }
                        aria-controls={`panel-dine-in-content`}
                        id={`panel-dine-in-header`}
                      >
                        <div className="userMessageTitle">
                          آیا می‌خواهید به کارکنان انعام بدهید؟
                        </div>
                      </TippingAccordionSummary>
                      <TippingBody>
                        <TippingOptionsContainer>
                          <div className="optionsBoxContainer">
                            {venueTipping?.options.map(
                              (option) =>
                                option.status &&
                                option.id !== "customValue" && (
                                  <TippingOptionWrapper
                                    key={option.id}
                                    status={
                                      option.status &&
                                      option.value !== "customValue"
                                    }
                                    boxCount={tippingActiveOptionsCount - 1}
                                  >
                                    <TippingOption
                                      isActive={option.id === tipping.type}
                                      onClick={() => {
                                        setTipping({
                                          type: option.id,
                                          value: computTipping(
                                            option.value,
                                            totalPrice
                                          ),
                                        });
                                      }}
                                    >
                                      <div className="title">
                                        {option.id.includes("Percent")
                                          ? ConvertToPersianDigit(
                                              option.value
                                            ) + "%"
                                          : option.value === "zero"
                                          ? "صفر"
                                          : "رند به بالا"}
                                      </div>
                                      <div className="count">
                                        {ConvertToPersianDigitWithComma(
                                          computTipping(
                                            option.value,
                                            totalPrice
                                          )
                                        )}
                                        <span>تومان</span>
                                      </div>
                                    </TippingOption>
                                  </TippingOptionWrapper>
                                )
                            )}
                          </div>

                          {venueTipping?.options?.[1]?.status && (
                            <Form autoComplete="OFF" onSubmit={handleSubmit}>
                              <CustomPriceInputWrapper
                                onClick={() =>
                                  setTipping({
                                    value:
                                      typeof tipping.value === "number"
                                        ? "0"
                                        : tipping.value,
                                    type: "customValue",
                                  })
                                }
                              >
                                <CustomPriceInput
                                  placeholder="یا مبلغ دلخواه خود را وارد کنید"
                                  inputMode="numeric"
                                  isActive={tipping.type === "customValue"}
                                  onChange={(e) => {
                                    setTipping({
                                      type: "customValue",
                                      value: e.target.value,
                                    });
                                  }}
                                  value={
                                    tipping.type === "customValue"
                                      ? ConvertToSepratedDigitWithComma(
                                          tipping.value
                                        )
                                      : ""
                                  }
                                  name="customValue"
                                />
                                <div className="detail">
                                  <span>تومان</span>
                                  <EditIcon stroke={theme.color_icon_primary} />
                                </div>
                              </CustomPriceInputWrapper>
                            </Form>
                          )}
                        </TippingOptionsContainer>
                      </TippingBody>
                    </TippingAccordion>
                  </TippingAccordionWrapper>
                )}

                {/* <DiscountCodeAccordionWrapper>
                  <DiscountCodeAccordion>
                    <DiscountCodeAccordionSummary
                      expandIcon={<DownArrow />}
                      aria-controls={`panel-dine-in-content`}
                      id={`panel-dine-in-header`}
                    >
                      <div className="userMessageTitle">
                        آیا کد تخفیف دارید؟
                      </div>
                    </DiscountCodeAccordionSummary>
                    <DiscountCodeBody>
                      <DiscountCodeOptionsContainer>
                        <CustomDiscountCodeInputWrapper
                        >
                          <CustomDiscountCodeInput
                            placeholder="کد تخفیف خود را وارد کنید"
                            onChange={(e) => {
                              setDiscountCode(e.target?.value);
                            }}
                            value={discountCode?.value}
                            error={discountCode?.errorMessage}
                            name="discountCode"
                          />
                          {discountCodeValidationCode ? (
                            <LoadingIconWrapper className="loading">
                              <LoadingIcon />
                            </LoadingIconWrapper>
                          ) : discountCode?.errorMessage ? (
                            <CircularCancelWrapper
                              onClick={() => setDiscountCode("")}
                            >
                              <CircularCancelIcon />
                            </CircularCancelWrapper>
                          ) : (
                            <ApplyDiscountCodeButton
                              className="apply-discount"
                              onClick={() => {
                                validationDiscountCode(discountCode?.value);
                              }}
                            >
                              <span>ثبت</span>
                            </ApplyDiscountCodeButton>
                          )}
                        </CustomDiscountCodeInputWrapper>
                      </DiscountCodeOptionsContainer>
                      {discountCode?.errorMessage && (
                        <NotSuccessfulApplyDiscountCode>
                          {discountCode?.errorMessage}
                        </NotSuccessfulApplyDiscountCode>
                      )}
                      {acceptedDiscounts?.map((code) => (
                        <SuccessfulApplyDiscountCode key={code}>
                          <div>
                            کد
                            <span className="bold">{code}</span>
                            با موفقیت اعمال شده
                          </div>
                          <RemoveDiscountCodeButton
                            onClick={() => removeDiscountCode(code)}
                          >
                            حذف
                          </RemoveDiscountCodeButton>
                        </SuccessfulApplyDiscountCode>
                      ))}
                    </DiscountCodeBody>
                  </DiscountCodeAccordion>
                </DiscountCodeAccordionWrapper> */}

                <InvoiceContainer>
                  <TotalPrice>
                    <div className="totalPriceText">قابل پرداخت</div>
                    <div className="totalPriceNumber">
                      {currentVenueCart?.cartPrice &&
                        ConvertToPersianDigitWithComma(computeTotalPrice())}
                      <span className="costCurrency"> تومان</span>
                    </div>
                  </TotalPrice>

                  <TotalPrice>
                    <div className="PriceText">جمع کل آیتم‌ها</div>
                    <div className="PriceNumber">
                      {currentVenueCart?.cartPrice &&
                        ConvertToPersianDigitWithComma(
                          Math.ceil(
                            currentVenueCart?.cartPrice
                            // currentVenueCart?.cartDiscount
                          )
                        )}
                      <span className="costCurrency"> تومان</span>
                    </div>
                  </TotalPrice>

                  {currentVenueCart?.cartDiscount !== 0 && (
                    <TotalDiscount>
                      <div className="totalDiscountText">جمع کل تخفیف</div>
                      <div className="totalDiscountNumber">
                        {ConvertToPersianDigitWithComma(
                          currentVenueCart?.cartDiscount
                        )}
                        <span className="costCurrency"> تومان</span>
                      </div>
                    </TotalDiscount>
                  )}
                  {totalCourierFee !== 0 && (
                    <TotalDiscount>
                      <div className="totalDiscountText"> پیک</div>
                      <div className="PriceNumber">
                        {ConvertToPersianDigitWithComma(totalCourierFee)}
                        <span className="costCurrency"> تومان</span>
                      </div>
                    </TotalDiscount>
                  )}
                  {venueTipping.status && (
                    <TotalDiscount>
                      <div className="totalDiscountText"> انعام </div>
                      <div className="PriceNumber">
                        {tipping.value === ""
                          ? "۰"
                          : ConvertToPersianDigitWithComma(tipping.value)}
                        <span className="costCurrency"> تومان</span>
                      </div>
                    </TotalDiscount>
                  )}
                  {setting?.venueOrderSettings?.orderSettings[
                    orderType === Constants.orderType.TABLE_SERVICE
                      ? "tableService"
                      : orderType === Constants.orderType.COLLECTION_SERVICE
                      ? "collectionService"
                      : "deliveryService"
                  ].fees.map((fee) => {
                    return (
                      fee.status && (
                        <TotalPrice key={fee._id}>
                          {fee.type === Constants.fees.TOMAN ? (
                            <>
                              <div className="PriceText">{fee.name}</div>
                              <div className="PriceNumber">
                                {ConvertToPersianDigitWithComma(
                                  Math.ceil(fee.amount)
                                )}
                                <span className="costCurrency"> تومان</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="PriceText">
                                {fee.name}
                                <span>
                                  {" "}
                                  (%{ConvertToPersianDigitWithComma(fee.amount)}
                                  )
                                </span>
                              </div>
                              <div className="PriceNumber">
                                {ConvertToPersianDigitWithComma(
                                  Math.ceil(
                                    (currentVenueCart?.cartPrice * fee.amount) /
                                      100
                                  )
                                )}
                                <span className="costCurrency"> تومان</span>
                              </div>
                            </>
                          )}
                        </TotalPrice>
                      )
                    );
                  })}
                </InvoiceContainer>
              </PaymentPageBody>

              <PayOrderSection
                orderType={orderType && orderType}
                orderDetails={
                  orderType === Constants.orderType.TABLE_SERVICE
                    ? tableServiceDetails
                    : orderType === Constants.orderType.COLLECTION_SERVICE
                    ? collectionServiceDetails
                    : deliveryServiceDetails
                }
                items={currentVenueCart?.items}
                venueId={venue?._id}
                customerId={user?._id}
                customerNote={values.note}
                tippingOption={venueTipping.status ? tipping : null}
                computeTotalPrice={computeTotalPrice}
                paymentMethods={
                  orderType === Constants.orderType.TABLE_SERVICE
                    ? setting.venueOrderSettings.orderSettings.tableService
                        .paymentMethods
                    : orderType === Constants.orderType.COLLECTION_SERVICE
                    ? setting.venueOrderSettings.orderSettings.collectionService
                        .paymentMethods
                    : setting.venueOrderSettings.orderSettings.deliveryService
                        .paymentMethods
                }
              />
            </PaymentPageWrapper>
          );
        }}
      </Formik>
      <TableService
        show={showTableServicePopup}
        onHide={closeTableServiceSelectionPopUp}
        tableNumberHandler={tableNumberHandler}
        tableServiceOrderSettings={
          setting.venueOrderSettings.orderSettings.tableService
        }
      />

      <SelectTimeForCollectionAndDelivery
        show={showSelectTimePopup}
        onHide={closeCollectionSelectionPopUp}
        validTimes={validTimes}
        selectTimeHandler={
          orderType === Constants?.orderType?.COLLECTION_SERVICE
            ? pickupTimeHandler
            : deliveryTimeHandler
        }
        orderType={orderType}
        selectedTime={
          orderType === Constants?.orderType?.COLLECTION_SERVICE
            ? collectionServiceDetails?.pickUpTime
            : deliveryServiceDetails?.deliveryTime
        }
      />
    </PageLayout>
  );
};

Payment.propTypes = {
  auth: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  venue: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  filterCurrentVenueCartItems: PropTypes.func.isRequired,
  setDiscountCode: PropTypes.func.isRequired,
  removeDiscountCode: PropTypes.func.isRequired,
  validationDiscountCode: PropTypes.func.isRequired,
  getDistanceBetweenCustomerAndVenue: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  venue: state.venue,
  cart: state.cart,
  orderType: state.orderType,
  setting: state.setting,
  newOrderLoading: state.ordersHistory.newOrderLoading,
  onlinePaymentLoading: state.ordersHistory.onlinePaymentLoading,
  onlinePayMethod: state.ordersHistory.onlinePayMethod,
  theme: state.theme.theme,
  addressesState: state.addresses,
  onlineWalletAsset: state.userProfile?.onlineWalletAsset,

});

export default connect(mapStateToProps, {
  filterCurrentVenueCartItems,
  validationDiscountCode,
  removeDiscountCode,
  setDiscountCode,
  getDistanceBetweenCustomerAndVenue,
})(withRouter(Payment));
