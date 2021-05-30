import styled from "styled-components";

export interface ICard{
    width?: string
    height?: string
    color?: string
    boxShadow: boolean
    padding?: string
    position?: string
    textAlign?: string
    colorText?: string
    top?: string
    right?: string
    cords?: string
    display?: string
    opacity?: string
    transition?: string
}

export const Card = styled.div<ICard>`
  width: ${props => props.width? props.width : '20vw'};
  height: ${props => props.height? props.height :'45vh'};
  box-shadow: ${props => props.boxShadow? '0 0 4px 0 rgba(34, 60, 80, 0.2)' : 'none'};
  background-color: ${props => props.color? props.color :'#fff'};
  border-radius: 6px;
  color: ${props => props.color? props.color: '#000'};
  text-align: ${props => props.textAlign? props.textAlign : 'inherit'};
  overflow: hidden;
  padding: ${props => props.padding? props.padding : 0};
  @media (max-height: 600px) {
    min-height: 200px;
  }
  transition: ${props => props.transition? props.transition : '0s'};
  opacity: ${props => props.opacity? props.opacity : '1'};
  display: ${props => props.display? props.display : 'block'};
  position: ${props => props.position? props.position :'relative'};
  top: ${props => props.top? props.top : '0'};
  right: ${props => props.right? props.right : '0'};
  transform: translate(${props => props.cords? props.cords : '0, 0'});
  
`