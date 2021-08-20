import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const UserCars = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: .3rem;
  grid-template-rows: repeat(auto-fill, auto) ;
  grid-row-gap: 15px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-row-gap: 0;
  }
`
export const UserCarCard = styled.div`
  padding: 15px;
  grid-column-gap: 15px;
  grid-row-gap: 5px;
  border-radius: 6px;
  box-shadow: ${config.shadow};
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: .5fr auto;
  height: 170px;
  @media(max-width: 767px){
    border-radius: 6px 6px 0 0;
  }
  @media(min-width: 1650px){
    height: 200px ;
  }
`
export const TitleContainer = styled.div`
  cursor: pointer;
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
  height: 170px;
  cursor: pointer;
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
  @media(min-width: 1650px){
    height: 200px ;
  }
`
export const CarImg = styled.img`
  box-shadow: ${config.shadow};
  border-radius: 6px;
  width: 100%;
  height: inherit;
  object-fit: cover;
  @media(max-width: 767px){
    border-radius: 0 0 6px 6px;
    box-shadow: none;
  }
`


