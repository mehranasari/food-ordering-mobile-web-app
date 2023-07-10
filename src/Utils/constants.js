import React from "react";
import CancelIcon from "../Assets/icons/CancelIcon.jsx";
import CheckIcon from "../Assets/icons/CheckIcon.jsx";

const Constants = {
  orderType: {
    TABLE_SERVICE: "TABLE_SERVICE",
    COLLECTION_SERVICE: "COLLECTION_SERVICE",
    DELIVERY_SERVICE: "DELIVERY_SERVICE",
  },
  fees: {
    TOMAN: "TOMAN",
    PERCENT: "PERCENT",
  },
  paymentMethod: {
    CASH: "CASH",
    BANK_CARD: "BANK_CARD",
    ZIBAL: "ZIBAL",
    NEXT_PAY: "NEXT_PAY",
    ONLINE_WALLET: "ONLINE_WALLET",
  },
  pickUpType: {
    QUICK_PICKUP: "QUICK_PICKUP",
    SPECIFIC_TIME_PICKUP: "SPECIFIC_TIME_PICKUP",
  },
  deliveryType: {
    QUICK_DELIVERY: "QUICK_DELIVERY",
    SPECIFIC_TIME_DELIVERY: "SPECIFIC_TIME_DELIVERY",
  },
  peymenetTime: {
    AFTER_FINISHING_ORDER: "AFTER_FINISHING_ORDER",
    BEFORE_ORDER_CONFIRMATION: "BEFORE_ORDER_CONFIRMATION",
  },
  orderStatus: {
    AWAITING_ACCEPT: {
      value: "AWAITING_ACCEPT",
      title: " در انتظار تایید",
      textColor: "awaitingAcceptText",
      bgColor: "awaitingAcceptBg",
      progressPercent: 25,
    },
    ACCEPTED: {
      value: "ACCEPTED",
      title: " تایید شده",
      textColor: "acceptedText",
      bgColor: "acceptedBg",
      progressPercent: 33,
    },
    PREPARING: {
      value: "PREPARING",
      title: " در حال آماده سازی",
      textColor: "preparingText",
      bgColor: "preparingBg",
      progressPercent: 50,
    },

    READY_FOR_PICKUP: {
      value: "READY_FOR_PICKUP",
      title: " آماده جهت تحویل",
      textColor: "readyText",
      bgColor: "readyBg",
      progressPercent: 75,
    },
    DECLINED: {
      value: "DECLINED",
      title: " رد شده",
      textColor: "declinedText",
      bgColor: "declinedBg",
      progressPercent: 100,
      icon: <CancelIcon fill={"white"} width={"5"} height={"5"} />,
    },
    FINISHED: {
      value: "FINISHED",
      title: " تحویل شده",
      textColor: "finishedText",
      bgColor: "finishedBg",
      progressPercent: 100,
      icon: <CheckIcon fill={"white"} width={"8"} height={"5"} />,
    },
    CANCELED: {
      value: "CANCELED",
      title: " لغو شده",
      textColor: "canceledText",
      bgColor: "canceledBg",
      progressPercent: 100,
      icon: <CancelIcon fill={"white"} width={"5"} height={"5"} />,
    },
    AWAITING_PAY: {
      value: "AWAITING_PAY",
      title: "در انتظار پرداخت",
      textColor: "awaitingPayText",
      bgColor: "awaitingPayBg",
      progressPercent: 10,
    },
    DECLINED_AND_REFUNDED: {
      value: "DECLINED_AND_REFUNDED",
      title: "رد و بازپرداخت شده  ",
      textColor: "declinedAndRefundedText",
      bgColor: "declinedAndRefundedBg",
      progressPercent: 100,
      icon: <CancelIcon fill={"white"} width={"5"} height={"5"} />,
    },
    SEND_BY_COURIER: {
      value: "SEND_BY_COURIER",
      title: "ارسال با پیک",
      textColor: "sendingDeliveryText",
      bgColor: "sendingDeliveryBg",
      progressPercent: 75,
    },
  },
  paymentMethodsTitle: {
    ZIBAL: "درگاه آنلاین زیبال",
    NEXT_PAY: "درگاه آنلاین نکست پی",
    CASH: "نقدی",
    BANK_CARD: "کارت بانکی",
    IN_PERSON: "صندوق",
    ONLINE_WALLET: "کیف پول ",
  },
  orderTypesTitle: {
    TABLE_SERVICE: "بر روی میز",
    COLLECTION_SERVICE: "تحویل حضوری",
    DELIVERY_SERVICE: "ارسال با پیک",
  },
  cartCashTime: 24 * 60 * 60 * 1000,
};

export default Constants;
