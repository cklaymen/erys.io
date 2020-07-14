import { createGlobalStyle } from "styled-components";

import fontFace from "src/modules/shared/UI/font-face";
import colors from "src/modules/shared/UI/colors";
import media from "src/modules/shared/UI/media";

const GlobalStyle = createGlobalStyle`
  ${fontFace()};

  html {
    font-size: 10px;
    ${media.medium`
      font-size: 12px;
    `}
    ${media.extraLarge`
      font-size: 14px;
    `}
    /* -webkit-text-size-adjust: 100%; */
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
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

export default GlobalStyle;
