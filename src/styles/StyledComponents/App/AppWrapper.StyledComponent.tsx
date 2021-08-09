import styled from "styled-components";
import config from "../../../common/config/config.json"

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 8% 92%;
  height: 100vh;
  background-color: ${config.background};
  grid-template-areas: 
  'header'
  'content'
`

