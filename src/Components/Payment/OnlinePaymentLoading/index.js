/* eslint-disable jsx-a11y/alt-text */
import React from "react";
//import components
import LoadingWithLabel from "../../../Shared/LoadingWithLabel";
import StaticAlert from "../../../Shared/StaticAlert";
//import icons
import ColoredInfoIcon from "../../../Assets/icons/ColoredInfoIcon.jsx";
import ArrowsNavigation from "../../../Assets/icons/ArrowsNavigation.jsx";
import MenoBuzzColorfullIcon from "../../../Assets/icons/MenoBuzzColorfullIcon.jsx";
//import styles
import { OnlinePaymentLoadingWapper, OnlinePortalLogo } from "./styles.jsx";
import PageLayout from "../../../Shared/PageLayout";

const OnlinePaymentLoading = ({ onlinePayMethod }) => {
  return (
    <PageLayout>
      <OnlinePaymentLoadingWapper>
        <div className="iconsSection">
          <OnlinePortalLogo className="logo">
            <img
              className="venueLogo"
              src={onlinePayMethod?.onlinePortal?.icon?.iconUrlLocation}
            />
          </OnlinePortalLogo>
          <ArrowsNavigation />
          <MenoBuzzColorfullIcon />
        </div>
        <LoadingWithLabel text={"لطفا منتظر بمانید"} />
        <div className="message">
          ما شما را به درگاه پرداخت اینترنتی
          <br />
          <b> {onlinePayMethod?.onlinePortal?.name} </b> منتقل می کنیم
        </div>
        <div className="staticAlarm">
          <StaticAlert
            text={
              "تا زمانیکه فرآیند انتقال به درگاه آنلاین در حال انجام است، لطفاً از بستن و یا رفرش کردن این صفحه خودداری کنید."
            }
            icon={<ColoredInfoIcon />}
            color={"blue2"}
            hasBgColor={true}
          />
        </div>
      </OnlinePaymentLoadingWapper>
    </PageLayout>
  );
};

export default OnlinePaymentLoading;
