import { Button } from "@material-ui/core";
import styled from "styled-components";
import { Col } from "../../Kit/Column";
import { Row } from "../../Kit/Row";
import { theme } from "../../Shared/Theme";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core/styles";
export const PaymentPageWrapper = styled.div`
  width: 100%;
  z-index: 100;
  height:calc(100vh - 5rem);
  @media (min-width:800px){
    height:calc(100% - 5rem);

  }
`;

export const Header = styled(Row)`
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0;
  width: 100%;
  @media only screen and (max-width: 335px) {
    padding: 20px 20px 0;
  }
`;

export const PaymentPageBody = styled.div`
  /* display: flex; */
  margin-top: 4rem;
  width: 100%;
  padding: 1rem 2rem 0;
  overflow: auto;
  justify-content: flex-start;
`;

export const OrderTypeMethod = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
  padding-bottom: 1.78rem;
  margin-top: 1rem;

  .orderTypeMethodTitle {
    font-size: 1rem;
    /* position:relative; */
    color: ${(props) => props.theme.blueGray3};
    margin-bottom: 15px;
  }
`;

export const OrderTypeIconAndTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.071rem;

  .title {
    margin-right: 0.71rem;
    font-size: 1.28rem;
    font-weight: 600;
  }
`;

export const OrderDeliveryMessage = styled.div`
  margin: 1rem 0;
`;

export const OrderType = styled(Button)`
  width: 100% !important;
  height: auto !important;
  min-height: 56px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  color:${props=>props.theme.color_text_primary};
  background-color: ${(props) => props.theme.color_background_secondary} !important;
  border-radius: 10px !important;
  margin: 0.714rem 0 !important;
  padding: 0.71rem 1.5rem 0.71rem 1rem !important;
  text-align: center;
  border: ${(props) =>
    (props.tablenumber || props.pickuptime) &&
    "1px solid" + props.theme.primary} !important;
  position: relative;
  ::before {
    content: "";
    background-color: ${(props) =>
      (props.tablenumber || props.pickuptime) &&
      props.theme.primary} !important;
    opacity: ${(props) => (props.tablenumber || props.pickuptime ? 0.1 : 1)};
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  /* background-color: ${(props) =>
    (props.tablenumber || props.pickuptime) && "#FAF6E0"} !important; */

  span {
    position: relative;
    /* padding-right:0.5rem; */
  }
  .selectionTip {
    position: relative;
    color: ${(props) => props.theme.color_text_primary};
    font-size: 1rem;
  }

  .selectedItemInfo {
    position: relative;
    font-size: 1.071rem !important;
    font-weight: 700 !important;
    padding-right: 0.5rem;
  }
  .checkButton {
    position: absolute !important;
    right: -2.571rem;
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.color_text_primary};
    border-radius: 0.5rem;
  }
`;

export const OrderTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:${props=>props.theme.color_text_primary};

  .blankSpace {
    width: 0.64rem;
  }
`;

export const ChangeButton = styled(Row)`
  /* width: auto;
  height: auto; */
  position: relative;
  font-size: 1rem;
  padding: 0.35rem 1rem;
  color:${props=>props.theme.color_text_primary};

  ::before {
    content: "";
    background-color: ${(props) => props.theme.primary};
    opacity: 0.3;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 0.57rem;
  }
  span {
    position: relative;
  }
`;

export const UserMessage = styled(Col)`
  width: 100%;
  padding: 1.5rem 0px;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
  .userMessageTitle {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin-top: 1rem;
`;

export const InvoiceContainer = styled(Col)`
  width: 100%;
  margin: 1.78rem 0 6rem 0;
  padding: 0 0.71rem;
`;

export const TotalPrice = styled(Row)`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;

  .totalPriceText {
    font-weight: 600;
    font-size: 1.1875rem;
  }
  .totalPriceNumber {
    font-weight: 600;
    font-size: 1.4rem;
  }
  .costCurrency {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.gray4};
  }
`;

export const TotalDiscount = styled(Row)`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;

  .totalDiscountText {
  }
  .totalDiscountNumber {
    color: ${theme["finishedText"]};
    font-weight: bold;
  }
  .costCurrency {
    font-size: 0.8125rem;
    font-weight: normal;
  }
  .miness {
    padding-right: 0.2rem;
  }
