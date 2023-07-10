import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { Drawer } from "@mui/material";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";
export const CustomerAddressesContainer = styled(Col)`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  // gap: 1rem;
`;
export const CustomerAddressesDrawerWrapper = styled(Row)`
  width: 100%;
  .titleText {
    @media (max-width: 400px) {
      margin-right: 1rem;
    }
  }
`;

export const CustomerAddressesStyledSwipeableDrawer = styled(Drawer)`
  .MuiPaper-root {
    display: flex;
    align-items: center;
    height: auto;
    background: ${(props) => props.theme.color_background_primary};
    max-width: 800px;
    margin:auto;
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
