import styled from "styled-components";

export const UserCars = styled.div`
  display: grid;
  width: 530px;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: .3rem;
  grid-area: cr;
`
export const UserCarCard = styled.div`
  padding: 1rem;
  grid-column-gap: 1.3rem;
  grid-row-gap: .5rem;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 3fr;
  height: 120px;
`
export const CarTitleContainer = styled.div`
  grid-column: span 2;
  grid-column-gap: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;

  &::after {
    grid-column: span 2;
    margin-top: .2rem;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.14);
    margin-bottom: 0.3rem;
  }

`
export const CarImgContainer = styled.div`
  height: 120px;
`