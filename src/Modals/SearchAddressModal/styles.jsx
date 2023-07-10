import styled from "styled-components";
import { Row } from "../../Kit/Row";
import { Col } from "../../Kit/Column";
import { FormInputGroup } from "../../Kit/StyledInput";
import MuiSwipeableDrawer from "../../Kit/MuiSwipeableDrawer";

export const SearchAddressModalWrapper = styled(Row)`
  width: 100%;
  .titleText {
    @media (max-width: 400px) {
      margin-right: 1rem;
    }
  }
`;

export const SearchAddressStyledSwipeableDrawer = styled(MuiSwipeableDrawer)`
  .MuiPaper-root {
    display: flex;
    align-items: center;
    height: 90vh;
  }
  .menuSizeHandlerIconWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 2.14rem;
  }
`;




export const ModalBody = styled(Col)`
  width: 100%;
  // padding: 0 0.857rem;
  justify-content: start;
  height: calc(100% - 5.5rem);
  flex-wrap:nowrap;

`;

export const LocationSearchContainer = styled(FormInputGroup)`
  width: 100%;  
  position:relative;
  border-bottom:1px solid ${props=>props.theme.color_border_primary}; 
  // box-shadow: 0px 0px 3px rgba(33, 33, 33, 0.12);
  .Form-Input {
    padding: 0 4.5rem 0 3rem;
    width: 100%;
    background:transparent;
    border:none;  
    font-size: 1.214rem;
  }

`;

export const FormIcon = styled(Row)`
  position: absolute;
  right: 2rem;
  width: auto;
  height: 3.5rem;
  align-items:center;
  top: 0;
`;

export const SuggestedAddresses = styled(Col)`
  background: ${props=>props.theme.color_background_primary};
  margin-top: 5px;
  padding: 5px 0.857rem;
  width: 100%;
  align-items: flex-start;
  justify-content: start;
  cursor: auto;
  border-radius: 0.57rem;
  
  // ::-webkit-scrollbar {
  //   width: 0.5rem;
  //   margin-left: 0.5rem;
  // }
  // ::-webkit-scrollbar-thumb {
  //   background-color: ${props=>props.theme.background_secondary};
  //   border-radius: 1rem;
  // }
  max-height: calc(100% - 4.4rem);
  overflow-y: auto;
  flex-wrap:nowrap;

  .address-row {
    gap: 0.533rem;
    width: 100%;
    align-items:flex-start;
    flex-wrap: nowrap;
    padding:0.857rem;
    border-radius: 0.533rem;
    color: ${(props) => props.theme.color_text_subtitle};
    cursor: pointer;
    border-bottom: 1px solid ${props=>props.theme.color_border_primary};

    :hover {
      background: ${(props) => props.theme.blueGray7};
    }
    :last-child {
      border-bottom:none;
    }
  }

  .icon-wrapper {
    align-items: start;
    padding-top:0.3rem;
  }
`;
export const SuggestedAddressesLoading = styled(Row)`
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 1.067rem;
  top: 1rem;
  cursor:pointer;
`;
export const CancelIconWrapper = styled.div`
cursor:pointer;
  position: absolute;
  left: 1.067rem;
  top: 1rem;

`;
export const AdressContainer = styled(Col)`
font-size: 1.073rem;
color: ${(props) => props.theme.color_text_primary};
  .address-title {
    font-weight: 600;
    line-height: 1.666rem;
    text-align: right;
  }
  .ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
  }
`;

