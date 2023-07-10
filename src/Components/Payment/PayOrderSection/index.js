import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import jmoment from "moment-jalaali";
import ConvertToPersianDigit from "../../../Utils/method/ConvertToPersianDigit";
import Constants from "../../../Utils/constants";
import PaymentOption from "../../../Modals/paymentOption";

//import styles
import {
  ViewMenuButton,
  PayOrderWrapper,
  PayOrderButton,
  ServiceMethodWrapper,
} from "./styles.jsx";

const PayOrderSection = ({
  orderType,
  orderDetails,
  items,
  customerNote,
  tippingOption,
  computeTotalPrice,
  customerId,
  venueId,
  paymentMethods,
}) => {
  // New Order Object Items
  const [newOrderObjectItems, setNewOrderObjectItems] = useState(null);

  // New Order Object
  const [newOrderObject, setNewOrderObject] = useState(null);

  //Payment Option Selection Popup
  const [showPaymentOptionPopUp, setShowPaymentOptionPopUp] = useState(false);

  let totalPrice = computeTotalPrice();

  useEffect(() => {
    creatingNewOrderObjectItems();
  }, []);

  const closePaymentOptionPopUp = () => {
    setShowPaymentOptionPopUp(false);
  };

  //Create new Order Object Items
  const creatingNewOrderObjectItems = () => {
    let newItems = items.map((item) => {
      return {
        _id: item?._id,
        quantity: item?.quantity,
        priceId: item?.itemPrice?._id,
        extraItems: item?.selectedExtraItems?.map((extra) => {
          return {
            _id: extra?.extraId,
            quantity: extra?.quantity,
            extraPriceId: extra?._id,
            extraGroupId: extra?.extraGroupId,
          };
        }),
        preferenceItems: item?.selectedPreferenceItems?.map((preference) => {
          return {
            _id: preference?._id,
            quantity: preference?.quantity,
            preferenceGroupId: preference?.preferenceGroupId,
          };
        }),
      };
    });
    setNewOrderObjectItems(newItems);
  };

  //Create new Order Object
  const creatingNewOrderObject = () => {
    setShowPaymentOptionPopUp(true);
    setNewOrderObject({
      venueId: venueId,
      orderType: orderType,
      orderDetails: orderDetails,
      customer: {
        customerId: customerId,
        note: customerNote,
      },
      items: newOrderObjectItems,
      tippingOption: tippingOption,
    });
  };
  return (
    <>
      {orderType === Constants.orderType.COLLECTION_SERVICE && (
        <>
          {orderDetails?.type === Constants.pickUpType.QUICK_PICKUP ? (
            <PayOrderWrapper>
              <PayOrderButton onClick={creatingNewOrderObject}>
                <div className="payOrderButtonText">پرداخت سفارش</div>
              </PayOrderButton>
              <ServiceMethodWrapper>
                <div className="serviceMethodText">تحویل </div>
                <div className="serviceMethodDetail">در سریعترین زمان ممکن</div>
              </ServiceMethodWrapper>
            </PayOrderWrapper>
          ) : orderDetails?.pickUpTime ? (
            <PayOrderWrapper>
              <PayOrderButton onClick={creatingNewOrderObject}>
                <div className="payOrderButtonText">پرداخت سفارش</div>
              </PayOrderButton>
              <ServiceMethodWrapper>
                <div className="serviceMethodText">تحویل </div>
                <div className="serviceMethodDetail">
                  {" "}
                  امروز، ساعت{" "}
                  {ConvertToPersianDigit(
                    jmoment(orderDetails.pickUpTime).format("HH:mm")
                  )}
                </div>
              </ServiceMethodWrapper>
            </PayOrderWrapper>
          ) : (
            <ViewMenuButton>
              <div className="viewMenuButtonText">
                هنوز زمان تحویل سفارش را انتخاب نکرده‌اید!
              </div>
            </ViewMenuButton>
          )}
        </>
      )}
      {orderType === Constants.orderType.DELIVERY_SERVICE && (
        <>
          {orderDetails?.type === Constants.deliveryType.QUICK_DELIVERY ? (
            <PayOrderWrapper>
              <PayOrderButton onClick={creatingNewOrderObject}>
                <div className="payOrderButtonText">پرداخت سفارش</div>
              </PayOrderButton>
              <ServiceMethodWrapper>
                <div className="serviceMethodText">تحویل </div>
                <div className="serviceMethodDetail">در سریعترین زمان ممکن</div>
              </ServiceMethodWrapper>
            </PayOrderWrapper>
          ) : //specific time
          //time is selected
          orderDetails?.deliveryTime ? (
            <PayOrderWrapper>
              <PayOrderButton onClick={creatingNewOrderObject}>
                <div className="payOrderButtonText">پرداخت سفارش</div>
              </PayOrderButton>
              <ServiceMethodWrapper>
                <div className="serviceMethodText">تحویل </div>
                <div className="serviceMethodDetail">
                  {" "}
                  امروز، ساعت{" "}
                  {ConvertToPersianDigit(
                    jmoment(orderDetails.deliveryTime).format("HH:mm")
                  )}
                </div>
              </ServiceMethodWrapper>
            </PayOrderWrapper>
          ) : (
            //time is not selected
            <ViewMenuButton>
              <div className="viewMenuButtonText">
                {" "}
                هنوز زمان تحویل سفارش را انتخاب نکرده‌اید!
              </div>
            </ViewMenuButton>
          )}
        </>
      )}
      {orderType === Constants.orderType.TABLE_SERVICE && (
        <>
          {orderDetails !== null ? (
            <PayOrderWrapper>
              <PayOrderButton onClick={creatingNewOrderObject}>
                <div className="payOrderButtonText">پرداخت سفارش</div>
              </PayOrderButton>
              <ServiceMethodWrapper>
                <div className="serviceMethodText">بر روی میز </div>
                <div className="serviceMethodDetail">
                  {" "}
                  {orderDetails.tableArea} , {orderDetails.tableName}
                </div>
              </ServiceMethodWrapper>
            </PayOrderWrapper>
          ) : (
            <ViewMenuButton>
              <div className="viewMenuButtonText">
                {" "}
                هنوز شماره میز خود را انتخاب نکرده‌اید!
              </div>
            </ViewMenuButton>
          )}
        </>
      )}
      <PaymentOption
        show={showPaymentOptionPopUp}
        onHide={closePaymentOptionPopUp}
        totalPrice={totalPrice}
        newOrderObject={newOrderObject}
        paymentMethods={paymentMethods}
      />
    </>
  );
};

PayOrderSection.propTypes = {};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(PayOrderSection);
