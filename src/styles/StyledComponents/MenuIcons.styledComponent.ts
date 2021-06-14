import styled from "styled-components";

interface IProps {
    background: string
    margin?: string
}

export const MenuIcon = styled.div<IProps>`
  width: 150px;
  height: 150px;
  border-radius: 6px;
  background: center / contain no-repeat url(${props => props.background});
  margin: ${props => props.margin? props.margin : '0 auto'};
  
  

`