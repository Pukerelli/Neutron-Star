import styled from 'styled-components'
import config from "../../../common/config/config.json"
export const Layout = styled.main`
  grid-area: content;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${config.linkColor};
  }
`

export const NavbarLayout = styled.div`
  height: fit-content;
  position: relative;
`

