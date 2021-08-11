import styled from "styled-components";
import config from "../../../common/config/config.json"

export const AuthLayout = styled.div`
  width: 600px;
  margin: 0 auto;
  padding-top: 5vh;
  box-sizing: border-box;
`
export const AuthCard = styled.div<{error: boolean}>`
  width: 460px;
  margin: 0 auto;
  box-sizing: border-box;
  border: ${props => props.error? `1px solid ${config.redColor}`: 'none'};
  position: relative;
  background-color: white;
  box-shadow: ${config.shadow};
  border-radius: 6px;
  color: ${config.commonColor};
  display: grid;
  grid-template-rows: 40px auto 210px auto;
  grid-column-gap: 5px;
  padding: 20px 40px;
`

export const LoginFormLayout = styled.div`
  display: grid;
  width: 60%;
  margin: 20px auto 0;
  grid-template-rows: 60px 60px 35px;
  grid-row-gap: 10px;
`
export const RegistrationFormLayout = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  grid-template-rows: 60px 60px 35px;
`

export const AuthError = styled.div`
  text-align: center;
  color: ${config.redColor}
`

export const RegistrationButtonContainer = styled.div`
  align-self: end;
  grid-column: span 2;
  width: 60%;
  margin: 0 auto;
`
