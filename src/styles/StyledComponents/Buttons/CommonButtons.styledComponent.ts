import styled from "styled-components";
import config from "../../../common/config/config.json"

export interface IBtn {
    width: string
    height: string
    onColor?: string
    border?: string
    radius?: string
    cords?: string
    color?: string
    top?: string
    right?: string
    textColor?: string
    position?: string
    margin?: string
    opacity?: string
}

export const Btn = styled.button<IBtn>`
  position: ${props => props.position ? props.position : 'absolute'};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin ? props.margin : '0'};
  border: ${props => props.border ? props.border : '1px solid rgba(64,64,64,0.65)'};
  background-color: ${props => props.color ? props.color : '#EB3649'};
  border-radius: ${props => props.radius ? props.radius : '6px'};
  transform: translate(${props => props.cords ? props.cords : '50%, 50%'});
  top: ${props => props.top ? props.top : '50%'};
  right: ${props => props.right ? props.right : '50%'};
  color: ${props => props.textColor ? props.textColor : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s;
  cursor: pointer;
  opacity: ${props => props.opacity ? props.opacity : 1};;

  &:hover {
    background: ${props => props.onColor ? props.onColor : 'rgba(235,54,73, 0.8)'};
  }
`

export const CardBtn = styled.button<ICardBtn>`
  cursor: pointer;
  display: block;
  outline: none;
  border-radius: 6px;
  background-color: #fff;
  border: 2px solid ${props => props.delete? config.color : config.linkColor};
  color: ${props => props.delete? config.color : config.linkColor};
  height: 2rem;
  width: 80px;
  transition: .5s linear;
  grid-column: 2;
  :hover{
    color: white;
    background-color: ${props => props.delete? config.color : config.linkColor};
    
  }
  :active{
    color: white;
    background-color: ${props => props.delete? config.color : config.linkColor};
    border: 2px solid white;
  }
`

export const CommonBtn = styled.button<ICommonBtn>`
  grid-column: ${props => props.grid? props.grid : 'auto'};
  font-size: ${props => props.fz? props.fz : '1rem'};
  box-shadow: ${config.shadow};
  cursor: pointer;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin? props.margin: 0};
  border-radius: 10px;
  background-color: white;
  border: 2px solid ${config.linkColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${config.linkColor};
  transition: .5s linear;

  :hover {
    background-color: ${config.linkColor};
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

}

interface ICardBtn {
    delete?: boolean
}