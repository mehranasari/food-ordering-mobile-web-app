import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import StaticAlert from "../../Shared/StaticAlert";
import { NameSpace } from "../../Routes/NameSpace";
import Header from "../../Shared/Header";
//import actions
import {
  plusCountItem,
  minusCountItem,
  deletingItemFromCart,
  removingAllItemsFromCart,
} from "../../Redux/action/cart";
import { setPageYOffset } from "../../Redux/action/item";

//import methods
import ConvertToPersianDigit from "../../Utils/method/ConvertToPersianDigit";
import ConvertToPersianDigitWithComma from "../../Utils/method/ConvertToPersianDigitWithComma";

//import styles
import {
  CheckoutDrawerWrapper,
  StyledSwipeableDrawer,
  EmptyCart,
  BodyWrapper,
  CheckoutItemContainer,
  CheckoutItem,
  CheckoutItemImage,
  CheckoutItemDetails,
  CheckoutItemPreferencesAndExtras,
  CheckoutItemPriceAndCount,
  CheckoutItemPrice,
  CheckoutItemCount,
  PlusCountItem,
  MinusCountItem,
  CheckoutWrapper,
  ConfirmCheckoutWrapper,
  CheckoutButton,
  TotalPriceWrapper,
  CheckoutHeader,
} from "./styles.jsx";

//import icons
import ForwardStepArrowIcon from "../../Assets/icons/ForwardStepArrowIcon.jsx";
import BasketIcon from "../../Assets/icons/BasketIcon.jsx";
import AddIcon from "../../Assets/icons/AddIcon.jsx";
import MinusIcon from "../../Assets/icons/MinusIcon.jsx";
import TrashBasket from "../../Assets/icons/TrashBasket.jsx";
import ColoredInfoIcon from "../../Assets/icons/ColoredInfoIcon.jsx";
import Constants from "../../Utils/constants";
import { toast } from "react-toastify";

