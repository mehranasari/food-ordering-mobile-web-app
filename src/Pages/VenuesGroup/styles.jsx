import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const VenuesGroupPageWrapper = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;

export const VenuesGroupPageContainer = styled.div`
  height: 100%;
  position: relative;
`;

export const VenuesGroupBanner = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
  justify-content: center;
  position: fixed;

  .venuesGroupBannerImage {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const TransparnetShadow = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  background-position: center;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
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

  &.shaddowBlur {
    opacity: 1;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0;
  width: 100%;
  @media only screen and (max-width: 335px) {
    padding: 20px 20px 0;
  }
`;

export const HeaderIconWrapper = styled.div`
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 12px;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 30vh);
  z-index: 2;
  position: absolute;
  background-color: ${(props) => props.theme.color_background_primary};
  border-radius: 2.57rem 2.57rem 0 0;
  bottom: ${(props) => (props.bottom ? "150px" : "40px")};
  transition: 0.3s;
  @media only screen and (max-width: 375px) {
    bottom: ${(props) => (props.bottom ? "115px" : "40px")};
  }
  @media only screen and (max-width: 335px) {
    bottom: ${(props) => (props.bottom ? "95px" : "40px")};
  }
  @media only screen and (min-width: 700px) {
    padding: 0 60px;
  }
`;

export const MenuBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.25rem;
  margin-bottom: 10px;
  position: relative;
  padding: 0 2rem;
  .venuesGroupLogo {
    position: absolute;
    right: calc(50% - 3.3rem);
    width: 5.71rem;
    height: 5.71rem;
    background-size: cover;
    border-radius: 15px;
    margin-top: -40px;
  }
`;

export const Share = styled(Button)`
  display: flex;
  position: absolute;
  left: 2rem;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  .shareText {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.blueGray3};
  }
`;

export const VenuesGroupGroupContainer = styled.div`
  display: flex;
  padding: 0 2rem;
  padding-bottom: 8.125rem;
  width: 100%;
  height: 120%;
  overflow: scroll;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  @media only screen and (max-width: 335px) {
    padding: 0 20px;
  }
`;

export const VenuesGroupGroupInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .venuesGroupName {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .venuesGroupAddress {
    display: flex;
    margin-top: 0.71rem;
    align-items: flex-start;
    .venueAddressText {
      color: ${(props) => props.theme.blueGray3};
      margin-right: 5px;
      font-size: 1rem;
    }
  }
  .venuesGroupDesc {
    font-weight: 400;
    font-size: 1rem;
    color: #424242;
    margin-top: 1.25rem;
  }
`;

export const SelectVenueText = styled.div`
  margin-bottom: 0.938rem;
  margin-top: 1.563rem;
  font-weight: 600;
`;

export const VenuesCardContainer = styled.div`
  width: 100%;
  /* padding-bottom: 4.938rem; */
`;

export const VenueCard = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${props=>props.theme.color_background_secondary};
  border-radius: 1rem;
  margin-bottom: 0.938rem;
  padding: 0.813rem;
  padding-left: 2.688rem;
`;

export const VenueCardInfoContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const VenueCardImg = styled.img`
  border-radius: 1rem;
  width: 4.375rem;
  height: 4.375rem;
`;

export const VenueCardNameAndStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 1.875rem;
  color: #212121;
  font-weight: 600;
  font-size: 1.125rem;
`;

export const IsOpen = styled.div`
  display: flex;
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
    color: ${(props) => props.theme.color_text_placeholder} ;
    margin-right: 5px;
  }
`;
