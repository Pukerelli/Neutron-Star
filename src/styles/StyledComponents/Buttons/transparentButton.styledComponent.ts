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
}

export const TrnsprntBtn = styled.button<IProps>`
  position: absolute;
  width: ${props => props.width};
  height: ${props=> props.height};
  border: ${props => props.border? props.border : '1px solid rgba(64,64,64,0.65)'};
  background-color: ${props => props.color? props.color : 'transparent'};
  border-radius: ${props => props.radius? props.radius: '6px'};
  transform: translate(${props => props.cords? props.cords : '50%, 50%'});
  top: ${props => props.top? props.top: '50%'};
  right: ${props => props.right? props.right: '50%'};
  color: ${props => props.textColor? props.textColor: 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s;
  &:hover{
    background: ${props => props.onColor? props.onColor : 'rgba(64,64,64,0.65)'};
  }
  
    
`