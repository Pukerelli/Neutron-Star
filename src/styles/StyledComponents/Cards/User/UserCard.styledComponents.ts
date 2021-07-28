import styled from "styled-components";
import config from "../../../../common/config/config.json";

export const UserCardLayout = styled.div`
  box-shadow: ${config.shadow};
  display: grid;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  width: 100%;
  height: 215px;
  grid-template-columns: 3fr 2fr;
  background-color: white;
  border-radius: 6px;
  grid-column-gap: 1rem;
`

export const UserCardDescription = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: repeat(5, auto);
  align-items: center;
  grid-template-columns: 1fr 1fr;
`
export const UserCardAvatar = styled.div`
  display: grid;
  grid-template-rows: 150px auto;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
`

export const UserCardAvatarContainer = styled.div`
  height: 150px;
  grid-column: span 2;
`

