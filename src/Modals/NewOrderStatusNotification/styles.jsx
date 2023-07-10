import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Button } from "@material-ui/core";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";

export const StyledSwipeableDrawer = styled(MuiSwipeableDrawer)`
  .MuiPaper-root {
    display: flex;
    align-items: center;
    padding-top: 1rem;
  }
`;

export const NewOrderStatusNotificationDrawerWrapper = styled(Row)`
  width: 100%;
`;
export const IconWrapper = styled(Row)`
  width: 100%;
  justify-content: flex-start;
  padding: 1.071rem 2.5rem 0 2.5rem;
`;
export const BodyWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  min-height: 30rem;
  padding: 3.571rem 1.786rem 1.786rem 1.786rem;
  margin-bottom: 6rem;

  .orederInfoRow {
    justify-content: center;
    align-items: center;
  }
  .msg {
    font-size: 1.571rem;
    font-weight: 700;
    margin-top: 1.429rem;
    text-align: center;
  }
  .orderId-title {
    color: ${(props) => props.theme.color_text_secondary};
    margin-top: 2.143rem;
  }
`;

export const OrderId = styled.p`
  font-size: 1.571rem;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const OrderHistoryAction = styled(Button)`
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.color_background_primary};
  border: 1.5px solid ${(props) => props.theme.color_border_primary};
  border-radius: 0.85rem;
  color: ${(props) => props.theme.color_text_primary};
  padding: 1.071rem 1.42rem;
  margin-bottom: 1.42rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1.786rem;
  position: fixed;
  bottom: 0;
  z-index: 1100;
  max-width: 800px;
`;
export const StaticAlertContainer = styled.div`
  margin-top: 1rem;
`;
