import styled from "styled-components";
import Button from "@material-ui/core/Button";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core/styles";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
export const VenuePageWrapper = styled.div`
  height: 100vh;
  overflow-y: hidden;
  @media (min-width:800px){
    height:calc(100vh - 80px);
    max-height:1000px;
    border-radius:4.286rem;
  }
`;

export const VenuePageContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const VenueBanner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  /* height:inherit; */
  height: 30%;
  @media (min-width: 800px) {
    max-width: 800px;
    height: 350px;

    box-shadow: 0px 0.429rem 2.143rem rgba(33, 33, 33, 0.1);
    img {
      border-radius: 2.857rem;
    }
  }

`;

export const TransparnetShadow = styled.div`
  width: 100%;
  height: ${(props) => (props.hasImage ? "50%" : "100%")};
  position: absolute;
  top: 0;
  background-position: center;
  background: ${(props) =>
    props.hasImage
      ? "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.6) 100%)"
      : `${props.theme.primary}`};
  @media (min-width: 800px) {
    border-radius: 2.857rem;
    .header {
      padding:1.5rem;
    }
  }
`;

export const ShaddowLayer = styled.div`
  width: 100%;
  height: 200%;
  top: 0;
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
  @media (min-width: 800px) {
    border-radius: 2.857rem;
  }
  &.shaddowBlur {
    opacity: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.143rem 2.143rem 0;
  width: 100%;
  @media only screen and (max-width: 335px) {
    padding: 1.429rem 1.429rem 0;
  }
`;

export const HeaderIconWrapper = styled.div`
  height: 3.286rem;
  width: 3.286rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(1.429rem);
  border-radius: 0.857rem;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 30vh);
  z-index: 2;
  position: absolute;
  background-color: ${(props) => props.theme.color_background_primary};
  border-radius: 2.57rem 2.57rem 0 0;
  bottom: ${(props) => (props.bottom ? "140px" : "2.857rem")};
  transition: 0.3s;
  @media only screen and (max-width: 375px) {
    bottom: ${(props) => (props.bottom ? "105px" : "2.857rem")};
  }
  @media only screen and (max-width: 335px) {
    bottom: ${(props) => (props.bottom ? "85px" : "2.857rem")};
  }
  @media only screen and (min-width: 700px) {
    /* padding: 0 60px; */
  }
  @media only screen and (min-width: 800px) {
    height: calc(100% - 320px);
    min-height: 50vh;

  }

`;


export const MenuBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  margin-bottom: 10px;
  position: absoulte;
  padding: 0 2rem;
  @media only screen and (min-width: 700px) {
    padding: 0 6rem;
  }
  .venueLogo {
    width: 5.71rem;
    height: 5.71rem;
    background-size: cover;
    border-radius: 15px;
    margin-top: -2.857rem;
    background-color: ${(props) =>
      props.hasLogo && props.theme.color_background_secondary};
    padding: ${(props) => props.hasLogo && "1.8rem"};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Share = styled(Button)`
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  .shareText {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.color_text_action};
  }
`;

export const VenueDetails = styled.div`
  display: flex;
  padding: 0 2rem;
  width: 100%;
  height: 120%;
  overflow: scroll;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: ${(props) => props.theme.color_background_primary};
  @media only screen and (min-width: 700px) {
    padding: 0 6rem;
  }
  @media only screen and (max-width: 335px) {
    padding: 0 20px;
  }
`;

export const VenueInfo = styled.div`
  margin-top: 1rem;
  width: 100%;

  .venueNameText {
    font-size: 1.44rem;
  }
`;

export const VenueNameAndStatus = styled.div`
  display: flex;
`;

export const IsOpen = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;

  .isOpenText {
    font-weight: 600;
    font-size: 1rem;
    color: ${(props) => props.theme.success};
    margin-right: 10px;
  }
  .isCloseText {
    font-weight: 600;
    font-size: 1rem;

    color: ${(props) => props.theme.color_text_placeholder};
    margin-right: 5px;
  }
`;

export const LocationWrapper = styled(Row)`
  width: 100%;
  align-items: center;
  gap: 0.286rem;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0.571rem 0 1.714rem 0;
`;

export const VenueAddress = styled.div`
  display: flex;
  margin-top: 0.71rem;
  width: 100%;
  align-items: center;
  .locationIcon {
    min-width: 1.429rem;
  }

  .venueAddressText {
    color: ${(props) => props.theme.color_text_action};
    margin-right: 0.857rem;
    font-size: 1rem;
    @media (max-width: 350px) {
      margin-right: 0.571rem;
    }
  }
  .fade {
    position: relative;
    overflow: hidden;
    height: 4.5rem;
  }
  .fade:after {
    content: "";
    text-align: right;
    position: absolute;
    top: 46px;
    left: 0;
    width: 2.643rem;
    height: 1.4rem;
    background: ${(props) => props.theme.color_background_fade};
  }
`;

