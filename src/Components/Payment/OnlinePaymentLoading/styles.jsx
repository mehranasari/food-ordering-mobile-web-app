import styled from "styled-components";
import { Col } from "../../../Kit/Column";

export const OnlinePaymentLoadingWapper = styled(Col)`
  justify-content: center;
  align-items: center;
  gap: 1.786rem;
  min-height: 100vh;
  padding: 1.786rem;
  background: ${(props) => props.theme.color_background_primary};
  .staticAlarm {
    width: 100%;
  }
  .iconsSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .message {
    font-size: 1.143rem;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.theme.color_text_primary};
    padding: 0 0.5rem;
  }
  @media (min-width: 800px) {
    height: calc(100vh - 80px);
    min-height: unset;
    max-width: 800px;
    @media (min-height: 1080px) {
      height: 1000px;
    }
  }
`;
export const OnlinePortalLogo = styled.div`
  width: 5.714rem;
  height: 4.286rem;
  .venueLogo {
    width: 5.714rem;
    height: 4.286rem;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
