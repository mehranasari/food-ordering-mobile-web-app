import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Button } from "@mui/material";
export const HeaderWrapper = styled.div`
  display: flex;
  max-width:800px;
  flex-direction: column;
  width: 100%;
  position: ${(props) => props.position};
  top: 0px;
  z-index: 1000;
  background: ${(props) => props.backgroundColor};
  box-shadow: ${(props) =>
    !props.disableBoxShadow && props.theme.box_shadow_secondary};
    @media (min-width:800px){
      top: 2.857rem;
      border-top-right-radius:2.857rem;
  border-top-left-radius:2.857rem;
      @media (min-height:1080px){
      top: calc((100vh - 1000px) / 2);
  
    }
    `;
export const MenuSizeHandlerIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.429rem;
`;

export const HeaderContainr = styled(Row)`
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
  padding: 0.714rem 0.714rem
    ${(props) => (props.disableBoxShadow ? 0 : "0.714rem")} 0.714rem;
`;

export const WrapperBox = styled(Button)`
  height: 3.214rem !important;
  width: 3.214rem !important;
  max-width: 3.214rem !important;
  min-width: 3.214rem !important;
  padding: 0 !important;
`;
export const HeaderIconWrapper = styled(Row)`
  /* padding:0; */
  padding: 0.714rem;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.iconBackgroundColor};
  z-index: 1000;
  border-radius: 10px;
  a {
    height: 20px;
  }
`;

export const HeaderItemWrapper = styled.div`
  width: auto;
`;

export const HeaderLogo = styled.div`
  width: auto;
  display: flex;
`;

export const Title = styled(Row)`
  font-size: 1.143rem;
  gap: 0.7rem;
  font-weight: 600;

  .titleText {
    color: ${props=>props.theme.color_text_primary};
    @media screen and (min-width: 300px) and (max-width: 318px) {
      font-size: 1rem;
    }
    @media (max-width: 275px) {
      font-size: 0.9rem;
    }
  }
`;

export const VenueLogo = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 5px;
  margin-left: 0.8rem;
`;

export const VenueName = styled.div`
  font-weight: 600;
  font-size: 1.188rem;
`;

export const EmpetyBox = styled.div`
  width: 2rem;
`;
export const SearchIconWrapper = styled(Row)`
  width: 3.214rem;
  height: 3.214rem;
  align-items: center;
  justify-content: center;
`;

export const RightPart = styled(Row)`
  min-width: 10%;
  width: max-content;
  align-items: center;
  justify-content: start;
`;
export const LeftPart = styled(Row)`
  min-width: 10%;
  width: max-content;
  align-items: center;
  justify-content: flex-end;
`;
export const MiddlePart = styled(Row)`
  // min-width: ${(props) => (props.isMenu ? "80%" : "4%")};
  align-items: center;
  justify-content: center;
`;
