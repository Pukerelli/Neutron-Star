import styled, { css } from "styled-components";
import config from "../../../common/config/config.json"

const buttonLayout = (props: any) => css`
  grid-column: ${props.grid ? props.grid : 'auto'};
  font-size: ${props.fz ? props.fz : '1rem'};
  box-shadow: ${config.shadow};
  cursor: pointer;
  width: ${props.width};
  height: ${props.height};
  margin: ${props.margin ? props.margin : 0};
  border-radius: 10px;
  background-color: white;
  align-items: center;
  justify-content: center;
`

export const CardBtn = styled.button<ICardBtn>`
  cursor: pointer;
  display: block;
  outline: none;
  border-radius: 6px;
  background-color: #fff;
  border: 2px solid ${props => props.delete ? config.RedColor : config.linkColor};
  color: ${props => props.delete ? config.RedColor : config.linkColor};
  height: 2rem;
  width: 80px;
  transition: .5s linear;
  grid-column: 2;

  :hover {
    color: white;
    background-color: ${props => props.delete ? config.RedColor : config.linkColor};

  }

  :active {
    color: white;
    background-color: ${props => props.delete ? config.RedColor : config.linkColor};
    border: 2px solid white;
  }
`

export const CommonBtn = styled.button<ICommonBtn>`
  ${buttonLayout};
  border: 2px solid ${config.linkColor};
  display: ${props => props.hide ? 'none' : 'flex'};
  color: ${config.linkColor};
  transition: .5s linear;
  :hover {
    background-color: ${config.linkColor};
    border: none;
    color: white;
  }
  :disabled {
    background-color: ${config.RedColor};
  }
`

export const CancelBtn = styled.button<ICommonBtn>`
  ${buttonLayout};
  border: 2px solid ${config.RedColor};
  color: ${config.RedColor};
  transition: .5s linear;
  :hover {
    background-color: ${config.RedColor};
    border: none;
    color: white;
  }
`

interface ICommonBtn {
    width: string
    height: string
    grid?: string
    margin?: string
    fz?: string
    hide?: boolean

}

interface ICardBtn {
    delete?: boolean
}