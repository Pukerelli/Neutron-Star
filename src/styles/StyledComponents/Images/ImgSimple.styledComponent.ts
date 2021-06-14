import styled from "styled-components";

interface IProps{
    height?: string
    margin?: string
    minHeight?: string
    filter?: string
}

export const ImgSimple = styled.img<IProps>`
  filter: ${props => props.filter? props.filter : 'none'};
  width: 100%;
  height: ${props => props.height? props.height : 'inherit'};
  overflow: hidden;
  margin: ${props => props.margin? props.margin : 0};
  object-fit: cover;
  @media (max-height: 600px) {
    min-height: ${props => props.minHeight? props.minHeight: '200px'};
  }
`