import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { Button } from "@material-ui/core";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";

export const StyledSwipeableDrawer = styled(MuiSwipeableDrawer)`
  .MuiPaper-root {
    display: flex;
    align-items: center;
    padding-top: 1rem;
  }
`;

export const OrderQrCodeModalDrawerWrapper = styled(Row)`
  width: 100%;
`;
export const IconWrapper = styled(Row)`
  width: 100%;
  justify-content: space-between;
  padding: 1.071rem 2.5rem 0 2.5rem;
  .empety {
    width: 1.143rem;
    height: 1.143rem;
  }
`;
export const BodyWrapper = styled(Col)`
  width: 100%;
  overflow-y: auto;
  padding: 2.857rem 4.286rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
  @media (max-width: 400px) {
    padding: 2.857rem 2rem;
  }
`;

export const OrderId = styled(Col)`
  color: ${(props) => props.theme.color_text_secondary};
  text-alogn: center;
  justify-content: center;
  align-items: center;
  .orderId {
    font-weight: 600;
    font-size: 1.571rem;
    color: ${(props) => props.theme.color_text_primary};
  }
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
`;
export const HearderTitle = styled(Row)`
  font-weight: 700;
  font-size: 1.143rem;
  text-align: center;
  gap: 0.714rem;
`;

export const QrCodeGuid = styled.div`
  font-weight: 600;
  font-size: 1.429rem;
  text-align: center;
`;
export const QrCodeBody = styled(Col)`
  width: 100%;
  align-items: center;
  margin: 2.857rem 0;
  opacity: ${(props) => props.opacity};
`;

export const QrCodeMessage = styled.div`
  color: ${(props) => props.theme.color_text_subtitle};
  text-align: center;
  width: 17rem;
  margin-top: 1.429rem;
`;
