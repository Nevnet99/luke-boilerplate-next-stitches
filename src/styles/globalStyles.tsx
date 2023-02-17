// global styles for the app styled components

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
  
    *, *:before, *:after {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }

    html {
      box-sizing: border-box;
      font-size: 16px;
      font-family: ${({ theme: { font } }) => font.family};
    }

    /* These are just base styles to make the stories in storybook pretty */

    h1 {
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 0.4rem;
      font-weight: bold;
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 0.8rem;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.2rem;
      font-weight: bold;
    }
    
    h1,h2,h3 {
      letter-spacing: 0.04rem;
    }

    a {
      display: inline-block;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 1.25rem
    }
  `;

export default GlobalStyles;
