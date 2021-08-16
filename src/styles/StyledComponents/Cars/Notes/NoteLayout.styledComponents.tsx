import styled from "styled-components";
import config from "../../../../common/config/config.json"
import { container } from "../../Global/GlobalStyles.styledComponent";

export const NoteLayout = styled.div`
  ${container};
  width: 60%;
  margin: 0 auto;
  @media(max-width: 1025px){
    width: 100%;
  };
`

export const NoteCard = styled.div<{ edit: boolean }>`
  position: relative;
  display: grid;
  grid-template-rows: ${props => props.edit ? '' : 'auto auto 30px'};
  grid-gap: 20px;
  width: 80%;
  height: fit-content;
  margin: 0 auto;
  background-color: white;
  box-shadow: ${config.shadow};
  border-radius: 6px;
  padding: 1rem;

  h1 {
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
  @media(max-width: 767px){
    width: 100%;
  }
`

export const NoteFormLayout = styled.div`
  width: 100%;
  padding: 20px;
`
export const NoteFormFieldsContainer = styled.div`
  display: grid;
  grid-template-rows: 60px auto 40px;
  grid-row-gap: 20px;
`
export const NoteDescription = styled.p`
  color: #333234;
  font-size: 20px;
  line-height: 1.8rem;
`
export const NoteDate = styled.div`
  color: ${config.linkColor};
  margin-left: auto;
`

