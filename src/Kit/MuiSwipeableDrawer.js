import React from "react";
import styled from "styled-components";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const MuiSwipeableDrawer_ = styled(SwipeableDrawer)`
  .MuiPaper-root {
    background-color: ${(props) => props.theme.color_background_primary};
    color: ${(props) => props.theme.color_text_primary};
    @media (min-width:800px){
      max-width:57.143rem;
      margin:auto;
    }
  }
  .MuiBackdrop-root {
    background-color: ${props=>props.theme.color_background_backdrop};
  }
  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    cursor: pointer;
  
  }
  
  *::-webkit-scrollbar-track {
    /* background-color: #e40f0f; */
  }
  
  *::-webkit-scrollbar-thumb {
    background:${props=>props.theme.color_background_scrollbar} ;
    border-radius: 1rem;
  }
  
  *::-webkit-scrollbar-thumb:hover {
    background-color: ${props=>props.theme.color_background_scrollbar};
  }
`;
const MuiSwipeableDrawer = (props) => {
  return <MuiSwipeableDrawer_ {...props}>{props.children}</MuiSwipeableDrawer_>;
};

export default MuiSwipeableDrawer;
