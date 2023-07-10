import styled from "styled-components";
import { Col } from "../../../Kit/Column";
import { Row } from "../../../Kit/Row";
import { Button } from "@mui/material";

export const AddUpdateAddressWrapper = styled(Col)`
  // height: 77vh;
  // overflow: auto;
  flex-wrap: nowrap;
  width: 100%;
position:relative;
  .error-alert{
    padding:0 2rem 1.5rem;
  }
`;
export const MapContainer = styled.div`
  width: 100%;
  height: 14.286rem;
  min-height: 14.286rem;
  position: relative;

  .map-layer {
    width: 100%;
    height: 14.286rem;
    min-height: 14.286rem;
    position: absolute;
    z-index: 500;
    background: transparent;
    top: 0;
  }

  .leaflet-container {
    width: 100% !important;
    height: 100% !important;
    span , a {
      display:none;
    }
  }
  .leaflet-control-zoom  {
    display: none;
  }
  .locationPin {
    position: absolute;
    top: calc(50% - 56px);
    left: calc(50% - 20px);
    z-index:500;
  }
`;
export const Form = styled(Col)`
  width: 100%;
  padding: 1.714rem 0;
  margin-bottom: 3rem;
`;

export const FormRow = styled(Col)`
  margin-bottom: 1.714rem;
  align-items: start;
  gap: 4px;
  width: 100%;
  padding:0 2rem;
  justify-content: start;
  input:-internal-autofill-selected {
    background-color: ${(props) => props.theme.blueGray7} !important;
  }

  .Form-Input {
    // height: 2.875rem;
    // min-height: 2.875rem;
    :focus {
      border: 0.125rem solid;
      border-color: ${(props) => props.theme.primary};
      outline: none;
      background-color: white;
    }
  }
`;
export const FullWidthFormRow = styled(Row)`
  margin-bottom: 1.875rem;
  .Form-Input-Group {
    width: 100%;
  }
`;

export const SubmitLocationButton = styled(Row)`
  background: ${(props) => props.theme.color_background_primary};
  width: 100%;
  padding: 0.857rem 2rem;
  box-shadow: ${props=>props.theme.box_shadow_primary};
  position: fixed;
  bottom: 0;
  // right: 0;
  max-width:800px;

`;

export const BackToSelectLocation = styled(Button)`
  &.MuiButton-root {
    background: ${(props) => props.theme.primary}!important;
    color: ${(props) => props.theme.textColorOfPrimaryButtons} !important;
    border-radius: 3rem;
    padding: 0.286rem 0.571rem;
    position: absolute;
    bottom: 0.857rem;
    right: 0.857rem;
    font-family: "IranSanse";
    font-weight: 600;
    z-index: 2000;
  }
`;
export const StyledInput = styled.input`
  direction: ${props=>props?.direction? props?.direction: "rtl"};
  height: 3.8rem;
  width: 100%;
  border-radius: 0.7rem;
  color: ${(props) => props.theme.color_text_primary};
  background-color: ${(props) => props.theme.color_background_secondary};
  font-size: 1rem;
  margin-bottom: 0.5rem;
  padding: 0 2rem;
  font-family: "IranSanse" !important;
  border: none;


  :focus {
    outline: none;
    border: ${(props) => `0.1rem solid ${props.theme.primary}`};
    background-color: white;
    box-shadow: 0px 0px 8px ${(props) => props.theme.primary + "20"};
    color: ${(props) => props.theme.color_text_primary};
    box-sizing: border-box;
    font-size: 1rem;
  }

  ::placeholder {
    direction: rtl;
    color: ${(props) => props.theme.color_text_placeholder};
    font-family: "IranSanse" !important;
    letter-spacing: 0;
    font-size: 1rem;
  }
`;
export const Label = styled.div`
  color: ${(props) => props.theme.color_text_subtitle};
  font-size: 1rem;
`;
