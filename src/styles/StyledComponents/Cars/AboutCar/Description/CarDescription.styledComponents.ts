import styled from "styled-components";

export const AboutCarDescriptionContainer = styled.div`
  display: grid;
  padding: 15px 30px;
  grid-template-rows: 40px repeat(10, 30px);
  grid-template-columns: 2fr 3fr;
  grid-row-gap: 0.3rem;
  &::after {
    content: '';
    grid-column: span 2;
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.14);
  }
`
export const CarNameContainer = styled.div`
  grid-column: span 2;
  text-align: center;
  align-items: center;
`
