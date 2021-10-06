import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  /* :root {
    
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    @media(max-width: 720px) {
      font-size: 87.5%; //14px
    }    
    @media(max-width: 480px) {
      font-size: 81.25%; //13px
    }    
  }

  body {
    background: #fff url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }




`;