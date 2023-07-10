import styled from "styled-components";
import { Row } from "../../Kit/Row";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";
import Button from '@material-ui/core/Button';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordion from '@material-ui/core/Accordion';
import { withStyles } from '@material-ui/core/styles';


export const ItemDrawerWrapper = styled(Row)`
  width: 100%;
  border-radius: 15px;
  .tableNumberTitleBold {
    font-weight: bold;
  }
`;

export const StyledSwipeableDrawer = styled(MuiSwipeableDrawer)`  
  .MuiPaper-root {
    /* border-radius: 35px 35px 0 0; */
    align-items: center;
    max-height: 90%;
    z-index: 1000;
    display: flex;
  }
  .menuSizeHandlerIconWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 2.14rem;
  }
`;


export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 10px);
  font-size: 1.0625rem;
  padding: 0 15px 15px;
  border-bottom: 1px solid ${props=> props.theme.color_border_primary};
  .titleText {
    width: 80%;
    font-weight: 600;
    padding: 0 1rem;
    font-size: 1.063rem;
    color: ${props=> props.theme.color_text_secondary};
    text-align: center;
    
 
  }
  .iconWrapper{
    margin-left: 1.7rem;
  }

`;

export const BodyWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  /* margin-bottom: 5.71rem; */
  min-height: 30rem;
`;

export const SelectTableWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  justify-content: center;
  /* margin-bottom: 5rem; */

  /* .tableNumberTitle {
    margin-top: 2.14rem;
    font-size: 1.063rem;
    padding: 0 1rem;

    .tableNumberTitleBold {
      font-weight: bold;
    }
  } */
  `;

export const TableAreaListWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  justify-content: center;
`;

// export const Accordion = withStyles({
//   root: {
//     borderBottom: '1px solid #E8EAF4',
//     display: "block !important",
//     borderRadius: "0 !important",
//     paddingTop: "0 !important",
//     boxShadow: 'none',
//     marginTop: "1px",
//     '&:before': {
//       display: 'none',
//     },
//     '&$expanded': {
//       margin: 'auto',
//     },
//   },
//   expanded: {},
// })(MuiAccordion);


export const Accordion=styled(MuiAccordion)`
&.MuiAccordion-root {
  border-bottom: ${props=> props.theme.color_border_primary} 1px solid ;
  display: block;
  border-radius: 0;
  padding-top: 0rem;
  box-shadow: none;
  margin-top:1px;
  :before {
    background:none;
  }
  :last-child {
    border-bottom:none;
  }
}

`


export const AccordionSummary = withStyles({
  root: {
    fontFamily: "IranSanse",
    fontSize: '1rem',
  },
  content: {
    '&$expanded': {
      margin: '5px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);


export const TableAreaName = styled.div`
  font-family: 'IranSanse';
  font-size: 1.14rem;
`;


export const ItemWrapper = styled(Row)`
  justify-content: flex-start;
  cursor:pointer;
  border: ${(props) => props.selectedTableNumber && "1px solid "+ props.theme.primary};
  position:relative;
  ::before {    
      content: "";
      background-color: ${props=>  props.selectedTableNumber ? props.theme.primary : props.theme.color_background_secondary};
      opacity: ${props=>  props.selectedTableNumber ? 0.1: 1};
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
}
  font-weight: ${(props) => props.selectedTableNumber && 600};
  width: 100%;
  border-radius: 10px;
  padding: 1.071rem 1.78rem;
  margin-bottom: 0.71rem;
.title{
  position: relative;
}
  &:last-child {
  margin-bottom: 2rem;
}
.checkButton {
    position: absolute !important;
    right: -1rem;
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.primary};
    color:${props => props.theme.color_text_primary};
    border-radius: 0.5rem;
  }
`;

export const ConfirmSelection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.71rem;
  background-color:white;
  padding: 0 2rem;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  box-shadow: ${props=>props.theme.box_shadow_primary};
`;

export const ConfirmButton = styled(Button)`
  padding: 1rem 1.7rem !important;
  width:100%;
  position: relative;
  background: ${(props) => props.theme.primary} !important;
  border-radius: 10px !important;
  justify-content: center;
  align-items: center;

  .confirmButtonText {
    font-size: 1.07rem !important;
    font-weight: 600 !important;
  }
  .checkoutButtonWrapper{
    display: flex !important;
    align-items: center !important;
  }
`;