const CheckoutPopup = ({
  history,
  venue,
  show,
  onHide,
  setOriginUrl,
  orderType,
  plusCountItem,
  minusCountItem,
  deletingItemFromCart,
  removingAllItemsFromCart,
  currentVenueCart,
  setPageYOffset,
  theme,
  setting,
}) => {
  const minOrderValue =
    setting?.venueOrderSettings?.orderSettings?.deliveryService?.minOrderValue;
  const [windowlocal] = useState(window.location.pathname);

  useEffect(() => {
    /**Handles the back navigation */
    show && history.push(windowlocal);
    show &&
      window.addEventListener("popstate", (event) => {
        onHide();
      });
    return () => {
      window.removeEventListener("popstate", () => null);
    };
  }, [show]);

  //Hide checkout popup on click remove all items from cart
  useEffect(() => {
    currentVenueCart?.items.length <= 0 && onHide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentVenueCart?.items]);

  const handleCheckout = () => {
    history.push({
      pathname: NameSpace.payment,
      state: { source: windowlocal },
    });
  };

  return (
    <CheckoutDrawerWrapper>
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
        <Header
          isModal={true}
          pageIcon={
            <BasketIcon
            weheelsColor={theme.color_text_primary}
              fill={theme.primary}
              stroke={theme.textColorOfPrimaryButtons}
            />
          }
          pageTitle={"سبد خرید"}
          onClose={() => {
            onHide();
            history.goBack();
          }}
          disableBoxShadow={true}
        />
        <CheckoutHeader>
          <div className="headerRow">
            <div className="itemCount">
              <div className="count">
                {currentVenueCart?.itemQty &&
                  ConvertToPersianDigit(currentVenueCart?.itemQty)}{" "}
                آیتم
              </div>
            </div>
            <EmptyCart
              onClick={() => {
                history.goBack()
                removingAllItemsFromCart(venue?._id, orderType);
              }}
            >
              خالی کردن سبد
            </EmptyCart>
          </div>
        </CheckoutHeader>
        <BodyWrapper>
          <CheckoutItemContainer>
            {currentVenueCart?.items.map((item, index) => {
              return (
                <CheckoutItem key={index}>
                  <CheckoutItemDetails>
                    <div>
                      <div className="checkoutItemDetailsName">
                        {item?.name}
                      </div>
                      <div className="checkoutItemDetailsSize">
                        {item?.itemPrice.title}
                      </div>
                    </div>
                    <CheckoutItemImage src={item?.imageUrlLocation} />
                  </CheckoutItemDetails>
                  <CheckoutItemPreferencesAndExtras>
                    {item?.selectedPreferenceItems?.map((preference, index) => (
                      <div
                        className="preferenceAndExtraItem"
                        key={`preference-${index}`}
                      >
                        <div className="dot" />
                        <div className="name">{preference?.name}</div>
                        {preference?.quantity > 1 && (
                          <div className="quantity">
                            <div> x </div>{" "}
                            {ConvertToPersianDigit(preference?.quantity)}
                          </div>
                        )}
                      </div>
                    ))}
                    {item.selectedExtraItems?.map((extra, index) => (
                      <div
                        className="preferenceAndExtraItem"
                        key={`extra-${index}`}
                      >
                        <div className="dot" />
                        <div className="name">
                          {`${extra?.extraName} ${
                            extra?.title.length !== 0 ? `(${extra?.title})` : ""
                          }`}
                        </div>
                        {extra?.quantity > 1 && (
                          <div className="quantity">
                            <div> x </div>{" "}
                            {ConvertToPersianDigit(extra?.quantity)}
                          </div>
                        )}
                      </div>
                    ))}
                  </CheckoutItemPreferencesAndExtras>
                  <CheckoutItemPriceAndCount>
                    <CheckoutItemPrice>
                      {ConvertToPersianDigitWithComma(item?.totalPricePerItem)}
                      <span className="costCurrency"> تومان</span>
                    </CheckoutItemPrice>
                    <CheckoutItemCount>
                      <PlusCountItem onClick={() => plusCountItem(item)}>
                        <AddIcon fill={theme.color_text_primary} />
                      </PlusCountItem>
                      <div className="countNumber">
                        {ConvertToPersianDigit(item.quantity)}
                      </div>
                      {item.quantity === 1 ? (
                        <MinusCountItem
                          onClick={() => deletingItemFromCart(item)}
                        >
                          <TrashBasket fill={theme.color_text_primary_l5} />
                        </MinusCountItem>
                      ) : (
                        <MinusCountItem onClick={() => minusCountItem(item)}>
                          <MinusIcon fill={theme.color_text_primary_l5} />
                        </MinusCountItem>
                      )}
                    </CheckoutItemCount>
                  </CheckoutItemPriceAndCount>
                </CheckoutItem>
              );
            })}
            <div className="alarm">
              <StaticAlert
                text={"سبد خرید شما بعد از ۱ روز خالی خواهد شد."}
                icon={<ColoredInfoIcon />}
                color={"blue2"}
                hasBgColor={true}
              />
            </div>
          </CheckoutItemContainer>
          <CheckoutWrapper>
            <ConfirmCheckoutWrapper
              onClick={() => {
                if (
                  orderType === Constants?.orderType?.DELIVERY_SERVICE &&
                  minOrderValue > currentVenueCart?.cartPrice
                ) {
                  toast.error(
                    `حداقل مبلغ سفارش، ${ConvertToPersianDigitWithComma(
                      minOrderValue
                    )} تومان می‌باشد!`
                  );
                } else {
                  handleCheckout();
                  setOriginUrl && setOriginUrl(`/payment/`);
                  setPageYOffset(0);
                }
              }}
            >
              <CheckoutButton>
                <div className="checkoutButtonWrapper">
                  <ForwardStepArrowIcon
                    stroke={theme.textColorOfPrimaryButtons}
                  />
                  <div className="checkoutButtonText">ثبت سفارش</div>
                </div>
              </CheckoutButton>
            </ConfirmCheckoutWrapper>
            <TotalPriceWrapper>
              <div className="TotalPriceText">قیمت کل</div>
              <div className="TotalPrice">
                {currentVenueCart?.cartPrice &&
                  ConvertToPersianDigitWithComma(currentVenueCart?.cartPrice)}
                <span className="costCurrency"> تومان</span>
              </div>
            </TotalPriceWrapper>
          </CheckoutWrapper>
        </BodyWrapper>
      </StyledSwipeableDrawer>
    </CheckoutDrawerWrapper>
  );
};

CheckoutPopup.propTypes = {
  plusCountItem: PropTypes.func.isRequired,
  minusCountItem: PropTypes.func.isRequired,
  deletingItemFromCart: PropTypes.func.isRequired,
  removingAllItemsFromCart: PropTypes.func.isRequired,
  setPageYOffset: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  setting: state.setting,
});

export default connect(mapStateToProps, {
  plusCountItem,
  minusCountItem,
  deletingItemFromCart,
  removingAllItemsFromCart,
  setPageYOffset,
})(withRouter(CheckoutPopup));
