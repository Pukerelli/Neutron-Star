import styled from "styled-components";
import config from "../../../common/config/config.json"

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 8% 90%;
  min-height: 100vh;
  grid-gap: 2%;
  background-color: ${config.background};
  grid-template-areas: 
  'header'
  'content'
`

