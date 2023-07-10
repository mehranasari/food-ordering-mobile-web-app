import { Button } from "@mui/material";
import styled from "styled-components";
import { Col } from "../../Kit/Column";
import { Row } from "../../Kit/Row";

export const IncreaseOnlineWalletCreditWarpper = styled(Col)`
  background: ${(props) => props.theme.color_background_primary};
  //   color: ${(props) => props.theme.color_text_primary};
  justify-content: flex-start;
  position: relative;
  flex-wrap: nowrap;
  @media (min-width: 800px) {
    max-height: 1000px;
    height: calc(100vh - 5.7143rem);
    min-height: unset;
  }
`;
export const PageBody = styled(Col)`
  padding: 2.286rem 1.714rem 7.139rem;
  justify-content: start;
  // flex-wrap:nowrap;
  margin-top: 5rem;
  height: calc(100vh - 5rem);
  overflow: auto;
  flex-wrap: nowrap;
  @media (min-width: 800px) {
    max-height: calc(1000px - 5rem);
    height: calc(100vh - 5.7143rem - 5rem);
    min-height: unset;
  }
`;

export const IncreaseCreditButton = styled(Button)`
  background: ${(props) => props.theme.primary} !important;
  color: ${(props) => props.theme.textColorOfPrimaryButtons} !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 0.857rem !important;
  position: relative;
  border-radius: 0.714rem !important;
  align-items: center;
  gap: 0.5rem;
  @media only screen and (max-width: 335px) {
    padding: 0.714rem 1.428rem;
  }
  .buttonText {
    font-size: 1.214rem;
    font-weight: 600;
    // color: ${(props) => props.theme.textColorOfPrimaryButtons}!important;
  }
`;
export const CreditDetails = styled(Row)`
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
  padding-bottom: 1.714rem;
`;
export const DetailBox = styled(Col)`
  width: calc(100% / 3);
  color: ${(props) => props.theme.color_text_primary};
  align-items: center;
  gap: 0.5rem;
  .title {
    font-size: 1rem;
    color: ${(props) => props.theme.color_text_subtitle};
  }
  .value {
    font-weight: 600;
    font-size: 1.143rem;
    color: ${(props) => props.theme.color_text_primary};
  }
  span {
    font-weight: 400;
    font-size: 1.143rem;
    margin-right: 4px;
  }
  .venueLogo {
    width: 1.429rem;
    height: 1.429rem;
    background-size: cover;
    border-radius: 4px;
    background-color: ${(props) => props.theme.color_background_secondary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .default-logo {
    padding: 1.2rem;
  }
`;
export const IncreaseCreditButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.71rem;
  background-color: ${(props) => props.theme.color_background_primary};
  padding: 0 2rem;
  position: fixed;
  bottom: 0;
  z-index: 1100;
  box-shadow: ${(props) => props.theme.box_shadow_primary};
  
  @media (min-width:800px){
    bottom: 2.857rem;
    max-width: 800px;
    border-bottom-right-radius:2.857rem;
border-bottom-left-radius:2.857rem;
    @media (min-height:1080px){
    bottom: calc((100vh - 1000px) / 2);

  }
`;
export const IncreasmentValue = styled(Col)`
  padding: 1.429rem 0 1.714rem 0;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
  .title {
    font-weight: 600;
  }
`;
export const InputRow = styled(Row)`
  width: 100%;
  position: relative;
  margin-top: 0.857rem;
  .Form-Input {
    padding: 0 1.25rem;
    text-align: center;
    background: ${(props) => props.theme?.color_background_secondary};
    color: ${(props) => props.theme.color_text_primary};
    font-size: 1.571rem;
    width: 100%;
    :focus {
      background: ${(props) => props.theme?.color_background_primary};
    }
  }
  span {
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    color: ${(props) => props.theme.color_text_subtitle};
    font-size: 1rem;
  }
`;
export const OptionsRow = styled(Row)`
  margin-top: 0.857rem;
  gap: 1.429rem;
  align-items: stretch;
`;
export const Option = styled(Button)`
  flex-grow: 1;
  justify-content: center;
  padding: 4px;
  border: 1px solid ${(props) => props.theme.color_border_primary} !important;
  border-radius: 0.5rem;
  font-size: 1.214rem;
  color: ${(props) => props.theme.color_text_primary_l2} !important;
  font-family: irs;
  span {
    font-size: 0.85rem;
    font-weight: 300;
    margin-right: 4px;
  }
`;

export const MoreCredit = styled(Col)`
  position: relative;
  padding: 1.429rem 2rem 1.143rem 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 2.571rem;
  background: ${(props) => props.theme.color_background_secondary};
  border-radius: 0.85rem;
  text-align: center;
  font-weight: 600;
  .moreCredit-detail {
    font-size: 1.429rem;
    span {
      font-size: 0.929rem;
      margin-right: 4px;
    }
  }
  .moreCredit-subtitle {
    font-size: 1.286rem;
  }
  .moreCredit-message {
    margin-top: 0.85rem;
    font-weight: 400;
    span {
      font-weight: 600;
    }
  }
`;
export const FixedIcon = styled.div`
  position: absolute;
  top: -1.786rem;
  right: calc(50% - 1.143rem);
  font-size: 2.286rem;
`;

export const OnlinPortalsWrapper = styled(Col)`
  padding: 1.429rem 0;
  font-weight: 600;
  gap: 0.85rem;
`;
export const OnlinPortalsContainer = styled(Row)`
  gap: 1.5rem;
`;
export const OnlinePortal = styled(Button)`
  display: flex;
  flex-direction: row;
  padding: 0.714rem 0.85rem;
  color: ${(props) => props.theme.color_text_primary} !important;
  width: 12.071rem;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.58rem;
  border: 1px solid
    ${(props) =>
      props.isselected === "true"
        ? props.theme.primary
        : "transparent"} !important;
  background: ${(props) =>
    props.isselected === "true"
      ? props.theme.primary + "30"
      : props.theme.color_background_secondary} !important;
  font-weight: ${(props) => (props.isSelected === "true" ? "600" : "400")};
  @media (max-width: 500px) {
    width: calc((100% - 1.5rem) / 2);
  }
`;
export const IconWrapper = styled(Row)`
  width: 30%;
  margin-left: 0.85rem;
`;
export const OnlinePortalLogo = styled.img`
  display: flex;
  justify-content: center;
  width: auto;
  height: 27px;
`;
