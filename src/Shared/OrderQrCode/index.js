import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col } from "../../Kit/Column";
import { Button } from "@mui/material";
import Constants from "../../Utils/constants";
import { setShowQrCodeModal } from "../../Redux/action/ordersHistory";
import StaticAlert from "../StaticAlert";
import ColoredInfoIcon from "../../Assets/icons/ColoredInfoIcon.jsx";
import QrCodeIcon from "../../Assets/icons/QrCodeIcon.jsx";

export const OrderQrCodeWrapper = styled(Col)`
  .bold {
    margin: 0rem 0.2rem;
  }
`;
export const QrCodeWrapper = styled(Col)`
  background: ${(props) => props.theme.primary + "10"};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 1rem;
  padding: 1.071rem;
  gap: 0.714rem;
  .qrCode-text {
    font-weight: 600;
    font-size: 1.071rem;
  }
`;
export const FinishedQrCodeWrapper = styled(Col)`
  padding: 0 5px;
`;
export const QrCodeButton = styled(Button)`
  color: ${(props) =>
    props?.textcolor
      ? props.textcolor
      : props.theme.textColorOfPrimaryButtons}!important;
  background: ${(props) =>
    props?.background ? props.background : props.theme.primary}!important;
  border-radius: 0.714rem !important;
  padding: 1rem !important;
  font-family: IranSanse !important;
  font-weight: 600 !important;
  gap: 0.714rem;
  font-size: 1.071rem !important;
  border: 1.5px solid
    ${(props) => (props.bordercolor ? props?.bordercolor : "transparent")} !important;
`;

const OrderQrCode = ({ order, theme, setShowQrCodeModal }) => {
  const prepTime = order?.prepTime * 60 * 1000;
  const isOnlinePay = order?.paymentMethod === Constants.paymentMethod.ZIBAL || order?.paymentMethod === Constants.paymentMethod.NEXT_PAY;
  const isAwaitingPay =
    (isOnlinePay ||
      order?.paymentTime ===
        Constants.peymenetTime.BEFORE_ORDER_CONFIRMATION) &&
    order.paymentStatus === "AWAITING_PAY"
      ? true
      : false;

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

  const handleClickQrCodeButton = () => {
    setShowQrCodeModal(true);
  };
  return (
    <OrderQrCodeWrapper>
      {!isAccepted && !isAwaitingPay ? (
        order?.orderStatus === "PREPARING" ? (
          <StaticAlert
            text={
              <div>
                زمانی که وضعیت سفارش به
                <b className="bold">«آماده جهت تحویل»</b>
                تغییر کند، جهت دریافت آن به شما اطلاع داده خواهد شد.
              </div>
            }
            icon={<ColoredInfoIcon />}
            color={"blue2"}
            hasBgColor={true}
          />
        ) : order?.orderStatus === "READY_FOR_PICKUP" ? (
          <QrCodeWrapper>
            <div className="qrCode-text">
              جهت دریافت سفارش، کد QR را به مسئول تحویل نشان دهید:
            </div>
            <QrCodeButton onClick={handleClickQrCodeButton}>
              <QrCodeIcon
                type={"READY_FOR_PICKUP"}
                color={theme.textColorOfPrimaryButtons}
              />
              <div>نمایش کد QR</div>
            </QrCodeButton>
          </QrCodeWrapper>
        ) : order?.orderStatus === "FINISHED" ? (
          <FinishedQrCodeWrapper>
            <QrCodeButton
              onClick={handleClickQrCodeButton}
              textcolor={theme.color_text_primary}
              background={theme.color_background_primary}
              bordercolor={theme.gray7}
            >
              <QrCodeIcon type={"FINISHED"} color={theme.primary} />
              <div>نمایش کد QR</div>
            </QrCodeButton>
          </FinishedQrCodeWrapper>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </OrderQrCodeWrapper>
  );
};
OrderQrCode.propTypes = {
  setShowQrCodeModal: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, { setShowQrCodeModal })(OrderQrCode);
