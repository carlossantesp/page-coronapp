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

  body{
    font-family: ${({ theme }) => theme.fontPrimary};
    font-weight: ${({ theme }) => theme.fontRegular};
    font-size: ${({ theme }) => theme.sizeBase};
    background-color: ${({ theme }) => theme.colorBg};
    line-height: ${({ theme }) => theme.lineHParagraphs};
  }

  svg{
    fill:currentColor;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    padding: 0 1rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
    @media screen and (min-width: 992px){
      padding: 0 3.5rem;
    }
  }
`;

export default GlobalStyle;
