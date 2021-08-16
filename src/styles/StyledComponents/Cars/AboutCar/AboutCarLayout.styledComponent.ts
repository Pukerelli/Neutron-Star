import styled from "styled-components";
import config from "../../../../common/config/config.json"
import {container} from "../../Global/GlobalStyles.styledComponent";

export const AboutLayout = styled.div<{ owner?: boolean }>`
  ${container};
  position: relative;
  width: 66.66666%;
  grid-template-rows: auto ${props => props.owner ? '40px auto' : 'auto'};
  grid-template-columns: 40% auto;
  grid-gap: 15px 20px;
  @media (max-width: 1239px) {
    width: 100%;
  }
  @media (max-width: 723px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
  }

`

export const AboutCarColumn = styled.div`
  position: relative;
  display: grid;
  height: max-content;
  width: 100%;
  border-radius: 6px;
  background-color: white;
  box-shadow: ${config.shadow};
  @media(max-width: 767px){
    grid-row-start: 1;
  }
`

export const AboutCarAvatarColumn = styled.div`
  display: grid;
  grid-row-gap: 20px;
  @media(max-width: 767px){
    grid-row-start: 2 ;
  }
`
export const AboutCarAvatarContainer = styled.div`
  height: 300px;
`

export const AboutCarAvatarSubtitle = styled.div`
  background-color: white;
  display: grid;
  box-shadow: ${config.shadow};
  border-radius: 6px;
  @media (max-width: 723px){
    height: 100px;
  }
`

export const AboutCarDescriptionContainer = styled.div`
  display: grid;
  padding: 15px 15px 15px 30px;
  grid-template-rows: 50px repeat(8, 30px) 40px auto;
  grid-template-columns: 2fr 3fr;
  grid-row-gap: 5px;

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

export const AvatarSubtitle = styled.div`
  display: grid;
  grid-template-columns: 70px auto 70px 100px;
  grid-template-rows: repeat(2, 30px);
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px 10px 10px;
  align-items: center;

  @media (min-width: 1650px) {
    padding: 10px 80px 10px 80px;
    grid-template-columns: 100px auto 70px 100px;
  }
  @media (max-width: 723px) {
    padding: 10px 30px;
    grid-template-columns: 30% 70%;
    grid-template-rows: 25% 50% ;
  }
`

export const AboutCarBtnContainer = styled.div<{ hide: boolean }>`
  grid-column: span 2;
  display: ${props => props.hide ? 'none' : 'block'};
  height: 40px;
  @media(max-width: 767px){
    grid-column: auto ;
    grid-row-start: 3;
  }
`
