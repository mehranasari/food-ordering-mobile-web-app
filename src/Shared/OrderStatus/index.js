import React from "react";
import styled from "styled-components";
import { Row } from "../../Kit/Row";
import Constants from "../../Utils/constants";

export const OrderStatusContainer = styled(Row)`
  padding: 5px 0.625rem;
  background: ${(props) => props.theme[props.bgColor]};
  border-radius: 56px;
  color: ${(props) => props.theme[props.textColor]};
  width: fit-content;
`;

const OrderStatus = ({ order }) => {
  const isOnlinePay = order?.paymentMethod === Constants.paymentMethod.ZIBAL ||order?.paymentMethod === Constants.paymentMethod.NEXT_PAY;
  const isAwaitingPay =
    (isOnlinePay ||
      order?.paymentTime ===
        Constants.peymenetTime.BEFORE_ORDER_CONFIRMATION) &&
    order.paymentStatus === "AWAITING_PAY"
      ? true
      : false;

  const prepTime = order?.prepTime * 60 * 1000;
  //handle  order status for collection service order
  const isAccepted =
    (order?.orderType === Constants?.orderType?.COLLECTION_SERVICE ||
      order?.orderType === Constants?.orderType?.DELIVERY_SERVICE) &&
    (order?.orderDetails?.type === Constants.pickUpType.SPECIFIC_TIME_PICKUP ||
      order?.orderDetails?.type ===
        Constants.deliveryType.SPECIFIC_TIME_DELIVERY) &&
    order?.orderStatus === "PREPARING"
      ? new Date(order?.orderDetails?.time).getTime() - new Date().getTime() >
        prepTime
      : false;

  return (
    <OrderStatusContainer
      bgColor={
        isAwaitingPay
          ? Constants?.orderStatus?.AWAITING_PAY?.bgColor
          : isAccepted
          ? Constants?.orderStatus?.ACCEPTED?.bgColor
          : Constants?.orderStatus?.[order?.orderStatus]?.bgColor
      }
      textColor={
        isAwaitingPay
          ? Constants?.orderStatus?.AWAITING_PAY?.textColor
          : isAccepted
          ? Constants?.orderStatus?.ACCEPTED?.textColor
          : Constants?.orderStatus?.[order?.orderStatus]?.textColor
      }
    >
      {isAwaitingPay
        ? Constants?.orderStatus?.AWAITING_PAY?.title
        : isAccepted
        ? Constants?.orderStatus?.ACCEPTED?.title
        : Constants?.orderStatus[order?.orderStatus]?.title}
    </OrderStatusContainer>
  );
};

export default OrderStatus;
