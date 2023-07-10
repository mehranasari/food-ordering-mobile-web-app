import React from "react";

//Import styles
import {
  BottomBarWrapper,

} from "./styles.jsx";

//Import icons


const BottomBar = (props) => {
  const {
    hasBorder,
    backgroundColor,
    position,
    children
  } = props;

  return (
    <BottomBarWrapper backgroundColor={backgroundColor} border={hasBorder} position={position}>
      {children}
    </BottomBarWrapper>
  );
};


export default BottomBar;
