import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    background-color: #406070;
    

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  #root {
    height: 100%;
    width: 100%;
    margin: 0;
  }
    
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0;
    place-items: center;
    
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  h1,h2,h3, h4, h5 {
    margin: 0;
  }

  input {
    border-radius: 0.5rem;
    border: 1px solid black;
    padding: 0.25rem 0.5rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
