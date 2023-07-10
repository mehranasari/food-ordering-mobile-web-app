import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { theme } from "../../Shared/Theme"
import Button from '@material-ui/core/Button';


export const UnsuccessfulOnlinePortalInner = styled(Col)`
margin-top: 60px;
align-items: center;
justify-content: flex-start;
padding:1.5rem 2rem 2rem 2rem;
gap:2.143rem;
height:calc(100vh - 5rem);
color:${props=>props.theme.color_text_primary};
font-weight:700;
font-size:1.286rem;
text-align:center;

.message{
  font-size: 1.571rem;
}
.text{
  font-weight: 400;
  font-size:1.143rem;
}
@media (min-width:800px){
  height:calc(100% - 5rem);
}
`
export const BackToPaymenOptionsButton = styled(Button)`
  width: 100%;
  display: flex;
  background-color: ${props=>props.theme.color_background_primary};
  border:1px solid ${props=>props.theme.gray7};
  font-weight:  600;
  border-radius: 10px;
  padding: 0.85rem 0;

  :focus {
    outline: none;
  }
`;
