import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const NoteLayout = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 40px auto 30px;
  grid-gap: 20px;
  width: 500px;
  margin: 0 auto;
  background-color: white;
  box-shadow: ${config.shadow};
  border-radius: 6px;
  padding: 1rem;

  h1 {
    text-align: center;
  }
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
  color: ${config.linkColor};
  cursor: pointer;
  top: 0;
  left: -10%;
`
