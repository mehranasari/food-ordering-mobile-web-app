import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link, withRouter, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
//redux
import {
  generateChargeUserOnlineWalletByVenueIdPage,
  clearOnlinePortalResponse,
} from "../../Redux/action/userProfile";
//utils
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";
import ConvertStringToNumber from "../../Utils/method/ConvertStringToNumber";
import ConvertToEnglishDigit from "../../Utils/method/ConvertToEnglishDigit";
//components
import Header from "../../Shared/Header";
import FormInput from "../../Kit/FormInput";
import PageLayout from "../../Shared/PageLayout";
import OnlinePaymentLoading from "../../Components/Payment/OnlinePaymentLoading";
import ContentLoading from "./ContentLoader";
//icons
import PlusIcon from "../../Assets/icons/PlusIcon.jsx";
import DefaultLogo from "../../Assets/icons/DefaultLogo.jsx";
//styles
import {
  IncreaseOnlineWalletCreditWarpper,
  PageBody,
  IncreaseCreditButton,
  CreditDetails,
  IncreaseCreditButtonWrapper,
  DetailBox,
  IncreasmentValue,
  InputRow,
  OptionsRow,
  Option,
  MoreCredit,
  FixedIcon,
  OnlinPortalsWrapper,
  OnlinePortal,
  IconWrapper,
  OnlinePortalLogo,
  OnlinPortalsContainer,
} from "./styles.jsx";
import { NameSpace } from "../../Routes/NameSpace";
//constants
const options = [
  { paidAmount: "50000" },
  { paidAmount: "150000" },
  { paidAmount: "200000" },
];

