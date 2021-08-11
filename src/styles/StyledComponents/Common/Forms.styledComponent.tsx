import styled from "styled-components";
import config from "../../../common/config/config.json";

const inputStyle = (props: { error?: boolean }) => `
width: 100%;
  height: 100%;
  border-radius: 2px;
  box-shadow: ${config.shadow};
  text-transform: none;
  font-size: 1.5rem;
  padding: .5rem;
  border: ${props.error ? `1px solid ${config.redColor}` : 'none'};
  ::placeholder{
    text-transform: uppercase;
    font-size: .7rem;
    
  }
  :focus {
    border: 2px solid ${props.error ? config.redColor : config.linkColor};
    outline: none;
  }


`


export const FieldInputContainer = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 5px;
  grid-template-rows: 10px 35px 10px;
`

export const FieldAreaContainer = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 5px;
  grid-template-rows: 10px 250px 10px;
`

export const LabelForm = styled.label`
  color: ${config.linkColor};
  font-size: 10px;
`

export const InputText = styled.input<{ error?: boolean }>`
  ${inputStyle}
`

export const InputArea = styled.textarea<{ error?: boolean }>`
  ${inputStyle};
  height: 250px;
  resize: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${config.linkColor};
  }
`

export const ValidErrors = styled.div`
  height: 20px;
  color: ${config.redColor};
  font-size: 12px;
  margin-left: auto;
`
