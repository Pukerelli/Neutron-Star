import styled from "styled-components";

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 2.5rem 8fr 1fr;
  min-height: 100vh;
  grid-gap: 1rem;
  background-color: #FCFEF5;
  grid-template-areas: 
  'header'
  'content'
  'footer';
`

