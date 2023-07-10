import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { Button } from "@mui/material";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";
import { palette } from "../../Shared/Theme/Palette";

export const CustomerAddressActionsModalDrawerWrapper = styled(Row)`
  width: 100%;
  .titleText {
    @media (max-width: 400px) {
      margin-right: 1rem;
    }
  }
`;

export const CustomerAddressActionsStyledSwipeableDrawer = styled(
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

export const BodyContainer = styled(Col)`
  width: 100%;
  padding: 0.571rem 0 1.143rem 0;
  .address {
    margin-bottom: 4px;
    padding: 0 1.714rem;
  }
  .edit-wrapper {
    align-items: center;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 1.143rem;
  font-weight: 700;
`;

export const EditWrapper = styled(Button)`
  width: 100%;
  justify-content: start !important;
  color: ${(props) => props.theme.color_text_primary} !important;
  background: transparent !important;
  padding: 0 1.714rem !important;
  font-size: 1.143rem !important;
  .edit-Container {
    padding: 1.143rem 0;
    width: 100%;
    gap: 0.857rem;
    border-bottom: 1px solid
      ${(props) => props.theme.color_border_primary}!important;
  }
`;
export const DeleteWrapper = styled(Button)`
  width: 100%;
  color: ${palette.red2} !important;
  width: 100%;
  gap: 0.857rem;
  justify-content: start !important;
  background: transparent !important;
  padding: 1.143rem 1.714rem !important;
  font-size: 1.143rem !important;
`;
