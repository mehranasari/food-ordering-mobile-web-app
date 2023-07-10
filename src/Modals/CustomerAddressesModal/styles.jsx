import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";
import { Button } from "@mui/material";
export const CustomerAddressesContainer = styled(Col)`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  gap: 1rem;
  @media (max-width: 500px) {
    // padding: 1rem 0rem;
  }
`;
export const CustomerAddressesDrawerWrapper = styled(Row)`
  width: 100%;

  .titleText {
    @media (max-width: 400px) {
      margin-right: 1rem;
    }
  }
  .emeptyBox {
    width: 6.286rem !important;
  }
`;

export const CustomerAddressesStyledSwipeableDrawer = styled(
  MuiSwipeableDrawer
)`
  .MuiPaper-root {
    display: flex;
    align-items: center;
    height: auto;

  }
  .menuSizeHandlerIconWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 2.14rem;
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
export const EmeptyBox = styled.div`
  width: 6.286rem;
`;
export const BodyContainer = styled.div`
  padding: 0 1.429rem 0 0;
  justify-content: center;
  width: 100%;
`;

export const NoAccessWrapper = styled(Col)`
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 1.429rem 0 1.429rem 1.429rem;

  .title {
    font-size: 1.286rem;
    margin-top: 1.714rem;
    font-weight: 600;
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
  padding: 0.857rem !important;
  position: relative;
  background-color: ${(props) => props.theme.primary}!important;
  border-radius: 0.714rem !important;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 335px) {
    padding: 0.714rem 1.428rem;
  }
  .signinButtonText {
    font-size: 1.214rem;
    font-weight: 600;
    color: ${(props) => props.theme.textColorOfPrimaryButtons}!important;
  }
`;
export const HeaderTitle = styled.div`
  font-size: 1rem;
`;
export const AddNewAddress = styled(Button)`
  background: ${(props) => props.theme.color_background_primary} !important;
  border-radius: 0.56rem;
  font-size: 0.929rem;
  text-align: right;
  color: ${(props) => props.theme.color_text_subtitle} !important;
  gap: 0.286rem;
  display: flex;
  flex-direction: row;
  padding: 0.571rem 0.857rem;
  letter-spacing: 0 !important;
  .icon-wrapper {
    align-items: center;
  }
`;
export const HeaderIconBackWrapper = styled(Row)`
  padding: 0.714rem;
  flex-wrap: nowrap;
  width: 6.286rem;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: transparent;
  // z-index: 1000;
`;
export const HeaderIconBackButton = styled(Button)`
  border-radius: 10px !important;
  background-color: transparent !important;
  padding: 0 !important;
  width: 3rem;
  min-width: 3rem !important;
  height: 3rem;
  align-items: center;
  justify-content: center;
`;
export const LoadingWrapper = styled(Col)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 600;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1.5px);
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
`;