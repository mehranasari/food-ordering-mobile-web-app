import styled from "styled-components";

export const BottomBarWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color_background_primary};
  border: 1px solid ${(props) => props.theme.color_background_primary};
  bottom: 0;
  position: fixed;
  z-index: 1000;
  padding: 1.2rem 1.42rem;
  @media (min-width: 800px) {
    max-width: 800px;
    bottom: 2.857rem;
    border-bottom-right-radius: 2.857rem;
    border-bottom-left-radius: 2.857rem;
    @media (min-height: 1080px) {
      bottom: calc((100vh - 1000px) / 2);
    }
  }
`;
