import styled from "styled-components";
import {container} from "../../Global/GlobalStyles.styledComponent";


export const SelectLayout = styled.div`
  ${container};
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media(max-width: 1025px){
    width: 100%;
  }
`