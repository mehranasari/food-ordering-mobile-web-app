import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NameSpace } from "../../Routes/NameSpace";
import OrderStatusProgress from "../../Shared/OrderStatusProgress";
import { Col } from "../../Kit/Column";
import Constants from "../../Utils/constants";
import StaticAlert from "../../Shared/StaticAlert";
//import actions
import {
  setSelectOrder,
  setOrderDetailsSourceUrl,
} from "../../Redux/action/ordersHistory";

import MenuSizeHandlerIcon from "../../Assets/icons/MenuSizeHandlerIcon.jsx";
import CancelIcon from "../../Assets/icons/CancelIcon.jsx";
import DeniedAndRefundedCollectionServiceIcon from "../../Assets/icons/DeniedAndRefundedCollectionServiceIcon.jsx";
import DeniedAndRefundedTableServiceIcon from "../../Assets/icons/DeniedAndRefundedTableServiceIcon.jsx";
import DeniedCollectionServiceIcon from "../../Assets/icons/DeniedCollectionServiceIcon.jsx";
import DeniedTableServiceIcon from "../../Assets/icons/DeniedTableServiceIcon.jsx";
import PreparingCollectionServiceIcon from "../../Assets/icons/PreparingCollectionServiceIcon.jsx";
import PreparingTableServiceIcon from "../../Assets/icons/PreparingTableServiceIcon.jsx";
import ReadyPickUpIcon from "../../Assets/icons/ReadyPickUpIcon.jsx";
import PreparingDeliveryServiceIcon from "../../Assets/icons/PreparingDeliveryServiceIcon.jsx";
import DeniedDeliveryServiceIcon from "../../Assets/icons/DeniedDeliveryServiceIcon.jsx";
import DeniedAndRefundedDeliveryServiceIcon from "../../Assets/icons/DeniedAndRefundedDeliveryServiceIcon.jsx";
import SendingDeliveryIcon from "../../Assets/icons/SendingDeliveryIcon.jsx";
import ColoredInfoIcon from "../../Assets/icons/ColoredInfoIcon.jsx";

import {
  NewOrderStatusNotificationDrawerWrapper,
  BodyWrapper,
  StyledSwipeableDrawer,
  OrderId,
  OrderHistoryAction,
  ButtonWrapper,
  IconWrapper,
  StaticAlertContainer,
} from "./styles.jsx";
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";
const NewOrderStatusNotification = ({
  show,
  onHide,
  order,
  theme,
  setSelectOrder,
  setOrderDetailsSourceUrl,
}) => {
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

  const orderStatusConfig = {
    ACCEPTED: {
      notificationMsg: "سفارش شما با موفقیت تأیید شد.",
      notificationIcon: {
        TABLE_SERVICE: null,
        COLLECTION_SERVICE: (
          <PreparingCollectionServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
      },
    },
    PREPARING: {
      notificationMsg: "سفارش شما با موفقیت تأیید شد.",
      notificationIcon: {
        TABLE_SERVICE: (
          <PreparingTableServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
        COLLECTION_SERVICE: (
          <PreparingCollectionServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
        DELIVERY_SERVICE: (
          <PreparingDeliveryServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
      },
    },
    READY_FOR_PICKUP: {
      notificationMsg: "سفارش شما آماده جهت تحویل می‌باشد.",
      notificationIcon: {
        TABLE_SERVICE: null,
        DELIVERY_SERVICE: null,
        COLLECTION_SERVICE: (
          <ReadyPickUpIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
      },
    },
    SEND_BY_COURIER: {
      notificationMsg: "سفارش شما در حال ارسال با پیک می‌باشد.",
      notificationIcon: {
        TABLE_SERVICE: null,
        DELIVERY_SERVICE: (
          <SendingDeliveryIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
        COLLECTION_SERVICE: null,
      },
    },
    DECLINED: {
      notificationMsg: "متأسفانه سفارش شما رد شد.",
      notificationIcon: {
        TABLE_SERVICE: (
          <DeniedTableServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
        DELIVERY_SERVICE: (
          <DeniedDeliveryServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
        COLLECTION_SERVICE: (
          <DeniedCollectionServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
      },
    },
    DECLINED_AND_REFUNDED: {
      notificationMsg: "سفارش شما رد و بازپرداخت شد.",
      notificationIcon: {
        TABLE_SERVICE: (
          <DeniedAndRefundedTableServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
        COLLECTION_SERVICE: (
          <DeniedAndRefundedCollectionServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
        DELIVERY_SERVICE: (
          <DeniedAndRefundedDeliveryServiceIcon
            fill={theme?.primary}
            stroke={theme.color_text_primary}
          />
        ),
      },
    },
  };
  const history = useHistory();

  const handleTrackingOrder = () => {
    setSelectOrder(order);
    history.push("/account/orderDetailsHistory/" + order?._id);
    if (
      windowlocal.includes("successfulOrder") ||
      windowlocal.includes("unsuccessfulPay")
    ) {
      setOrderDetailsSourceUrl("/");
    }
    onHide();
  };

  const windowlocal = window.location.pathname;
  const handlePopstate = () => {
    onHide();
  };

  useEffect(() => {
    /**Handles the back navigation */
    show && history.push(windowlocal);
    show && window.addEventListener("popstate", handlePopstate);
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <NewOrderStatusNotificationDrawerWrapper>
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
        <div className="menuSizeHandlerIconWrapper">
          <MenuSizeHandlerIcon color={theme.color_border_primary} />
        </div>
        <IconWrapper className="iconWrapper">
          <div
            onClick={() => {
              onHide();
              history.goBack();
            }}
          >
            <CancelIcon fill={theme?.color_icon_primary} />
          </div>
        </IconWrapper>

        <BodyWrapper>
          <Col className="orederInfoRow">
            {isAccepted
              ? orderStatusConfig.ACCEPTED.notificationIcon.COLLECTION_SERVICE
              : orderStatusConfig?.[order?.orderStatus]?.notificationIcon?.[
                  order?.orderType
                ]}
            <div className="msg">
              {isAccepted
                ? orderStatusConfig.ACCEPTED.notificationMsg
                : orderStatusConfig?.[order?.orderStatus]?.notificationMsg}
            </div>
            <div className="orderId-title">شماره سفارش</div>
            <OrderId>{order?.orderId}</OrderId>
          </Col>
          <OrderStatusProgress order={order} />

          {order?.paymentMethod === Constants.paymentMethod?.ONLINE_WALLET && (
            <StaticAlertContainer>
              <StaticAlert
                text={`هزینه سفارش (مبلغ ${ConvertToPersianDigitWithComma(
                  order?.totalPrice
                )} تومان) به کیف پول شما اضافه گردید.`}
                icon={<ColoredInfoIcon />}
                color={"blue2"}
                hasBgColor
              />
            </StaticAlertContainer>
          )}
        </BodyWrapper>
        <ButtonWrapper>
          <OrderHistoryAction onClick={handleTrackingOrder}>
            جزئیات سفارش
          </OrderHistoryAction>
        </ButtonWrapper>
      </StyledSwipeableDrawer>
    </NewOrderStatusNotificationDrawerWrapper>
  );
};
NewOrderStatusNotification.propTypes = {
  setSelectOrder: PropTypes.func.isRequired,
  setOrderDetailsSourceUrl: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});
export default connect(mapStateToProps, {
  setSelectOrder,
  setOrderDetailsSourceUrl,
})(NewOrderStatusNotification);
