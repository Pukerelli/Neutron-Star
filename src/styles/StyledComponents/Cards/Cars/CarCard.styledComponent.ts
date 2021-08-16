import styled from "styled-components";
import config from "../../../../common/config/config.json";

export const CarCardLayout = styled.div`
  position: relative;
  box-shadow: ${config.shadow};
  display: grid;
  padding: 7px 7px 7px 15px;
  width: 100%;
  height: fit-content;
  grid-template-columns: 3fr 2fr;
  background-color: white;
  border-radius: 6px;
  grid-column-gap: 1rem;
  @media (min-width: 1650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    padding: 7px;
  }
`

export const CarCardDescription = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: repeat(6, auto);
  align-items: center;
  grid-template-columns: 1fr 1fr;
`
export const CarCardAvatar = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: auto auto;
  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`
export const CarCardImgContainer = styled.div`
  height: 130px;
  @media(min-width: 1650px){
    height: 250px;
  }
  @media(max-width: 767px){
    height: 200px;
  }
`

export const CarCardAvatarSubtitle = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-bottom: 40px;
  margin-left: auto;
  text-align: right;
  grid-gap: 20px;
  margin-right: 10px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    margin-left: 0;
    grid-row-start: 1;
    text-align: left;
    grid-row-gap: 10px;
    margin-bottom: 0;
    grid-column-gap: 10px;
  }
  @media(min-width: 1650px){
    margin-bottom: 60px;
  }
`

export const CarCardButtonContainer = styled.div`
  position: absolute;
  text-align: center;
  width: 15%;
  right: 5px;
  bottom: 5px;
  
  @media(min-width: 1650px){
    right: 20px;
    bottom: 20px;
  }
  @media (max-width: 550px) {
    right: 50%;
    bottom: 10px;
    width: 25%;
    transform: translateX(50%);
  }
`


