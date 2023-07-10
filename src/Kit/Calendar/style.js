import styled from "styled-components";
// import { defaultTheme as theme } from "../defaultTheme";
export const CalnedorMobileWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  // background-color: rgba(0, 0, 0, 0.2);
  background-color: ${props=>props.theme.color_background_backdrop};
  z-index: 100000;
`;

export const CalenderWrapper = styled.div`
  width: 80% !important;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 0.75rem;
  z-index: 100;
  background-color: ${props=>props.theme.color_background_primary};
  padding: 1.25rem;
  /* -webkit-box-shadow: 0 0 0.8125rem -1.5px rgba(99, 156, 240, 0.2); */
  /* -moz-box-shadow: 0 0 0.8125rem -1.5px rgba(99, 156, 240, 0.2); */
  /* box-shadow: 0 0 0.8125rem -1.5px rgba(99, 156, 240, 0.2); */
  animation-name: shutter-in-left;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  box-sizing: border-box;
  @keyframes shutter-in-left {
    0% {
      -webkit-transform: rotateY(100deg);
      transform: rotateY(100deg);
      -webkit-transform-origin: left;
      transform-origin: left;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
      -webkit-transform-origin: left;
      transform-origin: left;
      opacity: 1;
    }
  }
`;
export const CalendarHeader = styled.div`
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row-reverse;
`;
export const HeaderInformation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 50%;
  padding-right: 0.625rem;
  font-size: 0.875rem;
  color: ${props=>props.theme.color_text_primary};
  direction: ltr;
  font-family: ${(props) => props.theme.fontDefault};
  div {
    margin-left: 0.9375rem;
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.primary};
      border: none;
      color: white;
      border-radius: 0.4375rem;
      transition: all 300ms ease;
      padding: 0.125rem 0.625rem;
    }
    :not(:hover) {
      transition: all 300ms ease;
    }
  }
`;
export const HeaderController = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 50%;
`;
export const Controller = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  cursor: pointer;
  user-select: none;
  margin: 0 0.3125rem;
  color: ${props=>props.theme.color_text_secondary};
  border: 1.5px solid ${props=>props.theme.color_border_primary};
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.625rem;
  display: none;
  :hover {
    transform: scale(1.05);
    color: blue;
    border: 1.5pxrem solid blue;
    transition: all 300ms;
  }
  :not(:hover) {
    transition: all 300ms;
  }
`;
export const CalenderInputsRow = styled.div`
  width: ${(props) =>
    props.label
      ? props.labelPosition === "right"
        ? "calc(100% - 7.5rem)"
        : "calc(100% - 0rem)"
      : "calc(100% - 0rem)"};
  max-width: ${(props) =>
    props.label
      ? props.labelPosition === "right"
        ? "calc(100% - 7.5rem)"
        : "calc(100% - 0rem)"
      : "calc(100% - 0rem)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 3.57rem;
  background-color: ${props=>props.theme.color_background_secondary};
  border-radius: 0.75rem;
  padding: 0 0;
  position: relative;
  border: 1.5px solid ${props=>props.theme.color_border_primary} !important;
  box-sizing: border-box;
  ${(props) =>
    props.error === true &&
    `box-shadow: 0 0.25rem ${props.theme.danger}
            `};
  ${(props) =>
    props.error === true
      ? `border:1.5px solid ${props.theme.color_background_secondary}
    `
      : `border:1.5px solid ${props.theme.color_border_primary}`};
  .calendar__view__button {
    background-color: ${props=>props.theme.color_background_secondary};
    width: 2.5rem;
    height: 100%;
    border-radius: 0.4375rem 0 0 0.4375rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-radius: 0.75rem 0 0 0.75rem;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-right: 1.5px solid ${props=>props.theme.color_background_secondary};
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  outline: none;
  &.focus {
    .calendar__view__button {
      background-color: ${props=>props.theme.color_background_primary};
    }
    background-color: ${props=>props.theme.color_background_primary};
    outline: none;
    border: 1.5px solid #1d8748;
    ${(props) =>
      props.error !== true
        ? `
        box-shadow: 0 0.25rem ${props.theme.primary};
        border: 1.5px solid ${props.theme.primary};
            `
        : `box-shadow: 0 0.25rem #f96262;
         border: 1.5px solid #f96262;
          `};
  }
  form {
    width: calc(100% - 2.1875rem);
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    color: ${props=>props.theme.color_text_primary_l5};
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
export const Input = styled.input`
  background-color: ${props=>props.theme.color_background_secondary};
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${props=>props.theme.color_text_primary};
  border: none;
  /* font-size: ${({ fontSize = 16 }) => `${fontSize}px`}; */
  font-size: 1rem;
  max-height: 2.5rem;
  height: 2.5rem;
  font-family: ${(props) => props.theme.fontDefault};
  box-sizing: border-box;
  border-radius: 0.4375rem;
  padding: 0;
  width: ${(props) =>
    props.name === "year" ? "31% !important" : "21% !important"};
  background-color: transparent;
  /* border-radius: 0.4375rem; */
  :focus {
    user-select: none;
    outline: none;
  }
