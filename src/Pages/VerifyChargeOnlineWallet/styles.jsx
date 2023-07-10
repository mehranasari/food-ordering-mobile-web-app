import { Button } from "@mui/material";
import styled from "styled-components";
import { Col } from "../../Kit/Column";
import { Row } from "../../Kit/Row";

export const VerifyChargeOnlineWalletWarpper = styled(Col)`
  background: ${(props) => props.theme.color_background_primary};
  justify-content: flex-start;
  min-height: 100vh;
  position: relative;
  @media (min-width: 800px) {
    max-height: 1000px;
    height: calc(100vh - 5.7143rem);
    min-height: unset;
  }
`;
export const PageBody = styled(Col)`
  padding: 5rem 2.143rem 1.429rem;
  justify-content: space-between;
  min-height: calc(100vh - 5rem);
  @media (min-width: 800px) {
    max-height: calc(1000px - 5rem);
    height: calc(100vh - 5.7143rem - 5rem);
    min-height: unset;
  }
`;

export const BackHomeButton = styled(Button)`
  background: transparent !important;
  border: 1.5px solid ${(props) => props.theme.color_border_primary} !important;
  border-radius: 0.85rem !important;
  color: ${(props) => props.theme.color_text_primary} !important;
  display: flex;
  width: 100%;
  padding: 0.857rem !important;
  font-size: 1.071rem !important;
  font-weight: 600;
  @media only screen and (max-width: 335px) {
    padding: 0.714rem 1.428rem;
  }
`;
export const CurrentCredit = styled(Col)`
  color: ${(props) => props.theme.color_text_primary};
  align-items: center;
  gap: 0.6rem;
  .title {
    font-size: 1rem;
    color: ${(props) => props.theme.color_text_action};
  }
  .value {
    font-weight: 600;
    font-size: 1.857rem;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color_text_primary};
  }
  span {
    font-weight: 400;
    font-size: 1.143rem;
    margin-right: 4px;
  }
`;
export const ChargeOnlineWalletDetailes = styled(Col)`
  align-items: center;
  padding-bottom:2rem;
  .successMessage {
    font-weight: 600;
    font-size: 1.571rem;
    margin: 2.143rem 0 2.214rem 0;
  }
  .increasmentValue {
    font-weight: 600;
    font-size: 1.714rem;
  }
  .increasmentTitle {
    font-size: 1.286rem;
    margin-bottom: 2rem;
    padding-bottom: 2.286rem;
    width: 100%;
    text-align: center;
    border-bottom: 1.5px solid ${(props) => props.theme.color_border_primary} !important;
  }
`;
export const InvoiceContainer = styled(Col)`
  width: 100%;
`;

export const PaymentDetailRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color_background_primary};
  margin-top: 0.938rem;

  .paymentDetailRowTitle {
    font-size: 0.9rem;
    color: ${(props) => props.theme.gray3};
  }
  .paymentDetailRowAmount {
    font-size: 1.063rem;
    font-weight: bold;
  }

  .costCurrency {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 100;
  }
  .costCurrencytotalDiscountPrice {
    font-size: 0.8125rem;
    font-weight: 100;
    /* padding-right:4px; */
  }
`;
export const LoadingWrapper = styled(Col)`
  width: 100%;
  height: calc(100vh - 5rem);
  align-items: center;
  justify-content: center;
  @media (min-width: 800px) {
    max-height: calc(1000px - 5rem);
    width: 800px;
    height: calc(100vh - 5.7143rem - 5rem);
    min-height: unset;
  }
`;
