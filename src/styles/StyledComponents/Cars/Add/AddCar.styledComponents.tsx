import styled from "styled-components";
import config from "../../../../common/config/config.json"
import {container} from "../../Global/GlobalStyles.styledComponent";

export const AddCarLayout = styled.div`
  ${container};
  padding: 15px;
  width: 66.6666%;
  margin: 0 auto;
  @media (max-width: 1025px) {
    width: 100%;
  }
`
export const AddCarFormContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: ${config.shadow};
  border-radius: 6px;
  display: grid;
  margin: 0 auto;
  width: 100%;
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
export const AddCarLeftColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 65px);
  grid-gap: 5px 20px;
  @media (min-width: 1440px) and (max-width: 1025px) {
    grid-template-rows: repeat(4, auto);
  }
  @media (max-width: 767px) {
    grid-row-start: 1;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }
`


export const AddCarLeftBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px 20px;
  grid-template-rows: repeat(2, 65px);
  @media (min-width: 1440px) {
    grid-template-rows: repeat(2, auto);
  }
  @media (max-width: 1025px) {
    grid-template-rows: repeat(2, auto);
  }
  @media (max-width: 767px) {
    grid-row-start: 0;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }

`
export const AddCarRightColumn = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 65px);
  grid-gap: 5px 20px;
  @media (min-width: 1440px){
    grid-template-rows: repeat(2, auto);
  }
  @media (max-width: 1025px) {
    grid-template-rows: repeat(2, auto);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
export const CarPhotoContainer = styled.div`
  height: 265px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    grid-row-start: 3;
  }
  @media(max-width: 1449px ){
    height: 260px;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: ${config.redColor};

  @media (max-width: 767px) {
    height: auto;
  }

`

export const AddCarBtnContainer = styled.div`
  margin: 20px auto;
  width: 60%;
  @media (max-width: 767px) {
    margin: 10px auto;
  }
`

export const CarPhotoInputContainer = styled.div`
  grid-column: span 2;
  @media (max-width: 767px) {
    grid-column: auto;
  }
`