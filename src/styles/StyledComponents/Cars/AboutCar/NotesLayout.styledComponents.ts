import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const NotesLayout = styled.div`
  display: grid;
  grid-column: span 2;
  grid-row-gap: 10px;
  font-size: 20px;
  width: 100%;
  color: ${config.linkColor};
  @media(max-width: 767px){
    grid-column: auto ;
    grid-row-start: 4;
  }
`
export const NotesTitle = styled.div`
  text-overflow: ellipsis;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  max-width: 95%;
  font-size: 26px;
`
export const NoteCard = styled.div`
  border-radius: 6px;
  box-shadow: ${config.shadow};
  display: grid;
  grid-template-columns: 80% 15% 5%;
  height: fit-content;
  padding-left: 30px;
  cursor: pointer;
  align-items: center;
  background-color: white;
  @media(max-width: 723px) {
    grid-template-columns: 4fr 2fr 1fr;
    padding-left: 10px;
    grid-column-gap: 5px;
  }
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