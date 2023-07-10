import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { theme } from "../../Shared/Theme"
import Button from '@material-ui/core/Button';


export const UnsuccessfulOrderInner = styled(Col)`
margin-top: 60px;
align-items: center;
justify-content: flex-start;
padding:1.5rem 2rem 2rem 2rem;
gap:2.143rem;
color: ${props=>props.theme.color_text_primary};
font-weight:700;
font-size:1.286rem;
height:calc(100vh - 10rem);

.icon{
  width:3.714rem;
  height:3.714rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
}
.message{
  font-size: 1.571rem;
}

.staticAlarm{
  width:100%;
}
@media (min-width:800px){
  height:calc(100% - 10rem);
}
`
export const BackHomeButton = styled(Button)`
  width: 100%;
  display: flex;
  background-color: ${props=>props.theme.color_background_primary};
  color:${props=>props.theme.color_text_primary};
  font-weight:  600;
  border-radius: 10px;
  padding: 0.85rem 0;

  :focus {
    outline: none;
  }
`;
