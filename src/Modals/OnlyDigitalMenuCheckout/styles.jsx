import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import Button from "@material-ui/core/Button";
import { palette } from "../../Shared/Theme/Palette";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";
export const StyledSwipeableDrawer = styled(MuiSwipeableDrawer)`
.MuiPaper-root {
  display: flex;
  align-items: center;

}
`

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
  padding: 0 1.421rem;
  justify-content: center;
  min-height: 16.28rem ;
  height: auto;
  position: relative;
  .alarm{
    margin-bottom:1rem;
  }
  .ItemsContainerTitle{
    font-size:1.214rem;
    font-weight: 600;
    margin:1rem 1rem 1.421rem 0;

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

export const NoteWrapper = styled(Row)`
height: 5.71rem;
background-color:${props=>props.theme.color_background_primary} ;
padding: 0px 2rem;
z-index: 1100;
box-shadow: ${props=>props.theme.box_shadow_secondary};
position:fixed;
bottom:0;
width:100%;
padding-top: 10px;
@media (min-width:800px){
max-width:800px;
}
`
export const NoteContainer = styled(Row)`
width:100%;
align-items: center;
justify-content: space-between;
.TotalPriceText {
    color: ${(props) => props.theme.color_text_primary_l5};
    font-size: 1rem;
    font-weight: 700;

  }
  .TotalPrice {
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 600;
    font-size: 1.375rem;
}
    .costCurrency {
      font-size: 0.8125rem;
      color: ${(props) => props.theme.color_text_primary};
    }
    
`
export const PaymentsDetailsSection = styled(Col)`
  width: 100%;
  background-color: ${props => props.theme.color_background_primary};
  padding:0 2.5rem 1.563rem 2.5rem;
  margin-top: 0.938rem;
  .paymentsDetailsSectionTitle {
    font-weight: 600;
    font-size: 1.214rem;
  }
`;

export const PaymentDetailRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
  background-color: ${props => props.theme.color_background_primary};
  margin-top: 0.938rem;

  .paymentDetailRowTitle {
    font-size: 0.9rem;
    color: ${props => props.theme.color_text_subtitle};
  }
  .paymentDetailRowAmount {
    font-size: 1.063rem;
    font-weight: bold;
  }
  .discount {
    color:${props => props.theme?.finishedText};
  }
  .costCurrency {
        font-size: 0.8125rem;
        color: ${props => props.theme.color_text_primary};
        font-weight: 100;
      }
  .costCurrencytotalDiscountPrice{
    font-size: 0.8125rem;
    font-weight: 100;
    /* padding-right:4px; */
  }
`;

export const TotalPrice = styled(Row)`
  width: 100%;
  justify-content: space-between;
  background-color: ${props => props.theme.color_background_primary};
  padding-top: 1.25rem;
  margin-top: 1.25rem;
  border-top: 1px solid ${props => props.theme.color_border_primary};
  .totalPriceTitle {
    font-weight: 600;
    font-size: 1.063rem;
    color: ${props => props.theme.color_text_subtitle};
  }
  .totalPriceAmount {
    font-size: 1.063rem;
    font-weight: bold;
  }
  .costCurrency {
        font-size: 0.8125rem;
        color: ${props => props.theme.color_text_primary};
        font-weight: 100;
      }
`;

export const ItemSize = styled(Row)`
  width: 100%;
  justify-content: space-between;
  color: ${(props) => props.theme.color_text_primary};
  margin-top: 1rem;
  align-items: flex-end;

  .selectedSignifier {
    width: 5px;
    height: 15px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
  }
  .sizeText {
    font-weight: 600;
    font-size: 0.9375rem;
    color:  ${(props) => props.theme.color_text_subtitle};
    /* margin-bottom: 5px; */
  }
  .costWithoutDiscount {
    display: flex;
    align-items: center;
    .costText {
      font-weight: 600;
      font-size: 1.25rem;
      .costCurrency {
        font-size: 0.8125rem;
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
      height: 2.57rem;
      width: 2.57rem;
      border: 1.5px solid  ${palette.red1};
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 900;
      color:  ${palette.red1};
    }
    .costWithDiscount {
      margin-right: 0.71rem;
      margin-bottom: -0.5rem;

      .priceWithoutDiscount {
        color:  ${(props) => props.theme.color_text_primary_l5};
        font-size: 1rem;
        text-decoration-line: line-through;
        margin-bottom: -0.21rem;
      }
      .priceWithDiscount {
        font-weight: 600;
        font-size: 1.25rem;
        .costCurrency {
          font-size: 0.8125rem;
          color: #212121;
          font-weight: 100;
        }
      }
    }
  }
`;