`;
export const StaticAlertContainer = styled.div`
  width: 100%;
`;
export const TippingOptionsContainer = styled(Row)`
  margin-top: 1rem;
  .optionsBoxContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex: 1;
    gap: 0.74rem;
  }
`;
export const TippingOptionWrapper = styled.div`
  width: 100%;
  /* width:${(props) =>
    props.status ? `calc(100% / ${props.boxCount} - 0.357rem)` : 0}; */
`;
export const TippingOption = styled(Col)`
  width: 100%;
  height: 4.071rem;
  border-radius: 0.571rem;
  cursor:pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${(props) => (props.isActive ? props.theme.primary : "transparent")};
  color:${(props) => props.theme.color_text_primary};
  position: relative;

  ::before {
    content: "";
    background-color: ${(props) =>
      props.isActive ? props.theme.primary : props.theme.color_background_secondary};
    opacity: ${(props) => (props.isActive ? 0.1 : 1)};
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 0.57rem;
  }
  .title {
    position: relative;
    font-weight: 600;
    font-size: 0.857rem;
  }
  .count {
    position: relative;
    color: ${(props) => props.theme.gray2};
    font-size: 0.786rem;
    span {
      margin-right: 0.1rem;
      font-size: 0.5rem;
    }
  }
`;
// CustomPriceInputWrapper,
// CustomPriceInput
export const CustomPriceInputWrapper = styled.div`
  position: relative;
  margin-top: -5px;
  /* .placeHolder{
  position: absolute;
  top:1.143rem;
  right:1rem;
font-size: 0.857rem;
} */
  .detail {
    position: absolute;
    top: 1.2rem;
    left: 1rem;
    display: flex;
    gap: 1.214rem;
    align-items: center;
    span {
      font-size: 0.714rem;
      color:${props=>props.theme.color_text_primary};
    }
  }
`;
export const CustomPriceInput = styled.input`
  direction: ${(props) => (props.value === "" ? "rtl" : "ltr")};
  height: 3.8rem;
  width: 100%;
  border-radius: 0.7rem;
  border: 0.5px solid
    ${(props) => (props.isActive ? props.theme.primary : props.theme.color_border_primary)};
  color: ${(props) => props.theme.color_text_primary};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding: 0 1rem 0 6rem;
  font-family: "IranSanse" !important;
  font-weight: 600;
  background-color: ${(props) =>
    props.isActive ? props.theme.primary + "10" : props.theme.color_background_secondary};

  :focus {
    outline: none;
    background-color: ${(props) => props.theme.color_background_primary};
    border: 1.5px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.color_text_primary};
    box-sizing: border-box;
    font-size: 1rem;
  }
  ::placeholder {
    font-family: "IranSanse" !important;
    letter-spacing: 0;
    font-size: 0.857rem;
    padding: 0;
    font-weight: 400;
  }
`;

export const TippingAccordion = withStyles({
  root: {
    backgroundColor: "transparent",
    borderRadius: "0.85rem",
    display: "block",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
  },
  expanded: {},
})(MuiAccordion);

// export const TippingAccordionSummary = withStyles({
//   root: {
//     borderRadius: "50px",
//     fontFamily: "IranSanse",
//     fontWeight: 600,
//     fontSize: "1rem",
//     padding: "0",
//     minHeight: "0rem",
//     "&$expanded": {
//       minHeight: "0rem",
//     },
//   },
//   content: {
//     margin: "0px",
//     "&$expanded": {
//       margin: "0px",
//     },
//   },
//   expanded: {},
//   expandIcon: {},
// })(MuiAccordionSummary);

export const TippingAccordionSummary=styled(MuiAccordionSummary)`
&.MuiAccordionSummary-root {
  font-family: IranSanse;
  border-radius:50px;
  font-size: 1rem;
  font-weight: 600;
  padding: 0;
  min-height: 0rem;
  color: ${(props) => props.theme.color_text_primary};

  &.Mui-expanded {
    min-height: 0rem;
  }
}
.MuiAccordionSummary-content {
  margin: 0px;
  &.Mui-expanded {
    margin: 0px;
  }
}
.MuiAccordionSummary-expandIconWrapper{
  padding:12px;
}
`

export const TippingBody = styled.div`
  margin-top: 0.35rem;
  /* padding: 0 0.71rem 1rem 0.71rem; */
