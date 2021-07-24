import styled from "styled-components";
import config from "../../../common/config/config.json"

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 3rem 12fr;
  min-height: 100vh;
  grid-gap: 0.2rem;
  background-color: ${config.background};
  grid-template-areas: 
  'header'
  'content'
`

