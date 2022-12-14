import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  html {
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
    font-display: fallback;
  }

  body{
    box-sizing: border-box;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;
