import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.FontFace.primary};
    scroll-behavior: smooth;
  }

  
  /* Scroll Bar */
  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
  }


  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.grey};
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;    
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    scroll-behavior: smooth !important;
    font-family: ${({ theme }) => theme.fonts.FontFace.primary};
  }
  
  button, input {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    outline: none;
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.px80};
    font-weight: ${({ theme }) => theme.fonts.weights.f700};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.FontFace.secondary};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.px35};
    font-weight: ${({ theme }) => theme.fonts.weights.f700};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.FontFace.secondary};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.FontFace.secondary};
    color: ${({ theme }) => theme.colors.black};
  }


  @media screen and (max-width: 500px) {

    h1 {
      font-size: ${({ theme }) => theme.fonts.sizes.px35};
    }

    h2 {
      font-size: ${({ theme }) => theme.fonts.sizes.px25};
    }

   }
  

`;

export default GlobalStyle;
