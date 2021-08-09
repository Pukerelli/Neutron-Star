import styled from "styled-components";
import config from "../../../common/config/config.json"


export const Name = styled.h1<IName>`
  color: #333234;
  font-size: 1.7rem;
  text-align: ${props => props.textAlign ? props.textAlign : 'normal'};

  &::after {
    margin-top: .2rem;
    content: '';
    display: ${props => props.underline ? 'block' : 'none'};
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.14);
  }
`
export const NameMini = styled.h3`
  color: #333234;
  font-size: 1.4rem;
`
export const NameDouble = styled.p<ICarModel>`
  color: ${props => props.color ? props.color : '#6F848F'};
  font-size: ${props => props.font ? props.font : '1.2rem'};
`
export const Title = styled.p`
  color: ${config.commonColor};
  font-size: 1.2rem;
`
export const Subtitle = styled.p`
  color: ${config.linkColor};
  font-size: 1.2rem;
`
export const EditProfileIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 1.4rem;
  color: ${config.linkColor};
  cursor: pointer;
`

export const ImgCommon = styled.img`
  box-shadow: ${config.shadow};
  border-radius: 6px;
  width: 100%;
  height: inherit;
  object-fit: cover;
`

export const SearchSelf = styled.div`
  display: flex;
  align-items: center;
  color: ${config.commonColor};
  height: 2rem;
  width: 80px;
  grid-column: 2;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  height: 100%;
  border: 2px solid ${config.commonColor};
  border-radius: 6px;

  :focus {
    border: 2px solid ${config.linkColor};
    outline: none;
  }

`

export const WhiteCard = styled.div<ICard>`
  box-shadow: ${config.shadow};
  background-color: #fff;
  border-radius: 6px;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin? props.margin : 0}
`


interface IName {
    underline?: boolean
    textAlign?: string
}
interface ICard {
    width: string
    padding: string
    height: string
    margin?: string
}
interface ICarModel {
    font?: string
    color?: string
}


