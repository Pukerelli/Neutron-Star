import styled from "styled-components"
import config from "../../../common/config/config.json"

export const HeaderWrapper = styled.header`
  grid-area: header;
  display: grid;
  width: 100vw;
  height: 100%;
  background-color: ${config.wrapperColor};
  align-items: center;
  padding: 5px;
  font-size: 2rem;
  position: relative;
  box-shadow: ${config.shadow};
  
`
export const HeaderItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-column-gap: 20px;
  width: 100%;
  justify-content: center;
`

export const HeaderItem = styled.div<{selected: boolean}>`
  height: inherit;
  text-align: center;
  color: ${config.mainColor};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  a{
    color: ${config.mainColor};
  }

  &:hover {
    color: #fff;
    text-shadow: 1px 0 0 1px white;
    border-bottom: 2px solid white;
  }
  &:last-child{
    position: absolute;
    right: 10px;
  }
  @media(max-width: 767px){
    padding: 0;
    border-bottom: ${props=> props.selected? '2px solid white': '2px solid transparent'};
  }
`
