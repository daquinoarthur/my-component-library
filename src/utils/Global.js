import { createGlobalStyle } from 'styled-components'
import { family } from './typography'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;

    font-size: 16px;
  }  

  *,
  *::before,
  *::after { 
    padding: 0;
    margin: 0;
    box-sizing: inherit; 
  }

  body {
    font-family: ${family};
  }
`