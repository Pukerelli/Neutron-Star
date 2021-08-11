import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const NoteLayout = styled.div`
  width: 700px;
  margin: 0 auto;
`

export const NoteCard = styled.div<{ edit: boolean }>`
  position: relative;
  display: grid;
  grid-template-rows: ${props => props.edit ? '' : 'auto auto 30px'};
  grid-gap: 20px;
  width: 600px;
  height: fit-content;
  margin: 0 auto;
  background-color: white;
  box-shadow: ${config.shadow};
  border-radius: 6px;
  padding: 1rem;

  h1 {
    text-align: center;
  }
`

export const NoteFormLayout = styled.div`
  height: 450px;
  width: 100%;
  padding: 20px;
`
export const NoteFormFieldsContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 280px 40px;
  grid-row-gap: 20px;
`

export const NoteDescription = styled.p`
  color: #333234;
  font-size: 1.2rem;
  line-height: 1.8rem;
`
export const NoteDate = styled.div`
  color: ${config.linkColor};
  margin-left: auto;
`

export const NoteBtnBack = styled.div`
  position: absolute;
  z-index: 300;
  color: ${config.linkColor};
  cursor: pointer;
  top: 0;
  left: -10%;
`
