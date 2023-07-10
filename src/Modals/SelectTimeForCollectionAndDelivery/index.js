import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TimePicker from "../../Kit/TimePicker";
import jmoment from "moment-jalaali";
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import Constants from "../../Utils/constants";
import StaticAlert from "../../Shared/StaticAlert";
import Header from "../../Shared/Header";
import {
  ItemDrawerWrapper,
  StyledSwipeableDrawer,
  BodyWrapper,
  ConfirmSelection,
  ConfirmButton,
  TimeRangesContainer,
  TimeRange,
  BodyContainer,
} from "./styles.jsx";

import ColoredInfoIcon from "../../Assets/icons/ColoredInfoIcon.jsx";

const SelectTimeForCollectionAndDelivery = ({
  history,
  show,
  onHide,
  selectTimeHandler,
  validTimes,
  selectedTime,
  orderType,
  theme,
}) => {
  const [windowlocal] = useState(window.location.pathname);
  // const selectedDay = VenueTradingTimesConfig.filter(day => day.key === (new Date().getDay()))?.[0]?.value
  const today = new Date();

  const [time, setTime] = useState(selectedTime || null);
  useEffect(() => {
    /**Handles the back navigation */
    show &&
      history.push({
        pathname: windowlocal,
        state: { source: windowlocal },
      });
    show &&
      window.addEventListener("popstate", (event) => {
        onHide();
        setTime(selectedTime);
      });
    return () => {
      window.removeEventListener("popstate", () => null);
    };
  }, [show]);

  const handleSumbit = () => {
    const isValideSelectedTime =
      time === null || time < today
        ? false
        : validTimes.some(
            (item) =>
              item.status &&
              (new Date(item.availableTo).getHours() > time.getHours() ||
                (new Date(item.availableTo).getHours() === time.getHours() &&
                  new Date(item.availableTo).getMinutes() >=
                    time.getMinutes())) &&
              (new Date(item.availableFrom).getHours() < time.getHours() ||
                (new Date(item.availableFrom).getHours() === time.getHours() &&
                  new Date(item.availableFrom).getMinutes() <=
                    time.getMinutes()))
          );

    if (isValideSelectedTime) {
      selectTimeHandler(
        orderType === Constants?.orderType.DELIVERY_SERVICE
          ? Constants.deliveryType.SPECIFIC_TIME_DELIVERY
          : Constants.pickUpType.SPECIFIC_TIME_PICKUP,
        time
      );
      onHide();
      history.goBack();
    } else {
      toast.error(`زمان انتخابی مورد نظر شما معتبر نمی‌باشد!`);
    }
  };

  //On hide drawwer and deselect item selection
  const onHideAndDeselect = () => {
    onHide();
    history.goBack();
    setTime(selectedTime);
  };
  const handleOpen = () => {
    onHide();
    history.goBack();
    setTime(selectedTime);
  };
  const handleChange = (newVal) => {
    setTime(newVal);
  };
  return (
    <ItemDrawerWrapper>
      <StyledSwipeableDrawer
        anchor={"bottom"}
        open={show}
        onClose={onHideAndDeselect}
      >
        <Header
          isModal={true}
          pageTitle={
            <div className="titleText">
              <span className="collectionTimeTitleBold">زمان تحویل سفارش </span>
              را انتخاب کنید :
            </div>
          }
          onClose={handleOpen}
          disableBoxShadow={true}
        />

        <BodyWrapper>
          <BodyContainer>
            <div className="staticAlarm">
              <StaticAlert
                text={"زمان انتخاب شما باید در یکی از بازه‌های زیر باشد:"}
                icon={<ColoredInfoIcon />}
                color={"blue2"}
                hasBgColor={false}
              />
            </div>

            <TimeRangesContainer>
              {validTimes?.map((item, index) => (
                <TimeRange key={index}>
                  <p>
                    {ConvertToPersianDigit(
                      jmoment(item.availableFrom).format("HH:mm")
                    )}
                  </p>
                  <p>الی</p>
                  <p>
                    {ConvertToPersianDigit(
                      jmoment(item.availableTo).format("HH:mm")
                    )}
                  </p>
                </TimeRange>
              ))}
            </TimeRangesContainer>
            <TimePicker
              value={time}
              onChange={(e) => handleChange(e)}
              minTime={today}
              // shouldDisableTime={(timeValue, clockType) => {
              //   return clockType === "minutes" && timeValue % 15 !== 0;
              // }}
              minutesStep={15}
            />
          </BodyContainer>

          <ConfirmSelection>
            <ConfirmButton
              onClick={handleSumbit}
              disabled={!(time && time !== Constants.pickUpType.QUICK_PICKUP)}
            >
              <div className="confirmButtonWrapper">
                <div className="confirmButtonText">تأیید زمان تحویل</div>
              </div>
            </ConfirmButton>
          </ConfirmSelection>
        </BodyWrapper>
      </StyledSwipeableDrawer>
    </ItemDrawerWrapper>
  );
};

SelectTimeForCollectionAndDelivery.propTypes = {};
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});
export default connect(
  mapStateToProps,
  {}
)(withRouter(SelectTimeForCollectionAndDelivery));
