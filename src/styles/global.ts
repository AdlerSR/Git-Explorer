import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #0B0A0D url(${githubBackground}) 70% top no-repeat;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select{
    font: 16px 'Roboto', sans-serif;
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button, svg {
    cursor: pointer;
  }
`;
