import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { theme } from "../../Shared/Theme";
import { Button, Divider } from "@material-ui/core";

export const UnsuccessfulOrderWrapper = styled(Col)`
  justify-content: center;
  text-align: justify;
  min-height:100vh;
  @media (min-width:800px){
    min-height:100%;
  }
`;

export const UnsuccessfulOrderInner = styled(Col)`
  margin-top: 60px;
  padding: 1.5rem 2rem 2rem 2rem;
  gap: 1.786rem;
  color: ${(props) => props.theme.color_text_primary};
  .staticAlarm {
    width: 100%;
  }
`;
export const CustomerMessageContainer = styled(Col)`
  gap: 1.071rem;
`;
export const UnsuccessfulOrderMessage = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const OrderStatus = styled(Row)`
  padding: 5px 0.625rem;
  background: ${(props) => props.theme[props.bgColor]};
  border-radius: 56px;
  color: ${(props) => props.theme[props.textColor]};
  width: fit-content;
`;

export const OrderDetailContainer = styled(Row)`
  background-color: ${(props) => props.theme.color_background_secondary};
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1.071rem;
  font-weight: 700;
  text-align: center;
  gap: 1.071rem;
  justify-content: space-evenly;
`;
export const TrackingOrderContainer = styled.div`
  color: ${(props) => props.theme.gray3};
  text-align: justify;
`;

export const TrackingOrerText = styled.p`
  font-size: 0.92rem;
`;
export const TrackingOrderActions = styled(Col)`
  padding-top: 2rem;
  align-items: center;
  font-size: 1rem;
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

export const BackHomeAction = styled(Button)`
  color: ${(props) => props.theme.color_text_primary};
  width: 100%;
  padding: 1.071rem 1.42rem;
`;
export const PayButton = styled(Button)`
  background-color: ${(props) => props.theme.primary} !important;
  width: 100%;
  padding: 1.071rem 1.42rem;
  border-radius: 0.85rem;
  color: ${(props) => props.theme.textColorOfPrimaryButtons};
  padding: 1rem;
  font-size: 1.071rem;
  font-weight: 700;
  text-align: center;
  :hover {
    background-color: rgba(38, 165, 87, 0.3);
  }
`;
export const PaymentsDetailsSection = styled(Col)`
  width: 100%;
  .paymentsDetailsSectionTitle {
    font-weight: 600;
    font-size: 1.063rem;
  }
`;

export const PaymentDetailRow = styled(Row)`
  width: 100%;
  margin-top: 0.938rem;
  justify-content: space-between;

  .paymentDetailRowTitle {
    font-size: 0.9rem;
    color: ${(props) => props.theme.gray3};
  }
  .paymentDetailRowAmount {
    font-size: 1.063rem;
    font-weight: bold;
  }
  .discount {
    color: ${theme["finishedText"]};
  }
  .costCurrency {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 100;
  }

  .costCurrencytotalDiscountPrice {
    font-size: 0.8125rem;
    font-weight: 100;
    padding-right: 4px;
  }
`;

export const SectionDivider = styled(Divider)`
&.MuiDivider-root{
  background-color: ${(props) => props.theme.color_border_primary};
}
`;
