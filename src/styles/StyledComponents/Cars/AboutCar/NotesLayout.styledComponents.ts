import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const NotesLayout = styled.div`
  display: grid;
  grid-column: span 2;
  grid-row-gap: .4rem;
  color: ${config.linkColor};
`
export const NotesTitle = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 95%;
  font-size: 20px;
`
export const NoteCard = styled.div`
  border-radius: 6px;
  box-shadow: ${config.shadow};
  display: grid;
  grid-template-columns:  5% 75% 15% 5%;
  height:  35px;
  cursor: pointer;
  align-items: center;
  background-color: white;
`
export const NoteDeleteBtn = styled.div`
  color: ${config.linkColor};
  border: 2px solid ${config.linkColor};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .5s linear;
  border-radius: 2px 6px 6px 2px;
  :hover{
    color: white;
    border: none;
    background-color: ${config.linkColor};
  }
  
`