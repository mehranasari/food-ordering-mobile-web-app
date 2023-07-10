import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { SwipeableDrawer, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { theme } from "../../Shared/Theme";
import { palette } from "../../Shared/Theme/Palette";
export const StyledSwipeableDrawer = withStyles({
  paper: {
    display: "flex",
    alignItems: "center",
  },
})(SwipeableDrawer);

export const OrderDetailsHistoryDrawerWrapper = styled(Row)`
  width: 100%;
`;

export const MenuSizeHandlerIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2.14rem;
`;

export const Header = styled(Row)`
  justify-content: space-between;
  width: 100%;
  font-size: 1.0625rem;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  padding: 0.4rem 1rem;
  z-index: 1000;

  .titleText {
    display: flex;
    justify-content: center;
    width: 50%;
    font-weight: 600;
    font-size: 1.188rem;
    color: ${(props) => props.theme.color_text_secondary};
  }
  .iconWrapper {
    display: flex;
    justify-content: flex-start;
    padding-right: 0.625rem;
    width: 25%;
    height: 45px;
    align-items: center;
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  min-height: 30rem;

  background-color: ${(props) => props.theme.color_background_secondary};
  height: calc(100vh - 4.085rem);
  margin-top: 5rem;
  @media (min-width: 800px) {
    max-height: 1000px;
  }
`;

export const OrderBasicInfoSection = styled(Col)`
  width: 100%;
  background-color: ${(props) => props.theme.color_background_primary};
  padding: 1.563rem;
`;

export const OrderVenue = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0 0.625rem 1.875rem;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
  .venueLogo {
    background-color: ${(props) => props.theme.color_background_secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.438rem;
    height: 3.438rem;
    margin-left: 1.625rem;
    border-radius: 0.625rem;
    padding: 1rem;
  }
`;

export const VenueLogo = styled.img`
  width: 3.438rem;
  height: 3.438rem;
  margin-left: 1.625rem;
  border-radius: 0.625rem;
`;

export const VenueDesc = styled(Col)`
  justify-content: space-evenly;
  width: 70%;
  .VenueName {
    font-size: 1.125rem;
  }
  .VenueAddress {
    color: ${(props) => props.theme.color_text_subtitle};
    text-align: justify;
    font-size: 0.813rem;
  }
`;

export const OrderInfoContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
  margin-top: 1.875rem;
  .orderInfoTitle {
    color: ${(props) => props.theme.color_text_action};
    font-size: 0.9375rem;
    margin-bottom: 0.313rem;
  }
`;

export const OrderRefContainer = styled(Col)`
  width: 100%;
  justify-content: flex-start;
`;

export const OrderRef = styled(Col)`
  width: 50%;
  justify-content: flex-start;

  .orderRefId {
    font-size: 1.375rem;
    font-weight: 600;
  }
`;

export const HistoryItemPreviousIconWrapper = styled(Row)`
  width: 50%;
  justify-content: flex-end;
`;

export const HistoryItemStatus = styled.div`
  margin: 1rem 0;
  width: 100%;
`;

export const OrderPlaced = styled(Col)`
  justify-content: flex-start;
  margin-top: 1.25rem;
`;

export const OrderTyped = styled(Col)`
  justify-content: flex-start;
  margin-top: 1.25rem;
  .OrderTyped {
    display: flex;
    .OrderTypedText {
      margin-right: 0.625rem;
    }
  }
`;

export const VenueArea = styled(Col)`
  justify-content: flex-start;
  margin-top: 1.25rem;
`;
export const OrderAddress = styled(Col)`
  justify-content: flex-start;
  margin-top: 1.25rem;
  .OrderAddressTitle {
    color: ${(props) => props.theme.color_text_action};
    font-size: 0.9375rem;
    margin-bottom: 0.313rem;
  }
`;

export const PaymentsDetailsSection = styled(Col)`
  width: 100%;
  background-color: ${(props) => props.theme.color_background_primary};
  padding: 1.563rem 2.5rem;
  margin-top: 0.938rem;
  .paymentsDetailsSectionTitle {
    font-weight: 600;
    font-size: 1.063rem;
  }
`;

export const PaymentDetailRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color_background_primary};
  margin-top: 0.938rem;

  .paymentDetailRowTitle {
    font-size: 0.9rem;
    color: ${(props) => props.theme.gray3};
  }
  .paymentDetailRowAmount {
    font-size: 1.063rem;
    font-weight: bold;
  }
  .discount {
    color: ${theme["finishedText"]};
  }
  .costCurrency {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 100;
  }
  .costCurrencytotalDiscountPrice {
    font-size: 0.8125rem;
    font-weight: 100;
    /* padding-right:4px; */
  }
`;

export const TotalPrice = styled(Row)`
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color_background_primary};
  padding-top: 1.25rem;
  margin-top: 1.25rem;
  border-top: 1px solid ${(props) => props.theme.color_border_primary};
  .totalPriceTitle {
    font-weight: 600;
    font-size: 1.063rem;
    color: ${(props) => props.theme.gray3};
  }
  .totalPriceAmount {
    font-size: 1.063rem;
    font-weight: bold;
  }
  .costCurrency {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 100;
  }
`;

export const ItemSummarySection = styled(Col)`
  width: 100%;
  background-color: ${(props) => props.theme.color_background_primary};
  padding: 1.563rem 2.5rem;
  margin-top: 0.938rem;
  .itemSummarySectionTitle {
    font-weight: 600;
    font-size: 1.063rem;
  }
`;

export const ItemContainer = styled(Row)`
  width: 100%;
  padding: 1.25rem 0;
  ${(props) =>
    props.itemIndex < props.itemsCount - 1 &&
    "border-bottom: 1px solid" + props.theme.color_border_primary}
`;

export const ItemInfoWrapper = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

export const ItemInfoContainer = styled(Row)`
  align-items: flex-start;
`;

export const ItemImage = styled.img`
  width: 3.438rem;
  height: 3.438rem;
  border-radius: 0.625rem;
`;

export const ItemInfo = styled(Col)`
  margin-right: 0.625rem;
  justify-content: space-between;
  .itemName {
    font-size: 1rem;
  }
  .itemSize {
    font-size: 0.938rem;
    color: ${(props) => props.theme.gray4};
  }
`;

export const ItemPrice = styled(Row)`
  font-size: 1.063rem;
  margin-right: auto;
`;

export const ItemPreferencesAndExtras = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;

  .quantity {
    display: flex;
    font-weight: bold;
  }
`;

export const ItemPreferencesAndExtrasNameContainer = styled(Row)`
  .dot {
    width: 0.35rem;
    height: 0.35rem;
    background-color: ${(props) => props.theme.gray2};
    border-radius: 100%;
    margin-left: 0.5rem;
  }
`;

export const ItemPreferencesAndExtrasQtyAndPriceContainer = styled(Row)`
  .quantity {
    margin-right: 0.5rem;
    font-weight: bold;
  }
  .extraPrice {
    margin-right: 0.5rem;
  }
  .itemQuantity {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;
export const ExtraItemSize = styled(Row)`
  width: 100%;
  justify-content: space-between;
  color: ${(props) => props.theme.color_text_primary};
  align-items: flex-end;

  .costWithoutDiscount {
    display: flex;
    align-items: center;

    .costText {
      /* font-weight: 600; */
      font-size: 1rem;
      .costCurrency {
        font-size: 0.7rem;
        color: ${(props) => props.theme.color_text_primary};
        font-weight: 100;
      }
    }
  }
  .costWithDiscountWrapper {
    display: flex;
    align-items: flex-end;

    .discountPercent {
      display: flex;
      margin-top: 5px;
      justify-content: center;
      align-items: center;
      height: 2.3rem;
      width: 2.3rem;
      border: 1.5px solid ${palette.red1};
      border-radius: 8px;
      font-size: 0.9rem;
      /* font-weight: 900; */
      color: ${palette.red1};
    }
    .costWithDiscount {
      margin-right: 0.71rem;
      margin-bottom: -0.5rem;

      .priceWithoutDiscount {
        color: ${(props) => props.theme.color_text_primary_l5};
        font-size: 0.9rem;
        text-decoration-line: line-through;
        margin-bottom: -0.21rem;
      }
      .priceWithDiscount {
        font-size: 0.9rem;

        .costCurrency {
          font-size: 0.7rem;
          color: ${(props) => props.theme.color_text_primary};
          font-weight: 100;
        }
      }
    }
  }
`;
export const PayButton = styled(Button)`
  background-color: ${(props) => props.theme.primary} !important;
  width: 100%;
  padding: 1.071rem 1.42rem;
  border-radius: 0.85rem;
  color: ${(props) => props.theme.textColorOfPrimaryButtons};
  padding: 1rem;
  font-size: 1.071rem;
  font-weight: 700;
  text-align: center;
`;
export const UserNote = styled(Col)`
  width: 100%;
  padding: 1.563rem 1.563rem;
  background-color: ${(props) => props.theme.color_background_primary};
  gap: 0.571rem;
  margin-top: 0.938rem;
  .userNoteTitle {
    font-weight: 600;
    font-size: 1.063rem;
  }
  .userNote {
    font-size: 1.143rem;
    color: ${(props) => props.theme.gray3};
  }
`;
export const PaySection = styled(Col)`
  width: 100%;
  padding: 0 1.563rem 1.563rem;
  background-color: ${(props) => props.theme.color_background_primary};
  gap: 1rem;
`;

export const PayAlaramContainer = styled.div`
  /* background-color: ${theme["pink1"]}; */
  border: 2px solid ${(props) => props.theme.primary};
  border-radius: 1rem;
  padding: 1.429rem;
  font-weight: 700;
  font-size: 1.071rem;
  // margin-top: 1.429rem;
  text-align: center;
  color: ${(props) => props.theme.color_text_primary};
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
  .message {
    position: relative;
  }
`;

export const NoAccessWrapper = styled(Col)`
  height: calc(100vh - 4.286rem);
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 1.714rem;

  .title {
    font-size: 1.286rem;
    margin-top: 1.714rem;
    // font-family:irs-m;
  }
  .message {
    font-size: 1.143rem;
    color: ${(props) => props.theme.gray3};
    margin-top: 0.857rem;
    margin-bottom: 2rem;
  }
`;
export const NoAccessHistoryIconWrapper = styled.div`
  padding-left: 0.571rem;
`;

export const SigninButton = styled(Button)`
  display: flex;
  width: 100%;
  padding: 1.071rem 1.786rem;
  position: relative;
  background-color: ${(props) => props.theme.primary}!important;
  border-radius: 0.857rem;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 335px) {
    padding: 0.714rem 1.428rem;
  }
  .signinButtonText {
    font-size: 1.214rem;
    font-weight: 700;
    color: ${(props) => props.theme.textColorOfPrimaryButtons}!important;
  }
`;