`;

export const TippingAccordionWrapper = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
`;

export const DiscountCodeAccordionWrapper = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
`;

export const DiscountCodeAccordion = withStyles({
  root: {
    // backgroundColor: "#F9F9F9",
    borderRadius: "0.85rem",
    display: "block",
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
  },
  expanded: {},
})(MuiAccordion);

export const DiscountCodeAccordionSummary = withStyles({
  root: {
    borderRadius: "50px",
    fontFamily: "IranSanse",
    fontWeight: 600,
    fontSize: "1rem",
    padding: "0",
    minHeight: "0rem",
    "&$expanded": {
      minHeight: "0rem",
    },
  },
  content: {
    margin: "0px",
    "&$expanded": {
      margin: "0px",
    },
  },
  expanded: {},
  expandIcon: {},
})(MuiAccordionSummary);

export const DiscountCodeBody = styled.div`
  margin-top: 0.35rem;
  /* padding: 0 0.71rem 1rem 0.71rem; */
`;

export const DiscountCodeOptionsContainer = styled(Row)`
  margin-top: 1rem;
  .optionsBoxContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex: 1;
    gap: 0.74rem;
  }
`;

export const CustomDiscountCodeInput = styled.input`
  direction: ${(props) => (props.value ? "ltr" : "rtl")};
  height: 3.8rem;
  width: 100%;
  border-radius: 0.7rem;
  border: solid
    ${(props) =>
      props.error
        ? props.theme.red1
        : props?.value
        ? props.theme.primary
        : props.theme.gray7};
  color: ${(props) => props.theme.color_text_primary};
  font-size: 1rem;
  padding: 0 7rem 0 1rem;
  font-family: "IranSanse" !important;
  font-weight: 600;
  background-color: ${(props) =>
    props?.value && !props?.error ? props.theme.color_background_primary : props.theme.color_background_secondary};

  :focus {
    outline: none;
    background-color: ${(props) => props.theme.color_background_primary};
    border: 1.5px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.color_text_primary};
    box-sizing: border-box;
    font-size: 1rem;
  }
  ::placeholder {
    font-family: "IranSanse" !important;
    letter-spacing: 0;
    font-size: 0.857rem;
    padding: 0;
    font-weight: 400;
    text-align: rtl;
  }
`;

export const CustomDiscountCodeInputWrapper = styled.div`
  position: relative;
  margin-top: -5px;
  width: 100%;

  .apply-discount {
    position: absolute;
    top: 0.357rem;
    right: 0.357rem;
  }
  .loading {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
  }
`;

export const ApplyDiscountCodeButton = styled(Button)`
  font-size: 1.071rem;
  font-weight: 600;
  background: ${(props) => props.theme.gray9};
  border-radius: 0.5rem;
  width: 5.786rem;
  height: 3rem;

  .MuiButton-label {
    gap: 0.714rem;

  }
`;
export const LoadingIconWrapper = styled(Row)`
  padding: 19px;
  align-items: center;
  justify-content: center;
`;
export const RemoveDiscountCodeButton = styled(Button)`
  font-size: 0.929rem;
  background: transparent !imporatnt;
  color: ${(props) => props.theme.gray2};
`;
export const NotSuccessfulApplyDiscountCode = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.red2};
  margin-top: 0.357rem;
`;
export const SuccessfulApplyDiscountCode = styled(Row)`
  justify-content: space-between;
  width: 100%;
  font-size: 1.143rem;
  font-weight: 600;
  color: ${(props) => props.theme.green1};
  margin-top: 0.7rem;
  .bold {
    font-weight: 700;
    margin: 0 0.3rem;
  }
`;
export const CircularCancelWrapper = styled(Button)`
  min-width: 1.5rem;
  position: absolute;
  right: 0.786rem;
  top: 0.786rem;
`;
