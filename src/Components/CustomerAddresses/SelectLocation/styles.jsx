import { Button } from "@mui/material";
import styled from "styled-components";
import { Col } from "../../../Kit/Column";
import { Row } from "../../../Kit/Row";
export const AddUpdateVenueLocationModalWrapper = styled(Row)``;
export const AddUpdateLocaionContainer = styled(Col)`
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
`;
export const MapContainer = styled.div`
  width: 100%;
  position: relative;
  height: 68vh;
  cursor: grab;
  :active {
    cursor: grabbing;
  }

  .leaflet-container {
    width: 100% !important;
    height: 100% !important;
    span,
    a {
      display: none;
    }
  }
  .leaflet-control,
  .leaflet-control-container {
    display: none;
  }
  .locationPin {
    position: absolute;
    top: calc(50% - 56px);
    left: calc(50% - 20px);
    z-index: 500;
  }
  .userLocation {
    cursor: pointer;
    position: absolute;
    right: 12px;
    bottom: 12px;
    background: ${props=>props.theme.color_background_primary};
    z-index: 500;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    box-shadow: ${props=>props.theme.box_shadow_secondary};
  }

  .fade {
    position: relative;
    overflow: hidden;
    height: 1.7rem;
    width:100%;
  }

  .fade:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10%;
  height: 1.5rem;
  background: ${props=>props.theme.color_background_fade};
}

`;
export const SubmitLocationButton = styled(Row)`
  background: ${(props) => props.theme.color_background_primary};
  width: 100%;
  padding: 0.857rem 2rem;
  box-shadow: ${props=>props.theme.box_shadow_primary};
`;
export const LoadingWrapper = styled(Col)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 600;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1.5px);
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
`;
export const SearchAddressContainer = styled(Row)`
  cursor: pointer;
  position: absolute;
  right: 1.143rem;
  flex-wrap:nowrap;
  top: 1.143rem;
  background: ${props=>props.theme.color_background_primary};
  z-index: 500;
  align-items: center;
  justify-content: center;
  width: calc(100% - 2.286rem);
  padding: 0.571rem 1.143rem;
  border-radius: 0.571rem;
  justify-content: flex-start;
  gap: 1.143rem;
  color: ${(props) => props.theme.color_text_action};
  font-size: 1rem;
  box-shadow: ${props=>props.theme.box_shadow_secondary};
  
  .icon-wrapper{
    align-items:center;
    justify-content:center;
    height:100%;
  }
`;
