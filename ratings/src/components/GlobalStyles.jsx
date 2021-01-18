import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
      --navbar-bg-color: hsl(0, 0%, 15%);
      --navbar-text-color: hsl(0, 0%, 85%);
      --navbar-text-color-focus: white;
      --navbar-bg-contrast: hsl(0, 0%, 25%);
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  body {
      height: 100vh;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
  }
`;

export default GlobalStyles;
