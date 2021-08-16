import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    color: white;
    font-size: 18px;
    a{
      text-decoration: none;
      color: white;
    }
    *{
      text-transform: uppercase;
      list-style: none;
      box-sizing: border-box;
      font-family: 'Odibee Sans', cursive;
      text-decoration: none;
      padding: 0;
      margin: 0;
    }
  }
`


///// wrapper

export const container = () => `
max-width: 1200px;
margin: 0 auto;
padding: 15px;
display: grid;
box-sizing: border-box;
`