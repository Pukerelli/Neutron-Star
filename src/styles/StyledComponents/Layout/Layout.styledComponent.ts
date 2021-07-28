import styled from 'styled-components'
import config from "../../../common/config/config.json"
export const Layout = styled.main`
  grid-area: content;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  position: relative;
`

export const NavbarLayout = styled.div<IProps>`
  background-color: ${config.color};
  position: relative;
  height: fit-content;
  width: 8rem;
  padding: 0.8rem;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-8rem)')};
  transition-duration: 0.7s;
  border-radius: 0 6px 6px 0;
  z-index: 100;

`

export const ContentLayout = styled.div`
  border-radius: 6px;
  overflow-y: scroll;
  padding: 0 8px 0 16px;
  height: 88vh;
  margin: 0 auto;

  ///// scroll styles
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

  ///// devices
  @media (max-height: 600px) {
    min-height: 400px;
  }
`

interface IProps {
    show: boolean
}