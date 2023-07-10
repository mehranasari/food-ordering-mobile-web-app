import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import jmoment from "moment-jalaali";
import { NameSpace } from "../../Routes/NameSpace";
import Constants from "../../Utils/constants";
//redux
import {
  successPayForOnlineWallet,
  clearOnlinePortalResponse,
} from "../../Redux/action/userProfile";
//utils
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
//components
import Header from "../../Shared/Header";
import PageLayout from "../../Shared/PageLayout";
import ContentLoading from "./ContentLoader";
//icons
import VerifyChargeOnlineWalletIcon from "../../Assets/icons/VerifyChargeOnlineWalletIcon.jsx";
//styles
import {
  VerifyChargeOnlineWalletWarpper,
  PageBody,
  BackHomeButton,
  ChargeOnlineWalletDetailes,
  PaymentDetailRow,
  InvoiceContainer,
  LoadingWrapper,
} from "./styles.jsx";
import LoadingWithLabel from "../../Shared/LoadingWithLabel";

const VerifyChargeOnlineWallet = (props) => {
  const {
    theme,
    successPayForOnlineWallet,
    venue: { venue, loading },
    history,
    userProfile: { onlineWalletAsset, successPayForOnlineWalletLoading },
  } = props;
  const location = useLocation();

  useEffect(() => {
    if (venue) {
      localStorage.removeItem("onlinePaymentResponse");
      clearOnlinePortalResponse();
      const searchParams = new URLSearchParams(location?.search.split("?")[1]);
      let trackId =
        location?.search?.match(/trackId=([^&]*)/)?.[1] ||
        searchParams.get("trans_id");
      let success =
        location?.search?.match(/success=([^&]*)/)?.[1] ||
        searchParams.get("np_status");
      if (success === "1") {
        localStorage.removeItem("onlineWalletPayment");

        successPayForOnlineWallet({
          trackId,
          venueId: venue?._id,
          history,
          paymentMethod: Constants?.paymentMethod?.ZIBAL,
        });
      } else if (success === "OK") {
        localStorage.removeItem("onlineWalletPayment");
        const amount = searchParams.get("amount");
        successPayForOnlineWallet({
          trackId,
          amount: Number(amount),
          venueId: venue?._id,
          paymentMethod: Constants?.paymentMethod?.NEXT_PAY,
          history,
        });
      } else if (success === "0" || success === "Unsuccessful" || !success) {
        history.push({ pathname: NameSpace.increaseCredit });
      }
    }
  }, [venue?._id]);

  return (
    <PageLayout>
      <VerifyChargeOnlineWalletWarpper>
        <Header
          disableBoxShadow={true}
          position={"block"}
          fill={theme.color_text_primary}
          menu
          venueLogo
          backgroundColor={theme.color_background_primary}
        />
        {(successPayForOnlineWalletLoading || loading) ? (
          <LoadingWrapper>
            <LoadingWithLabel text="لطفا صبر کنید..." />
          </LoadingWrapper>
        ) : (
          <PageBody>
            <ChargeOnlineWalletDetailes>
              <VerifyChargeOnlineWalletIcon />
              <div className="successMessage">
                پرداخت شما با موفقیت انجام شد.
              </div>
              <div className="increasmentValue">
                {ConvertToPersianDigitWithComma(onlineWalletAsset?.finalAmount)}{" "}
                تومان
              </div>
              <div className="increasmentTitle">
                به اعتبار کیف پول شما اضافه شد.
              </div>

              <InvoiceContainer>
                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">مبلغ پرداخت شده</div>
                  <div className="paymentDetailRowAmount">
                    {`${ConvertToPersianDigitWithComma(
                      onlineWalletAsset?.paidAmount
                    )}`}
                    <span className="costCurrency"> تومان</span>
                  </div>
                </PaymentDetailRow>

                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">تاریخ</div>
                  <div className="paymentDetailRowAmount">
                    {ConvertToPersianDigit(
                      jmoment(onlineWalletAsset?.paidAt).format("jYYYY/jMM/jDD")
                    )}
                    ، ساعت{" "}
                    {ConvertToPersianDigit(
                      jmoment(onlineWalletAsset?.paidAt).format("HH:mm")
                    )}
                  </div>
                </PaymentDetailRow>

                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">نوع پرداخت</div>
                  <div className="paymentDetailRowAmount">
                    درگاه آنلاین {onlineWalletAsset?.olinePortalName}
                  </div>
                </PaymentDetailRow>

                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle">کد مرجع تراکنش</div>
                  <div className="paymentDetailRowAmount">
                    {ConvertToPersianDigit(onlineWalletAsset?.refNumber)}
                  </div>
                </PaymentDetailRow>

                <PaymentDetailRow>
                  <div className="paymentDetailRowTitle"> فروشگاه</div>
                  <div className="paymentDetailRowAmount">{venue?.name}</div>
                </PaymentDetailRow>
              </InvoiceContainer>
            </ChargeOnlineWalletDetailes>

            <BackHomeButton
              onClick={() => {
                history.push(NameSpace.url);
              }}
            >
              <div>بازگشت به صفحه اصلی</div>
            </BackHomeButton>
          </PageBody>
        )}
      </VerifyChargeOnlineWalletWarpper>
    </PageLayout>
  );
};
VerifyChargeOnlineWallet.propTypes = {
  successPayForOnlineWallet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  theme: state.theme.theme,
  onlineWallet: state.setting.venueSettings?.settings?.onlineWallet,
  venue: state.venue,
});

export default connect(mapStateToProps, {
  successPayForOnlineWallet,
})(withRouter(VerifyChargeOnlineWallet));
