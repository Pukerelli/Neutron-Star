import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const AddCarLayout = styled.div`
  width: 800px;
  margin: 0 auto;
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
  grid-template-rows: 430px 40px ;
  grid-template-columns: 440px 300px;
`
export const AddCarLeftColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 65px) 40px;
  grid-gap: 5px 20px;
`
export const AddCarRightColumn = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 205px repeat(3, 65px);
  grid-gap: 5px 20px;
`
export const ButtonContainer = styled.div`
  width: 60%;
  grid-column: span 2;
  margin: 0 auto;
`
export const CarPhotoContainer = styled.div`
  height: 200px;
  grid-column: span 2;
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: ${config.redColor}
`

export const CarPhotoInputContainer = styled.div`
  height: 60px;
  grid-column: span 2;
`