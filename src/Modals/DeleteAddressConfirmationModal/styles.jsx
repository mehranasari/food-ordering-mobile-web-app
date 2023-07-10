import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";
import { Button } from "@material-ui/core";
import { palette } from "../../Shared/Theme/Palette";

export const DeleteAddressConfirmationModalDrawerWrapper = styled(Row)`
  width: 100%;
  .titleText {
    @media (max-width: 400px) {
      margin-right: 1rem;
    }
  }
`;

export const DeleteAddressConfirmationStyledSwipeableDrawer = styled(MuiSwipeableDrawer)`
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

export const BodyContainer = styled.div`
  // padding: 0 2rem;
  justify-content: center;
  width: 100%;
  overflow: auto;
  max-height: 82vh;
`;

export const HeaderTitle = styled.div`
  font-size: 1rem;
`;

export const ConfirmationModalHeader = styled(Col)`
  width: 100%;
  padding: 1.875rem 2.5rem 1.25rem;
  background-color: transparent;
  align-items: center;
  justify-content: flex-start;
  border-radius: 1rem 1rem 0 0;
  position: relative;
`;

export const CloseIconContainer = styled(Row)`
  position: absolute;
  right: 2.5rem;
  top: 1.875rem;
  cursor: pointer;
`;

export const HeaderText = styled(Row)`
  font-size: 1.143rem;
  line-height: 1.75rem;
  text-align: right;
  margin: 2.286rem 0rem;
`;

export const ConfirmationModalBody = styled(Col)`
  width: 100%;
  // min-height: 10.6875rem;
  padding: 20px 24px;
  align-items: center;
  justify-content: center;
`;

export const BodyText = styled(Col)`
  font-size: 0.9375rem;
  line-height: 2rem;
  text-align: center;
`;

export const ActionContainer = styled(Row)`
  width: 100%;
  justify-content: center;
  margin-top: 1.5625rem;
  gap: 1.714rem;
  flex-wrap:nowrap;
`;

export const CancelButton = styled(Button)`
  background: ${props=>props.theme.color_background_secondary};
  border-radius: 0.714rem;
  width: calc(50% - 0.857rem) !important;
  color: ${props=>props.theme.color_text_secondary} !important;
  font-size: 1.143rem;
  height: 3.643rem;
`;

export const CountinueButton = styled(Button)`
  width: calc(50% - 0.857rem) !important;
  border-radius: 0.714rem;
  background-color: ${(props) =>
    props?.disabled ? props.theme.color_background_disable : props.theme.color_background_primary}!important;
  color: ${(props) =>props?.disabled? props.color_text_disable :  palette.red2} !important;
  border: ${(props) =>props?.disabled ? props.color_background_disable :  palette.red2} 1.5px solid;
  font-size: 1.143rem;
  height: 3.643rem;
`;