const IncreaseOnlineWalletCredit = (props) => {
  const {
    theme,
    generateChargeUserOnlineWalletByVenueIdPage,
    clearOnlinePortalResponse,

    venue: { venue },
    userProfile: {
      onlineWalletAsset,
      connectToOnlinPortalLoading,
      onlineWalletAssetLoading,
    },
    history,
    venueSettings,
    // onlineWallet,
  } = props;
  const onlineWallet = venueSettings?.settings?.onlineWallet;
  const onlineWalletPayment =
    localStorage.getItem("onlineWalletPayment") === "undefined"
      ? null
      : JSON.parse(localStorage.getItem("onlineWalletPayment"));
  const inputRef = useRef(null);
  const [state, setState] = useState(
    onlineWalletPayment
      ? { ...onlineWalletPayment }
      : {
          paidAmount: 100000,
          venueId: venue?._id,
          paymentMethod: onlineWallet?.onlinePortals?.[0]?.onlinePortal?.type,
        }
  );

  useEffect(() => {
    if (onlineWallet?.onlinePortals && !state?.paymentMethod) {
      setState({
        ...state,
        paymentMethod: onlineWallet?.onlinePortals?.[0]?.onlinePortal?.type,
        venueId: venue?._id,
      });
    }
  }, [onlineWallet?.onlinePortals]);

  useEffect(() => {
    localStorage.removeItem("onlinePaymentResponse");
    clearOnlinePortalResponse();
    inputRef?.current?.focus();
  }, []);

  const onlinePayMethod = onlineWallet?.onlinePortals?.filter(
    (item) => item?.onlinePortal?.type === state?.paymentMethod
  )?.[0];

  return (
    <>
      {connectToOnlinPortalLoading ? (
        <OnlinePaymentLoading onlinePayMethod={onlinePayMethod} />
      ) : (
        <PageLayout>
          <IncreaseOnlineWalletCreditWarpper>
            <Header
              disableBoxShadow={false}
              position={"fixed"}
              fill={theme.color_text_primary}
              pageTitle={"افزایش اعتبار"}
              backgroundColor={theme.color_background_primary}
              previousPage={NameSpace.onlineWallet}
            />
            {onlineWalletAssetLoading ||
            venue?.loading ||
            venueSettings?.loading ? (
              // <div>loading</div>
              <PageBody>
                <ContentLoading theme={theme} />
              </PageBody>
            ) : (
              <>
                <PageBody>
                  <CreditDetails>
                    <DetailBox>
                      {venue?.logo?.logoUrlLocation ? (
                        <img
                          className="venueLogo"
                          src={venue?.logo?.logoUrlLocation}
                        />
                      ) : (
                        <div className="venueLogo default-logo">
                          <DefaultLogo stroke={theme.color_icon_primary} />
                        </div>
                      )}
                      <div className="value">{venue?.name}</div>
                    </DetailBox>
                    <DetailBox>
                      <div className="title">اعتبار فعلی </div>
                      <div className="value">
                        {ConvertToPersianDigitWithComma(
                          onlineWalletAsset?.assets
                        )}
                        <span>تومان</span>
                      </div>
                    </DetailBox>
                    {onlineWalletAsset?.userProfileChargeFactor !== 1 && (
                      <DetailBox>
                        <div className="title"> ضریب شارژ</div>
                        <div className="value">
                          {ConvertToPersianDigitWithComma(
                            onlineWalletAsset?.userProfileChargeFactor
                          )}
                        </div>
                      </DetailBox>
                    )}
                  </CreditDetails>
                  <IncreasmentValue>
                    <div className="title">
                      مبلغ مورد نظر را برای افزایش اعتبار وارد کنید:
                    </div>
                    <InputRow>
                      <FormInput
                        name="receiverPhoneNumber"
                        inputMode="numeric"
                        forwardRef={inputRef}
                        onChange={(e) => {
                          e.target.value = ConvertToEnglishDigit(
                            e.target.value
                          );
                          e.target.value = ConvertStringToNumber(
                            e.target.value
                          );
                          setState((pre) => {
                            return { ...pre, paidAmount: e?.target?.value };
                          });
                        }}
                        value={ConvertToPersianDigitWithComma(
                          state?.paidAmount
                        )}
                        require={false}
                        direction={"ltr"}
                        showErrorMessage={true}
                      />
                      <span>تومان</span>
                    </InputRow>
                    <OptionsRow>
                      {options.map((item) => (
                        <Option
                          key={item?.paidAmount}
                          onClick={() =>
                            setState({ ...state, paidAmount: item?.paidAmount })
                          }
                        >
                          <span>
                            {ConvertToPersianDigitWithComma(item?.paidAmount)}
                          </span>
                          <span>تومان</span>
                        </Option>
                      ))}
                    </OptionsRow>
                    {onlineWalletAsset?.userProfileChargeFactor !== 1 && (
                      <MoreCredit>
                        <div className="moreCredit-detail">
                          {ConvertToPersianDigitWithComma(
                            (onlineWalletAsset?.userProfileChargeFactor - 1) *
                              state?.paidAmount
                          )}
                          <span>تومان</span>
                        </div>
                        <div className="moreCredit-subtitle">اعتبار بیشتر</div>
                        <div className="moreCredit-message">
                          در صورت پرداخت{" "}
                          {ConvertToPersianDigitWithComma(state.paidAmount)}{" "}
                          تومان، کیف پول شما به مبلغ{" "}
                          <span>
                            {ConvertToPersianDigitWithComma(
                              state?.paidAmount *
                                onlineWalletAsset?.userProfileChargeFactor
                            )}{" "}
                            تومان{" "}
                          </span>
                          شارژ می‌شود.
                        </div>
                        <FixedIcon>🎉</FixedIcon>
                      </MoreCredit>
                    )}
                  </IncreasmentValue>
                  <OnlinPortalsWrapper>
                    <div>درگاه پرداختی مورد نظر را انتخاب کنید:</div>
                    <OnlinPortalsContainer>
                      {onlineWallet?.onlinePortals?.map((item) => {
                        return (
                          item?.status && (
                            <OnlinePortal
                              key={item?._id}
                              onClick={() => {
                                setState({
                                  ...state,
                                  paymentMethod: item?.onlinePortal?.type,
                                });
                              }}
                              isselected={
                                state?.paymentMethod ===
                                item?.onlinePortal?.type
                                  ? "true"
                                  : "false"
                              }
                            >
                              <IconWrapper className="end logo">
                                <OnlinePortalLogo
                                  src={
                                    item?.onlinePortal?.icon?.iconUrlLocation
                                  }
                                />
                              </IconWrapper>
                              <div>{item?.onlinePortal?.name}</div>
                            </OnlinePortal>
                          )
                        );
                      })}
                    </OnlinPortalsContainer>
                  </OnlinPortalsWrapper>
                </PageBody>

                <IncreaseCreditButtonWrapper>
                  <IncreaseCreditButton
                    onClick={() => {
                      if (state.paidAmount < 1000) {
                        toast.error(
                          "حداقل مقدار شارژ کیف پول ۱,۰۰۰ تومان می‌باشد."
                        );
                      } else if (state.paidAmount > 10000000) {
                        toast.error(
                          "حداکثر مقدار شارژ کیف پول ۱۰,۰۰۰,۰۰۰ تومان می‌باشد."
                        );
                      } else {
                        generateChargeUserOnlineWalletByVenueIdPage(
                          state,
                          history
                        );
                        localStorage.setItem(
                          "onlineWalletPayment",
                          JSON.stringify(state)
                        );
                      }
                    }}
                  >
                    <div className="buttonText">پرداخت</div>
                  </IncreaseCreditButton>
                </IncreaseCreditButtonWrapper>
              </>
            )}
          </IncreaseOnlineWalletCreditWarpper>
        </PageLayout>
      )}
    </>
  );
};
IncreaseOnlineWalletCredit.propTypes = {
  generateChargeUserOnlineWalletByVenueIdPage: PropTypes.func.isRequired,
  clearOnlinePortalResponse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
  theme: state.theme.theme,
  // onlineWallet: state.setting.venueSettings?.settings?.onlineWallet,
  venueSettings: state.setting.venueSettings,
  venue: state.venue,
});

export default connect(mapStateToProps, {
  generateChargeUserOnlineWalletByVenueIdPage,
  clearOnlinePortalResponse,
})(withRouter(IncreaseOnlineWalletCredit));
