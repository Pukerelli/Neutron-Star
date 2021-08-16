import styled from "styled-components";
import config from "../../../common/config/config.json"


export const AuthLayout = styled.div`
  width: 50%;
  padding: 5vh 15px;
  max-width: 600px;
  margin: 0 auto;
  height: fit-content;
  box-sizing: border-box;
  @media(max-width: 767px){
    width: 100%;
  }
`
export const AuthCard = styled.div<{error: boolean}>`
  margin: 0 auto;
  box-sizing: border-box;
  border: ${props => props.error? `1px solid ${config.redColor}`: 'none'};
  position: relative;
  background-color: white;
  box-shadow: ${config.shadow};
  height: fit-content;
  border-radius: 6px;
  color: ${config.commonColor};
  display: grid;
  grid-template-rows: 40px auto min-content auto;
  grid-column-gap: 5px;
  padding: 20px 40px;
  @media(max-width: 767px){
    
  }
`

export const LoginFormLayout = styled.div`
  display: grid;
  width: 60%;
  margin: 20px auto 20px;
  grid-template-rows: 60px 60px 40px;
  grid-row-gap: 10px;
  @media(max-width: 767px){
    width: 80%;
  }
`
export const RegistrationFormLayout = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  grid-template-rows: 60px 60px auto;
  @media(max-width: 767px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 60px) 35px;
    grid-column-gap: 0;
  }
`

export const AuthError = styled.div`
  text-align: center;
  color: ${config.redColor}
`

export const RegistrationButtonContainer = styled.div<{col: boolean}>`
  align-self: end;
  grid-column: ${props => props.col? 'span 2': 'auto'};
  width: 60%;
  margin: 0 auto;
  @media(max-width: 767px){
    grid-column: auto;
    width: 80%;
  }
`