`;
export const DayCellContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  width: 100%;
  height: 13.75rem;
  flex-wrap: wrap;
  margin-top: 0.3125rem;
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  @keyframes shutter-in-top {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;
export const DayCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.28%;
  color: black;
`;
export const GoToDayButton = styled.div`
  color: ${(props) => props.theme.primary};
  height: 1.75rem;
  border-radius: 0.4375rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: ${(props) => props.theme.fontDefault};
  font-size: 0.75rem;
  margin-top: 0.3125rem;
  cursor: pointer;
`;
export const MonthCellContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  height: 17.5rem;
  flex-wrap: wrap;
  margin-top: 0.3125rem;
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  @keyframes shutter-in-top {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;
export const MonthCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  color: black;
  height: 3.125rem;
  &:focus {
    outline: none;
  }
`;
export const Month = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 0.4375rem;
  color: ${props=>props.theme.color_text_primary_l5};
  font-size: 0.875rem;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all 0.3s ease-out 0.1ms;
  opacity: ${({ active }) => (!active ? 1 : 0.25)};
  pointer-events: ${({ active }) => (!active ? "initial" : "none")};
  user-select: ${({ active }) => (!active ? "initial" : "none")};
  font-weight: 600;
  font-family: ${(props) => props.theme.fontDefault};
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
    border-radius: 0.4375rem;
    transition: all 300ms ease;
  }
  &.selected {
    background-color: ${(props) => props.theme.primary};
    color: white;
    font-family: ${(props) => props.theme.fontDefault};
  }
`;
export const YearCellContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  height: 17.5rem;
  flex-wrap: wrap;
  margin-top: 0.3125rem;
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @keyframes shutter-in-top {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;
export const YearCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  color: black;
  height: 2.5rem;
  &:focus {
    outline: none;
  }
`;
export const Year = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${props=>props.theme.color_text_primary_l5};
  border-radius: 0.4375rem;
  font-size: 0.875rem;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all 0.3s ease-out 0.1ms;
  opacity: ${({ active }) => (!active ? 1 : 0.25)};
  pointer-events: ${({ active }) => (!active ? "initial" : "none")};
  user-select: ${({ active }) => (!active ? "initial" : "none")};
  font-weight: 600;
  font-family: ${(props) => props.theme.fontDefault};
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
    border-radius: 0.4375rem;
    transition: all 300ms ease;
  }
  &.selected {
    background-color: ${(props) => props.theme.primary};
    color: white;
    font-family: ${(props) => props.theme.fontDefault};
  }
`;
export const Weekname = styled.div`
  padding: 0.125rem 0.3125rem;
  display: flex;
  justify-content: center;
  width: 2.9375rem;
  height: 1.875rem;
  align-items: baseline;
  width: 14.3%;
  color: ${props=>props.theme.color_text_primary_l5};
  font-family: ${(props) => props.theme.fontDefault};
  font-size: 0.8125rem;
`;
export const WeekNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  width: 100%;
`;

export const Day = styled.div`
  width: 2.25rem;
  height: 1.75rem;
  cursor: pointer;
  border-radius: 0.4375rem;
  font-size: 0.8125rem;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all 0.3s ease-out 0.1ms;
  opacity: ${({ active }) => (!active ? 1 : 0.25)};
  pointer-events: ${({ active }) => (!active ? "initial" : "none")};
  user-select: ${({ active }) => (!active ? "initial" : "none")};
  font-weight: 600;
  font-family: ${(props) => props.theme.fontDefault};
  color:${props=>props.theme.color_text_secondary};
  &:focus {
    outline: none;
  }

  :hover {
    background-color: ${(props) => props.theme.primary};
    border: none;
    color: white;
    width: 2.25rem;
    height: 1.75rem;
  }
  &:active {
    transform: scale(0.9);
  }
  &.selected {
    background-color: ${(props) => props.theme.primary};
    color: white;
    width: 2.25rem;
    height: 1.75rem;
    font-family: ${(props) => props.theme.fontDefault};
  }
`;

export const ActiveButton = styled(Day)`
  background-color: #4285f4;
  color: white;
`;
