import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import Button from "@material-ui/core/Button";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";
import { palette } from "../../Shared/Theme/Palette";

export const StyledSwipeableDrawer = styled(MuiSwipeableDrawer)`
  .MuiPaper-root {
    display: flex;
    align-items: center;
  }
`;

export const CheckoutDrawerWrapper = styled(Row)`
  width: 100%;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 0.71rem;

  .headerRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cartTitle {
      display: flex;
      align-items: center;
    }
    .iconWrapper {
      display: flex;
      padding-right: 1.28rem;
    }
    .itemCount {
      margin-right: 1.28rem;
      .count {
      }
    }
    .titleText {
      margin-right: 1rem;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }
`;

export const EmptyCart = styled(Row)`
  padding: 0.35rem 0.71rem;
  background-color: ${(props) => props.theme.color_background_secondary};

  border-radius: 4rem;
  font-size: 0.8125rem;
  color: ${(props) => props.theme.color_text_primary};
  cursor:pointer;
`;

export const MoreDetail = styled(Row)`
  width: 25%;
  justify-content: space-evenly;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding-bottom: 5.71rem;
  background-color: ${(props) => props.theme.color_background_primary};
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  justify-content: center;
  min-height: 14.28rem;
  height: auto;
  position: relative;
  .alarm {
    margin-bottom: 1rem;
  }
`;

export const CheckoutItem = styled(Row)`
  width: 100%;
  margin-bottom: 10px;
  padding: 1rem 1.42rem;
  background-color: ${(props) => props.theme.color_background_secondary};
  border-radius: 1.28rem;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutItemImage = styled(Row)`
  width: 4.3rem;
  height: 4.3rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

export const CheckoutItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 5px;

  .checkoutItemDetailsName {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 5px;
  }
  .checkoutItemDetailsSize {
    color: ${(props) => props.theme.gray4};
    font-size: 1rem;
  }
`;

export const CheckoutItemPreferencesAndExtras = styled(Col)`
  margin-bottom: 15px;
  .preferenceAndExtraItem {
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
    .dot {
      width: 0.35rem;
      height: 0.35rem;
      background-color: ${(props) => props.theme.gray2};
      border-radius: 100%;
      margin-left: 0.5rem;
    }
    .quantity {
      display: flex;
      margin-right: 0.5rem;
      font-weight: bold;
    }
  }
`;

export const CheckoutItemPriceAndCount = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CheckoutItemPrice = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 1.25rem;
  color: ${(props) => props.theme.color_text_primary};
  align-items: center;

  .costCurrency {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 100;
    padding-right: 5px;
  }

  .costWithDiscountWrapper {
    display: flex;
    align-items: flex-end;

    .discountPercent {
      display: flex;
      margin-top: 5px;
      justify-content: center;
      align-items: center;
      height: 2.57rem;
      width: 2.57rem;
      border: 1.5px solid ${palette.red1};
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 900;
      color: ${palette.red1};
    }
    .costWithDiscount {
      margin-right: 0.71rem;
      margin-bottom: -0.5rem;

      .priceWithoutDiscount {
        color: ${(props) => props.theme.color_text_primary_l5};
        font-size: 1rem;
        text-decoration-line: line-through;
        margin-bottom: -0.21rem;
      }
      .priceWithDiscount {
        font-weight: 600;
        font-size: 1.25rem;
        .costCurrency {
          font-size: 0.8125rem;
          color: ${(props) => props.theme.color_text_primary};
          font-weight: 100;
        }
      }
    }
  }
`;

export const CheckoutItemCount = styled.div`
  display: flex;
  align-items: center;
  width: 38%;
  justify-content: space-between;
  .countNumber {
    font-weight: 600;
    font-size: 1.375rem;
  }
  @media only screen and (max-width: 335px) {
    width: 45%;
  }
`;

export const PlusCountItem = styled(Button)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 35px !important;
  width: 35px !important;
  position: relative;
  ::before {
    content: "";
    background-color: ${(props) => props.theme.primary};
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
  }
  /* background-color: #faf6e0 !important; */
  border: 1.5px solid ${(props) => props.theme.primary} !important;
  border-radius: 8px !important;
  min-width: unset !important;
`;

export const MinusCountItem = styled(Button)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 35px !important;
  width: 35px !important;
  background-color: unset !important;
  border: 1.5px solid ${(props) => props.theme.color_border_primary} !important;
  border-radius: 8px !important;
  min-width: unset !important;
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.71rem;
  background-color: ${(props) => props.theme.color_background_primary};
  padding: 0 2rem;
  position: fixed;
  bottom: 0;
  z-index: 1100;
  box-shadow: ${(props) => props.theme.box_shadow_primary};
  @media (min-width: 800px) {
    max-width: 800px;
  }
`;

export const ConfirmCheckoutWrapper = styled.div`
  width: auto;
`;

export const CheckoutButton = styled(Button)`
  padding: 1rem 1.7rem !important;
  position: relative;
  background: ${(props) => props.theme.primary} !important;
  border-radius: 10px !important;
  justify-content: center;
  align-items: center;

  .checkoutButtonText {
    font-size: 1.07rem !important;
    margin-right: 10px !important;
    font-weight: 600 !important;
    color: ${(props) => props.theme.textColorOfPrimaryButtons};
  }
  .checkoutButtonWrapper {
    display: flex !important;
    align-items: center !important;
  }
`;

export const TotalPriceWrapper = styled.div`
  align-items: start;
  .TotalPriceText {
    color: ${(props) => props.theme.color_text_primary_l5};
    font-size: 0.875rem;
    margin-bottom: 0.35rem;
  }
  .TotalPrice {
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 600;
    font-size: 1.375rem;

    .costCurrency {
      font-size: 0.8125rem;
      color: ${(props) => props.theme.color_text_primary_l5};
    }
  }
`;
