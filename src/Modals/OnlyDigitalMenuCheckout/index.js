import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import StaticAlert from "../../Shared/StaticAlert";
import { NameSpace } from "../../Routes/NameSpace";
import Constants from "../../Utils/constants";
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
  CheckoutHeader,
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
  NotTotalPriceWrapper,
  NoteWrapper,
  NoteContainer,
  PaymentsDetailsSection,
  PaymentDetailRow,
  TotalPrice,
} from "./styles.jsx";

//import icons
import AddIcon from "../../Assets/icons/AddIcon.jsx";
import MinusIcon from "../../Assets/icons/MinusIcon.jsx";
import TrashBasket from "../../Assets/icons/TrashBasket.jsx";
import ColoredInfoIcon from "../../Assets/icons/ColoredInfoIcon.jsx";
import NoteIcon from "../../Assets/icons/NoteIcon.jsx";

const OnlyDigitalMenuCheckout = ({
  history,
  venue,
  show,
  onHide,
  orderType,
  plusCountItem,
  minusCountItem,
  deletingItemFromCart,
  removingAllItemsFromCart,
  currentVenueCart,
  theme,
  setting,
}) => {
  const [windowlocal] = useState(window.location.pathname);
 
  //Calculate Total Price
  const calculateTotalPrice = () => {
    let fees =
      setting?.venueOrderSettings?.orderSettings?.[
        orderType === Constants.orderType.TABLE_SERVICE
          ? "tableService"
          : "collectionService"
      ].fees;

    let firstValueFees = fees?.[0]?.status
      ? fees?.[0]?.type === Constants.fees.TOMAN
        ? fees?.[0]?.amount
        : (currentVenueCart?.cartPrice * fees?.[0].amount) / 100
      : 0;

    let finalFees = fees?.reduce(
      (previousValue, currentValue) =>
        previousValue +
        (currentValue?.status
          ? currentValue?.type === Constants.fees.TOMAN
            ? currentValue?.amount
            : (currentVenueCart?.cartPrice * currentValue.amount) / 100
          : 0),
      firstValueFees
    );
    finalFees = finalFees - firstValueFees;
    let totalPrice = currentVenueCart?.cartPrice + finalFees;
    return totalPrice;
  };

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
  }, [currentVenueCart?.items]);

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
          pageIcon={<NoteIcon stroke={theme.color_text_primary} fill={theme.primary} />}
          pageTitle={"یادداشت‌ها "}
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
              onClick={() => removingAllItemsFromCart(venue?._id, orderType)}
            >
              پاک کردن یادداشت
            </EmptyCart>
          </div>
        </CheckoutHeader>
        <BodyWrapper>
          <PaymentsDetailsSection>
            <div className="paymentsDetailsSectionTitle">اطلاعات پرداخت</div>
            <PaymentDetailRow>
              <div className="paymentDetailRowTitle">قیمت آیتم‌ها</div>
              <div className="paymentDetailRowAmount">
                {`${ConvertToPersianDigitWithComma(
                  Math.ceil(
                    currentVenueCart?.cartPrice + currentVenueCart?.cartDiscount
                  )
                )}`}
                <span className="costCurrency"> تومان</span>
              </div>
            </PaymentDetailRow>
            {currentVenueCart?.cartDiscount !== 0 && (
              <PaymentDetailRow>
                <div className="paymentDetailRowTitle">جمع کل تخفیف</div>
                <div className="paymentDetailRowAmount discount">
                  {`${ConvertToPersianDigitWithComma(
                    Math.ceil(currentVenueCart?.cartDiscount)
                  )}- `}
                  <span className="costCurrencytotalDiscountPrice">تومان </span>
                </div>
              </PaymentDetailRow>
            )}
            {setting?.venueOrderSettings?.orderSettings?.[
              orderType === Constants?.orderType?.TABLE_SERVICE
                ? "tableService"
                : "collectionService"
            ].fees.map(
              (fee) =>
                fee?.status && (
                  <PaymentDetailRow key={fee._id}>
                    <div className="paymentDetailRowTitle">
                      {" "}
                      {fee.name}
                      {fee.type === "PERCENT" &&
                        " (%" + ConvertToPersianDigit(fee?.amount) + ")"}
                    </div>
                    <div className="paymentDetailRowAmount">
                      {fee.type === "PERCENT"
                        ? ConvertToPersianDigitWithComma(
                            Math.ceil(
                              (currentVenueCart?.cartPrice * fee.amount) / 100
                            )
                          )
                        : ConvertToPersianDigitWithComma(Math.ceil(fee.amount))}
                      <span className="costCurrency"> تومان</span>
                    </div>
                  </PaymentDetailRow>
                )
            )}
            <TotalPrice>
              <div className="totalPriceTitle">مجموع قیمت</div>
              <div className="totalPriceAmount">
                {`${
                  currentVenueCart?.cartPrice &&
                  ConvertToPersianDigitWithComma(
                    Math.ceil(calculateTotalPrice())
                  )
                } `}
                <span className="costCurrency"> تومان</span>
              </div>
            </TotalPrice>
          </PaymentsDetailsSection>

          <CheckoutItemContainer>
            <div className="ItemsContainerTitle">خلاصه آیتم‌ها</div>
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
                          {`- ${extra?.extraName} ${
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
                text={"یادداشت‌‌های شما بعد از ۱ روز خالی خواهد شد."}
                icon={<ColoredInfoIcon />}
                color={"blue2"}
                hasBgColor={true}
              />
            </div>
          </CheckoutItemContainer>
          <NoteWrapper>
            <NoteContainer>
              <div className="TotalPriceText">قیمت کل </div>
              <div className="TotalPrice">
                {currentVenueCart?.cartPrice &&
                  ConvertToPersianDigitWithComma(
                    Math.ceil(calculateTotalPrice())
                  )}
                <span className="costCurrency"> تومان</span>
              </div>
            </NoteContainer>
          </NoteWrapper>
        </BodyWrapper>
      </StyledSwipeableDrawer>
    </CheckoutDrawerWrapper>
  );
};

OnlyDigitalMenuCheckout.propTypes = {
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
})(withRouter(OnlyDigitalMenuCheckout));
