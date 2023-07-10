import styled from "styled-components";
import { Col } from "../../../Kit/Column";
import { Row } from "../../../Kit/Row";
import Button from "@material-ui/core/Button";
import { palette } from "../../../Shared/Theme/Palette";

export const ItemExtrasWrapper = styled(Row)`
  direction: rtl;
  overflow-y: auto;
  width: 100%;
  // margin-top: 5.14rem;
  padding-bottom: 5.71rem;
`;

export const BodyWrapper = styled(Col)`
  width: 100%;
  padding: 0 20px;
  background-color: ${(props) => props.theme.color_background_primary};
  border-radius: 36px;
  margin-top: 1rem;
  bottom: ${(props) => (props.bottom ? "120px" : "40px")};
  transition: 0.3s;
  @media only screen and (max-width: 335px) {
    bottom: 50px;
  }
  @media only screen and (min-width: 700px) {
    padding: 0 60px;
  }
`;

export const ItemExtrasGroupDescription = styled(Row)`
  margin-bottom: 1rem;
  .number {
    margin: 0 0.5rem;
    font-weight: bold;
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
    color: ${(props) => props.theme.gray2};
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
          color: #212121;
          font-weight: 100;
        }
      }
    }
  }
`;

export const ExtraGroupContainer = styled(Row)`
  width: 100%;
  position: relative;
  ::before {
    content: "";
    background-color: ${(props) =>
      props.selected
        ? props.theme.primary
        : props.theme.color_background_secondary};
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: ${(props) => (props.selected ? 0.1 : 1)};
  }
  border-radius: 12px;
  justify-content: space-between;
  align-items: flex-start;
  color: ${(props) => props.theme.color_text_primary};
  padding: 1rem 1.42rem;
  margin-bottom: 0.71rem;
  border: ${(props) =>
    props.selected ? `1px solid ${props.theme.primary}` : "none"};
`;

export const ExtraGroupName = styled(Row)`
  font-weight: 600;
  font-size: 1.25rem;
  color: ${(props) => props.theme.gray2};
  position: relative;
`;

export const ExtraGroupPic = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 14px;
  position: relative;
`;

export const ExtraGroupDetails = styled(Col)`
  width: 100%;
  position: relative;

  .sizeText {
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) => props.theme.gray2};

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

export const AddExtra = styled.button`
  font-size: 1rem;
  background: transparent;
  cursor:pointer;
  color: ${(props) => props.theme.color_text_primary};
  font-weight: 400;
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
  /* background-color: #faf6e0; */
  padding: 5px 25px;
  border-radius: 8px;
  border: 1.5px solid ${(props) => props.theme.primary};
  font-family: "IranSanse";
  span {
    position: relative;
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
`;

export const PlusCountItem = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  /* background-color: #faf6e0; */
  border: 1.5px solid ${(props) => props.theme.primary};
  border-radius: 8px;
  min-width: unset;
  :hover {
    /* background-color: #faf6e0; */
  }
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
  .icon {
    position: relative;
  }
`;

export const MinusCountItem = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  background-color: unset;
  border: 1.5px solid ${(props) => props.theme.color_border_primary};
  border-radius: 8px;
  min-width: unset;
`;
