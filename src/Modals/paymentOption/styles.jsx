import styled from "styled-components";
import { Row } from "../../Kit/Row";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";
import { Button } from "@material-ui/core";
import { Col } from "../../Kit/Column";
export const ItemDrawerWrapper = styled(Row)`
  width: 100%;
`;

export const StyledSwipeableDrawer = styled(MuiSwipeableDrawer)`
  .MuiPaper-root {
    display: flex;
    /* border-radius: 2.5rem 2.5rem 0 0 !important; */
    align-items: center;
    /* height: 80%; */
    height: auto;
    padding-bottom: 3rem;
  }

  .headerTitleBold {
    font-weight: 600;
  }
`;

export const Header = styled(Row)`
  justify-content: space-between;
  width: 100%;
  font-size: 1.0625rem;
  padding: 0 2.14rem;

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
    justify-content: flex-end;
    padding-right: 10px;
    width: 25%;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 0.71rem;

  .headerTitle {
    color: ${(props) => props.theme.color_text_primary};
    font-size: 1.14rem;

    .headerTitleBold {
      font-weight: 600;
    }
  }
`;

export const BodyContainer = styled.div`
  padding: 0 2rem;
  justify-content: center;
  margin-top: 3rem;
  width: 100%;
`;

export const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .totalPriceTitle {
    font-size: 1rem;
    color: ${(props) => props.theme.color_text_primary_l5};
    text-align: center;
  }

  .totalPriceAmount {
    font-size: 2rem;
    color: ${(props) => props.theme.color_text_primary};
    margin-top: 0.71rem;

    .costCurrency {
      font-size: 1.2rem;
    }
  }
`;

export const PayOptionWrapper = styled.div`
  /* display: flex;
  justify-content: center; */
  margin-top: 3rem;
`;

export const PayOption = styled(Button)`
  display: flex !important;
  height: 4.286rem;
  justify-content: space-between !important;
  width: 100%;
  background-color: ${(props) => props.theme.color_background_primary};
  border: 1.5px solid ${(props) => props.theme.color_border_primary} !important;
  border-radius: 0.85rem !important;
  color: ${(props) => props.theme.color_text_primary} !important;
  padding: 1.071rem 1.42rem !important;
  margin-bottom: 1.42rem !important;
  opacity: ${(props) => (props.disabled ? "0.5" : 1)};
  .payOptionTitle {
    font-size: 1rem;
    /* font-weight: 600; */
  }

  .withLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    .payOptionTitle {
      margin-left: 10px;
    }
  }

  .blankSpace {
    width: 0.64rem;
  }
  .end {
    justify-content: flex-end;
  }
  .start {
    justify-content: flex-start;
  }
`;

export const OnlinePortalLogo = styled.img`
  display: flex;
  justify-content: center;
  // background-image: url(${(props) => props.src});
  // background-size: cover;
  // background-position: center;
  width: auto;
  height: 26px;
`;

export const PayOnlineSeparator = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.5rem 0 2.5rem 0;

  .line {
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.color_border_primary};
    position: relative;
    display: flex;
    justify-content: center;

    .text {
      color: ${(props) => props.theme.color_text_secondary};
      position: absolute;
      top: -10px;
      padding: 0 1.2rem;
      background-color: ${(props) => props.theme.color_background_primary};
      margin: 0 auto;
    }
  }
`;
export const IconWrapper = styled(Row)`
  width: 19%;
`;

export const OnlineWalletAssetContainer = styled(Col)`
  .onlineWallet-assets {
    display: flex;
    color: ${(props) => props.theme.color_text_primary_l3};
    .onlineWallet-costumer-assets-title{
      margin-left: 0.5rem;
    }
    .priceUnit{
      display: flex;
      align-items: center;
      margin-right: 0.25rem;
      font-size: 0.75rem;
    }
  }
`;
