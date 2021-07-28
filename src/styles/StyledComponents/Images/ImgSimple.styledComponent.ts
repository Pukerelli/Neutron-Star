import styled from "styled-components";


interface IProps{
    height?: string
    margin?: string
    minHeight?: string
    filter?: string
    borderRadius?: string
}

export const ImgSimple = styled.img<IProps>`
  border-radius:${props => props.borderRadius? props.borderRadius :'6px'} ;
  filter: ${props => props.filter? props.filter : 'none'};
  width: 100%;
  height: ${props => props.height? props.height : 'inherit'};
  overflow: hidden;
  object-fit: cover;
  max-height: inherit;
`

