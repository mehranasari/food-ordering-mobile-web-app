import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import Button from "@material-ui/core/Button";

export const AboutUsWrapper = styled(Row)`
  justify-content: center;
`;
export const Body = styled(Col)`
  width: 100%;
  overflow: auto;
  justify-content: space-evenly;
  align-items: flex-center;
  justify-content: flex-start;
  height:calc(100vh - 4.1rem);
  margin-top: 5rem;
  padding: 1.714rem;
  @media (min-width:800px){
    height:100%;
  }
`;
export const VenueInfo = styled(Col)`
  align-items: center;
  gap: 1.143rem;
  .venueLogo {
    width: 4.286rem;
    height: 4.286rem;
    background-size: cover;
    border-radius: 15px;
    background-color: ${(props) => props.theme.color_background_secondary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .default-logo{
    padding: 1.2rem;

  }
  padding-bottom: 1.429rem;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
`;
export const VenueName = styled.h1`
  font-size: 1.571rem;
  font-weight: 600;
`;
export const VenueDescription = styled.div`
  font-size: 1.143rem;
  width: 100%;
`;
export const VenueAddressContainer = styled(Row)`
  flex-wrap: nowrap;
  gap: 4px;
`;

export const AddressWrapper = styled(Col)`
  padding: 1.429rem 0;
  border-bottom: 1px solid ${(props) => props.theme.color_border_primary};
  gap: 4px;
  .title {
    font-size: 1.071rem;
    font-weight: 600;
  }
`;
export const VenueAddress = styled(Row)`
  margin-top: 0.71rem;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  .locationIcon {
    min-width: 1.429rem;
  }

  .venueAddressText {
    color: ${(props) => props.theme.color_text_primary};
    margin-right: 0.857rem;
    font-size: 1rem;
    width: calc(100% - 1.429rem);
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
    background: ${props=>props.theme.color_background_fade};
  }
`;

export const NavigationToMapButton = styled(Button)`
  border: 1px solid ${(props) => props.theme.color_text_secondary + "30"};
  border-radius: 0.571rem;
    color: ${(props) => props.theme.color_text_primary};
  padding: 0.571rem;
  font-size: 1rem;
  min-width: 6.843rem;
  background: transparent !important;
`;
export const VenuePhoneNumber = styled(Col)`
  padding: 1.429rem 0;
  gap: 4px;
  .title {
    font-size: 1.071rem;
    font-weight: 600;
  }
  .phoneNumber {
    margin-right: 0.857rem;
    font-size: 1.143rem;
    color: ${(props) => props.theme.color_text_primary};
  }
`;