export const NavigationToMapButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.color_text_action + "30"};
  border-radius: 0.571rem;
  color: ${(props) => props.theme.color_text_action} !important;
  padding: 0.571rem;
  font-size: 1rem;
  min-width: 6.843rem;
  background: transparent !important;
`;

export const ExternalLinkContainer = styled.div`
  width: 100%;
  margin-top: 2.14rem;
  .title {
    font-size: 1rem;
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const ExternalLink = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border: 1.5px solid ${(props) => props.theme.color_border_primary} !important;
  border-radius: 10px;
  padding: 0.6rem 1.4rem;
  .icon {
    font-size: 1.4rem;
  }
`;

export const ExternalLinkATag = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExternalLinkInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .name {
    margin-right: 1.313rem;
    font-size: 1.063rem;
    color: ${(props) => props.theme.color_text_primary};
  }
`;

export const SocialMeida = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2.14rem;
  justify-content: space-around;
  .socialMediaIcon {
    width: 3.28rem;
  }
`;

export const SocialMediaLink = styled.a`
  width: auto;
`;

export const OrderingTypes = styled.div`
  // margin-top: 2.14rem;
  width: 100%;

  .orderTypeSelection {
    font-size: 1rem;
    color: ${(props) => props.theme.color_text_primary};
    font-weight: 600;
    margin-bottom: 1.071rem;
  }
`;

export const OrderTypeItem = styled.div`
  margin-bottom: 1rem;
`;

export const OrderTypeAccordion = styled(MuiAccordion)`
  &.MuiAccordion-root {
    background-color: ${(props) => props.theme.color_background_secondary};
    border-radius: 0.85rem;
    display: block;
    box-shadow: none;
    &:before {
      display: none;
    }
  }
`;

export const OrderTypeAccordionSummary = withStyles({
  root: {
    borderRadius: "50px",
    fontFamily: "IranSanse",
    fontSize: "1rem",
    padding: "1rem 1.42rem 1rem 0.5rem",
    "&$expanded": {
      minHeight: "0rem",
    },
  },
  content: {
    margin: "0px",
    "&$expanded": {
      margin: "0px",
    },
  },
  expanded: {},
  expandIcon: {},
})(MuiAccordionSummary);

export const OrderTypeTitle = styled.div`
  color: ${(props) => props.theme.color_text_primary};
  font-size: 1.071rem;
  margin-right: 1rem;
  font-weight: ${(props) => (props.enabled ? 600 : 300)};
`;

export const OrderTypeBody = styled.div`
  margin-top: 0.35rem;
  padding: 0 0.71rem 1rem 0.71rem;
`;

export const PreparationTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 1rem;

  .preparationTimeTitle {
    color: ${(props) => props.theme.color_text_secondary};
  }

  .preparationTimeValue {
    color: ${(props) => props.theme.color_text_secondary};
  }
`;

export const SelectOrderTypeButton = styled(Button)`
  padding: 1rem 1.7rem;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.primary}!important;
  color: ${(props) => props.theme.textColorOfPrimaryButtons}!important;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  .selectOrderTypeButtonText {
    font-size: 1.07rem;
    font-weight: 600;
  }
  .selectOrderTypeButtonWrapper {
    display: flex;
    align-items: center;
  }
`;

export const Description = styled.div`
  margin-top: 1.5rem;

  .descriptionTitle {
    font-size: 1rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.color_text_primary};
    @media only screen and (max-width: 335px) {
      margin-bottom: 5px;
    }
  }
  .descriptionText {
    font-size: 1rem;
    line-height: normal;
    color: ${(props) => props.theme.color_text_subtitle};
    text-align: justify;
  }
`;

export const ViewMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 66px;
  border-radius: 24px 24px 0 0;
  background: ${(props) => props.theme.primary};
  position: fixed;
  bottom: 0;
  z-index: 3;
  @media only screen and (max-width: 335px) {
    height: 50px;
  }
  .viewMenuButtonText {
    color: ${(props) => props.theme.textColorOfPrimaryButtons};
    height: fit-content;
    font-size: 1.0625rem;
    font-weight: 600;
    margin-right: 10px;
  }
  .viewMenuButtonIcon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BuzzAppContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1rem;
  color: ${(props) => props.theme.color_text_primary_l5};
  padding-bottom: 4rem;
  padding-top: 2rem;

  align-items: center;

  .menubuzz {
    color: ${(props) => props.theme.color_text_primary};
    font-size: 1.286rem;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;
