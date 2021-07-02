import styled from "styled-components";

export const HeaderItem = styled.div`
  height: inherit;
  color: #ededed;
  text-decoration: none;
  margin-right: 1rem;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #fff;
    text-shadow: 1px 0 0 1px white;
    border-bottom: 2px solid white;
  }
  
  &:last-child{
    position: absolute;
    right: 0;
  }

`