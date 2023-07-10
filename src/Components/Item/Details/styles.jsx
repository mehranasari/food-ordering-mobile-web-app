import styled from "styled-components";
import { Col } from "../../../Kit/Column";
import { Row } from "../../../Kit/Row";
import { palette } from "../../../Shared/Theme/Palette";

export const ItemDetailsWrapper = styled(Col)`
  direction: rtl;
  overflow-y: auto;
  width: 100vw;
  // margin-top: 5.14rem;
  padding-bottom: 5.71rem;
  @media (min-width:800px){
    width:800px;
  }
`;

export const DetailText = styled(Row)`
  justify-content: center;
  width: 50%;
  font-weight: 600;
  font-size: 1.1875rem;
  color: ${props=> props.theme.color_text_secondary};
`;

export const MoreDetail = styled(Row)`
  width: 25%;
  justify-content: space-around;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  background-color: ${props=>props.theme.color_background_primary};
  border-radius: 36px;
  z-index: 10;
`;

export const ItemPicture = styled(Row)`
  width: 100%;
  justify-content: center;
  padding: 0 0 20px 0;
  .itemImage {
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 16rem;
    @media only screen and (max-width: 370px) {
      height: 12rem;
    }
  }
`;

export const ItemDescription = styled(Col)(({ hasImage }) => (`
  width: 100%;
  justify-content: center;
  margin-bottom: 30px;
  margin-top:${hasImage ? 0 : "1rem"};

  .name {
    margin: 10px auto 15px;
    font-weight: 600;
    font-size: 1.1875rem;
    color:${props=>props.theme.color_text_primary};
  }
  .description {
    font-size: 1rem;
    line-height: 24px;
    color:${props=>props.theme.gray3};
    padding: 0 1.42rem;
  }
`));

export const ItemSize = styled(Row)`
  width: 100%;
  /* height: 5rem; */
  cursor:pointer;
  justify-content: center;
  position:relative;
  color:${props=>props.theme.textColorOfPrimaryButtons};
  

  ::before {    
      content: "";
      background-color: ${props=> props.selected? props.theme.primary : props.theme.color_background_secondary};
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      border-radius: 12px;
      opacity: ${props => props.selected?  "0.1" : "1"};
}

  /* background: ${(props) =>
    props.selected
      ? "linear-gradient(0deg,rgba(255,221,2,.1),rgba(255,221,2,.1))"+ props.theme.color_background_secondary
      :props.theme.color_background_secondary}; */
  border-radius: 12px;
  justify-content: space-between;
  color:${props=>props.theme.color_text_primary};
  padding: 1rem 1.42rem;
  margin-bottom: 0.71rem;
  border: ${(props) => props.selected ? `1px solid ${props.theme.primary}` : "none"};
  .checkButton {
    position: absolute !important;
    right: -1.1rem;
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.primary};
    color:${props => props.theme.color_text_primary};
    border-radius: 0.5rem;
  }
  .selectedSignifier {
    position:relative;
    width: 5px;
    height: 15px;
    border-radius: 5px;
    color:${props=>props.theme.textColorOfPrimaryButtons};
    background-color: ${(props) => props.theme.primary};
  }
  .sizeText {
    position:relative;
    font-weight: ${(props) => (props.selected ? 600 : 500)};
    font-size: 1rem;
    color: ${props=>props.theme.gray2};

  }
  .costWithoutDiscount {
    position:relative;

    display: flex;
    align-items: center;
    .costText {
      font-weight: 600;
      font-size: 1.25rem;
      .costCurrency {
        font-size: 0.8125rem;
        color:${props=>props.theme.color_text_primary};
        font-weight: 100;
      }
    }
  }
  .costWithDiscountWrapper {
    display: flex;
    position:relative;
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
        color:${props=>props.theme.color_text_primary_l5};
        font-size: 1rem;
        text-decoration-line: line-through;
        margin-bottom: -0.21rem;
      }
      .priceWithDiscount {
        font-weight: 600;
        font-size: 1.25rem;
        .costCurrency {
          font-size: 0.8125rem;
          color:${props=>props.theme.color_text_primary};
          font-weight: 100;
        }
      }
    }
  }
`;
