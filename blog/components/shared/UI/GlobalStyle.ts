import { createGlobalStyle } from "styled-components";

import fontFace from "./font-face";
import colors from "./colors";
import media from "./media";

const GlobalStyle = createGlobalStyle`
  ${fontFace()};

  html {
    font-size: 11px;
    ${media.medium`
      font-size: 12px;
    `}
    ${media.extraLarge`
      font-size: 14px;
    `}
    text-size-adjust: 100%;
  }
  
  body {
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
    font-family: 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', -apple-system, BlinkMacSystemFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 1.2rem;
    color: ${colors.black};

    & *::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.5rem;
      background-color: none;
    }

    & *::-webkit-scrollbar-track {
      background-color: none;
      border-radius: 0.5rem;
    }

    & *::-webkit-scrollbar-thumb {
      transition: all 2s;
      border-radius: 5px;
      background-color: none;
    }

    & *:hover::-webkit-scrollbar-thumb {
      background-color: ${colors.black}80;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

export default GlobalStyle;
