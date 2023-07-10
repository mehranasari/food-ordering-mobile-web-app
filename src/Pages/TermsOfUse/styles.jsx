import styled from "styled-components";
import { Row } from "../../Kit/Row";
export const TermsOfUseWrapper = styled.div`
  height: calc(100vh - 4.075rem);
  @media (min-width:800px){
    height: calc(100% - 4.075rem);
  }
`;
export const Body = styled(Row)`
  width: 100%;
  // overflow: auto;
  align-items: flex-start;
  margin-top: 5rem;
  padding:1.714rem 1.714rem 4.28rem 1.714rem;
 
`;

export const Paragraph=styled.p`
width:100%;
padding-bottom:1rem;
text-align:justify;
span {
    font-weight:bold;
}

`
