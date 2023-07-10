import React from "react";
import styled from "styled-components";
import { Row } from "../../Kit/Row";
import CancelIcon from "../../Assets/icons/CancelIcon.jsx";
import { Button } from "@mui/material";
import { theme } from "../Theme";
import { palette } from "../Theme/Palette";

const StaticAlertContainer = styled(Row)`
  gap: 0.857rem;
  flex-wrap: nowrap;
  position: relative;
  padding: 1.143rem 0.857rem;
  align-items: center;

  ::before {
    content: "";
    background-color: ${(props) =>
      props.hasBgColor ? palette[props.color] : props.theme.color_background_primary};
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: ${props=>props.theme.opacity_background_alert};
    border-radius: 12px;
  }

  .text {
    font-size: 0.929rem;
    position: relative;
    color: ${props=> palette[props.color]};
    text-align: justify;
  }
  .icon-wrapper {
    align-items: center;
    justidy-content: center;
  }
`;
export const CancelButton = styled(Button)`
  &.MuiButton-root {
    background: transparent !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 2.571rem;
    min-width: 2.571rem;
    height: 2.571rem;
    border-radius: 0.5rem;
    color: ${(props) => props.theme.color_text_primary_l5};
  }
  margin-right: auto !important;
`;
const StaticAlert = (props) => {
  const { text, icon, color, hasBgColor, onClose, ...rest } = props;
  return (
    <StaticAlertContainer hasBgColor={hasBgColor} color={color} {...rest}>
      <Row className="icon-wrapper"> {icon}</Row>
      <div className={"text"}>{text}</div>
      {onClose && (
        <CancelButton onClick={onClose}>
          <CancelIcon
            fill={theme.gray6}
            width={"0.836rem"}
            height={"0.836rem"}
          />
        </CancelButton>
      )}
    </StaticAlertContainer>
  );
};

export default StaticAlert;
