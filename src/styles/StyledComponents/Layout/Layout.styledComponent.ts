import styled from 'styled-components'

interface IProps {
    show: boolean
}
interface IContent{
    gridColumn?: string
    gridRows?: string
    padding?: string
    width?: string
    height?: string
    overflow?: string
}

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  min-height: 75vh;
  grid-gap: 1rem 2rem;
  position: relative;
  
`

export const NavbarLayout = styled.div<IProps>`
  background-color: #EB3649;
  margin-top: 1rem;
  position: relative;
  height: fit-content;
  width: 8rem;
  padding: 0.8rem;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-8rem)')};
  transition-duration: 0.7s;
  border-radius: 0 6px 6px 0;
  z-index: 100;
  
`

export const ContentLayout = styled.div<IContent>`
  background-color: rgba(69,203,255,0.05);
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  grid-column: 2;
  overflow: ${props => props.overflow? props.overflow: 'none'};
  margin-top: 1rem;
  min-height: 43vh;
  height: ${props => props.height? props.height : '75vh'};
  display: grid;
  align-items: revert;
  grid-template-columns: ${props => (props.gridColumn? props.gridColumn : 'none')};
  grid-template-rows: ${props => (props.gridRows? props.gridRows : 'none')};
  padding: ${props => (props.padding ? props.padding : '1rem')};
  @media (max-height: 600px) {
    min-height: 400px;
  }
`

