import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import OrderStatusProgress from "../../Shared/OrderStatusProgress";
import { Col } from "../../Kit/Column";
import Constants from "../../Utils/constants";
import QrCode from "qrcode.react";
import MenobuzzLogo from "../../Assets/Images/MenobuzzLogo.svg";

//import actions
import { setSelectOrder } from "../../Redux/action/ordersHistory";

import MenuSizeHandlerIcon from "../../Assets/icons/MenuSizeHandlerIcon.jsx";
import CancelIcon from "../../Assets/icons/CancelIcon.jsx";

import {
  OrderQrCodeModalDrawerWrapper,
  BodyWrapper,
  StyledSwipeableDrawer,
  OrderId,
  OrderHistoryAction,
  ButtonWrapper,
  IconWrapper,
  HearderTitle,
  QrCodeGuid,
  QrCodeBody,
  QrCodeMessage
} from "./styles.jsx";
import QrCodeIcon from "../../Assets/icons/QrCodeIcon.jsx";

const OrderQrCodeModal = ({ show, onHide, order, theme }) => {
  const history = useHistory();

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
    <OrderQrCodeModalDrawerWrapper>
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
          <HearderTitle>
            <QrCodeIcon color={theme.primary} stroke={theme.color_icon_primary}/>
            <div>کد QR</div>
          </HearderTitle>
          <div className="empety" />
        </IconWrapper>

        <BodyWrapper>
          <QrCodeGuid>
            {order?.orderStatus === "READY_FOR_PICKUP"
              ? "جهت دریافت سفارش، کد QR را به مسئول تحویل نشان دهید."
              : "سفارش شما تحویل داده شده است، بنابراین این کد QR معتبر نمی‌باشد."}
          </QrCodeGuid>
          <QrCodeBody opacity={order?.orderStatus === "READY_FOR_PICKUP"? 1 : 0.5}>
            <QrCode
              id="qr-gen"
              value={order?.orderId}
              size={250}
              bgColor={theme?.color_background_primary}
              fgColor={theme?.color_text_primary }
              level={"H"}
              includeMargin={false}
              imageSettings={{
                src: MenobuzzLogo,
                x: null,
                y: null,
                height: 60,
                width: 60,
                excavate: true,
              }}
            />
          </QrCodeBody>
<OrderId>
    <div>
    شماره سفارش
    </div>
    <div className="orderId">
        {order?.orderId}
    </div>
</OrderId>
{order?.orderStatus === "READY_FOR_PICKUP" && <QrCodeMessage>
    هنگامی که سفارش شما تحویل داده شود، دیگر این کد معتبر نخواهد بود.
    </QrCodeMessage>}
        </BodyWrapper>
      </StyledSwipeableDrawer>
    </OrderQrCodeModalDrawerWrapper>
  );
};
OrderQrCodeModal.propTypes = {
  setSelectOrder: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});
export default connect(mapStateToProps, { setSelectOrder })(OrderQrCodeModal);
