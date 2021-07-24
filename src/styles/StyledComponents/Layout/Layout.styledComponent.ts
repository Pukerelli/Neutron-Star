import styled from 'styled-components'

interface IProps {
    show: boolean
}
export const Layout = styled.main`
  grid-area: content;
  display: grid;
  grid-template-columns: 1.2fr 8fr 0.8fr;
  grid-gap: 1rem;
  position: relative;
`

export const NavbarLayout = styled.div<IProps>`
  margin-top: 1rem;
  background-color: #EB3649;
  position: relative;
  height: fit-content;
  width: 8rem;
  padding: 0.8rem;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-8rem)')};
  transition-duration: 0.7s;
  border-radius: 0 6px 6px 0;
  z-index: 100;

`
interface IDev {
    bg?: string
}

export const ContentLayout = styled.div<IDev>`
  border-radius: 6px;
  overflow-y: scroll;
  margin-top: 1rem;
  height: 85vh;
 background-color: ${props => props.bg? props.bg: 'none'};

  ///// scroll styles
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #EB3649;
  }

  ///// devices
  @media (max-height: 600px) {
    min-height: 400px;
  }
`

