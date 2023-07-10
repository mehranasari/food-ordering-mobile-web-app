import styled from "styled-components";
import { Row } from "../../../Kit/Row";
import { palette } from "../../../Shared/Theme/Palette";

export const ViewMenuButton = styled(Row)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.71rem;
  background:#2a2a2f;
  position: fixed;
  bottom: 0;
  z-index: 3;
  max-width:800px;

  .viewMenuButtonText {
    height: fit-content;
    font-size: 1rem;
    font-weight: 600;
    color:${props=>props.theme.color_text_primary_l5};
  }
  @media (min-width:800px){
    bottom: 2.857rem;
    border-bottom-right-radius:2.857rem;
border-bottom-left-radius:2.857rem;
    @media (min-height:1080px){
    bottom: calc((100vh - 1000px) / 2);

  }
`;

export const PayOrderWrapper = styled(Row)`
  justify-content: space-between;
  align-items: center;
  max-width:800px;
  width: 100%;
  height: 5.71rem;
  background-color:#2a2a2f;
  padding: 0 2rem;
  position: fixed;
  bottom: 0;
  z-index: 3;
  box-shadow: ${props=>props.theme.box_shadow_primary};
  @media (min-width:800px){
    bottom: 2.857rem;
    border-bottom-right-radius:2.857rem;
border-bottom-left-radius:2.857rem;
    @media (min-height:1080px){
    bottom: calc((100vh - 1000px) / 2);

  }
`;

export const PayOrderButton = styled.div`
  display: flex;
  width: auto;
  padding: 15px 1.78rem;
  position: relative;
  background: ${(props) => props.theme.primary};
  border-radius: 10px;
  justify-content: center;
  cursor:pointer;
  align-items: center;
  @media only screen and (max-width: 335px) {
    padding: 10px 20px;
  }
  .payOrderButtonText {
    font-weight: 600;
    color:${props=>props.theme.textColorOfPrimaryButtons}
  }
`;

export const ServiceMethodWrapper = styled.div`

  .serviceMethodText {
    color: ${palette.gray4};
    font-size: 0.875rem;
    margin-bottom: 5px;
  }
  .serviceMethodDetail {
    color: ${palette.gray12};
    font-size: 1.14rem;
    font-weight: 900;
    @media (max-width:400px){
      font-size: 0.9rem;

    }
  }
`;
