import styled from "styled-components";
import config from "../../../common/config/config.json"

export const ListToggleContainer = styled.div`
  height: 55px;
  box-shadow: ${config.shadow};
  background-color: #fff;
  width: 530px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  align-items: center;
  border-radius: 6px;
`

export const ListToggle = styled.div<IToggle>`
  font-size: 2rem;
  cursor: pointer;
  color: ${props => props.active ? config.linkColor : 'grey'};
  margin-left: ${props => props.marginLeft? 'auto': 0};
  margin-right: ${props => props.marginLeft? 0 : 'auto'};
  transition: .3s linear;
  :hover{
    color: ${config.linkColor}
  }

`

interface IToggle {
    marginLeft?: boolean
    active?: boolean
}