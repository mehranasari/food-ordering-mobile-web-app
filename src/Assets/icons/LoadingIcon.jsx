import React from "react";
import styled from "styled-components";

export const Icon = styled.div`
  @-webkit-keyframes clockwise {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes clockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  opacity: 1;
  height: ${(props) => (props.size === "lg" ? "50px" : "14px")};
  width: ${(props) => (props.size === "lg" ? "50px" : "14px")};

  -webkit-animation: clockwise 500ms linear infinite;
  animation: clockwise 500ms linear infinite;
`;

export const Cut = styled.div`
  position: relative;
  width: ${(props) => (props.size === "lg" ? "25px" : "7px")};
  height: ${(props) => (props.size === "lg" ? "50px" : "14px")};
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Donut = styled.div`
  @-webkit-keyframes donut-rotate {
    0% {
      -webkit-transform: rotate(0);
    }
    50% {
      -webkit-transform: rotate(-140deg);
    }
    100% {
      -webkit-transform: rotate(0);
    }
  }
  @keyframes donut-rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(-140deg);
    }
    100% {
      transform: rotate(0);
    }
  }

  box-sizing: border-box;
  width: ${(props) => (props.size === "lg" ? "50px" : "14px")};
  height: ${(props) => (props.size === "lg" ? "50px" : "14px")};

  border: 2px solid ${props=>props.color ? props.color : "#bdbdbd"};
  border-radius: 50%;
  border-left-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  top: 0;
  left: 0;

  position: absolute;
  top: 0;
  left: 0;

  background: none;
  margin: 0;

  -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
  animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
`;

function LoadingIcon({ size,color }) {
  return (
    <Icon size={size}>
      <Cut size={size}>
        <Donut size={size} color={color} />
      </Cut>
    </Icon>
  );
}

export default LoadingIcon;
