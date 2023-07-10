import styled from "styled-components";
import { Col } from "../../Kit/Column";
import { Row } from "../../Kit/Row";

export const NotFoundPageWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  @media (min-width:800px){
    max-height: 1000px;
    height: calc(100vh - 5.7143rem);
    min-height: unset;

  }
`;
export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 1.786rem 0;
  min-height: 100vh;
  margin: 0 auto;
  .container {
    height: 100%;
  }
  @media (min-width:800px){
    min-height: 100%;

  }
`;
export const NotFoundImage = styled(Row)`
  justify-content: center;
  width: 100%;
`;
export const NotFoundTextContainer = styled(Col)`
  width: 100%;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (min-width: 420px) {
    width: 340px;
  }
`;
export const NotFoundTitle = styled.p`
  font-size: 1.714rem;
  font-weight: 700;
  margin-top: 2.285rem;
`;
export const NotFoundDesc = styled.p`
  font-size: 1.143rem;
`;

export const VenueInfo = styled(Col)`
  align-items: center;
  margin-bottom: 4.571rem;
  gap: 1.143rem;
  .venueLogo {
    width: 4.286rem;
    height: 4.286rem;
    background-size: cover;
    border-radius: 15px;

    background-color: ${(props) => !props.hasLogo && props.theme.color_background_secondary};
    padding: ${(props) => !props.hasLogo && "1.2rem"};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const VenueName = styled.h1`
  font-size: 1.571rem;
  font-weight: 600;
`;
export const BottomContainer = styled(Col)`
  gap: 1.429rem;
  width: 100%;
  padding: 2.143rem 0;
`;
export const ContactOption = styled.a`
  display: flex !important;
  flex-direction: row-reverse;
  justify-content: space-between !important;
  width: 100%;
  border: 1.5px solid ${(props) => props.theme.color_border_primary};
  border-radius: 0.857rem;
  padding: 0.85rem 2.143rem;

  .contactOptionTitle {
    font-weight: 600;
    font-size: 1.214rem;
    text-align: center;
    letter-spacing: 2px;
    color: ${(props) => props.theme.color_text_primary};
  }

  .blankSpace {
    width: 0.64rem;
  }
`;
