import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  /* background-color: #F3F4F9; */
}

/* this className must be added on global to make style changes on react-select */
.react-select__multi-value {
  direction: initial;
  z-index: 10001;
}
`;

