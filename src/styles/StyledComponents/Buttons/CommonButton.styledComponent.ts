import styled from "styled-components";

interface IProps{
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
    position? : string
    margin? : string
    opacity? : string
}

export const CommonBtn = styled.button<IProps>`
  position: ${props => props.position? props.position : 'absolute'};
  width: ${props => props.width};
  height: ${props=> props.height};
  margin: ${props => props.margin? props.margin : '0'};
  border: ${props => props.border? props.border : '1px solid rgba(64,64,64,0.65)'};
  background-color: ${props => props.color? props.color : '#EB3649'};
  border-radius: ${props => props.radius? props.radius: '6px'};
  transform: translate(${props => props.cords? props.cords : '50%, 50%'});
  top: ${props => props.top? props.top: '50%'};
  right: ${props => props.right? props.right: '50%'};
  color: ${props => props.textColor? props.textColor: 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s;
  cursor: pointer;
  opacity: ${props => props.opacity? props.opacity: 1};;
  &:hover{
    background: ${props => props.onColor? props.onColor : 'rgba(235,54,73, 0.8)'};
  }
  
    
`