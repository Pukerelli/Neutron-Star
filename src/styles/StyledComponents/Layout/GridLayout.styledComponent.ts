import styled from "styled-components";


interface IProps {
    width: string
    height?: string
    gridColumns?: string
    gridRows?: string
    gridGap?: string
    margin?: string
    overflow?: string
    position?: string
    align?: string
}

export const GridLayout = styled.div<IProps>`
  position: ${props => props.position ? props.position : 'none'}; ;
  display: grid;
  width: ${props => props.width ? props.width : '40%'};
  height: ${props => props.height ? props.height : 'auto'};
  grid-template-columns: ${props => props.gridColumns ? props.gridColumns : '1fr'};
  grid-template-rows: ${props => props.gridRows ? props.gridRows : '1fr'};
  grid-gap: ${props => props.gridGap ? props.gridGap : '0px'};
  align-self: ${props => props.align ? props.align : 'center'};
  margin: ${props => props.margin ? props.margin : 0}
`
export const UserProfileLayout= styled.div`
  width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
          'ds ds ds av'
          'ds ds ds av'
          'ab ab ab av'
          'cr cr cr fl';
  grid-gap: 1rem;
`