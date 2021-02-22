import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
