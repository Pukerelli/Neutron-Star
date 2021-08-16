import styled from "styled-components";
import config from "../../../common/config/config.json"

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 46px auto;
  width: 100vw;
  height: 100vh;
  background-color: ${config.background};
  overflow-x: hidden;
  grid-template-areas: 
  'header'
  'content';
  @media(max-width: 767px){
    grid-template-rows: auto 53px;
    grid-template-areas: 
  'content'
  'header';
  }
`

