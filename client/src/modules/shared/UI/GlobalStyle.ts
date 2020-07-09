import { createGlobalStyle } from "styled-components";

import fontFace from "src/modules/shared/UI/font-face";
import colors from "src/modules/shared/UI/colors";

const GlobalStyle = createGlobalStyle`
  ${fontFace()};
  
  body {
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
    font-family: 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', -apple-system, BlinkMacSystemFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-size: 12px;
    color: ${colors.black}
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

export default GlobalStyle;
