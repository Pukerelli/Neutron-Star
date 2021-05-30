import styled from "styled-components";

export interface ICard{
    width?: string
    height?: string
    color?: string
    boxShadow: boolean
    padding?: string
}

export const Card = styled.div<ICard>`
  width: ${props => props.width? props.width : '20vw'};
  height: ${props => props.height? props.height :'45vh'};
  box-shadow: ${props => props.boxShadow? '0 0 4px 0 rgba(34, 60, 80, 0.2)' : 'none'};
  background-color: ${props => props.color? props.color :'#fff'};
  border-radius: 6px;
  overflow: hidden;
  padding: ${props => props.padding? props.padding : 0};
  @media (max-height: 600px) {
    min-height: 200px;
  }
  
`