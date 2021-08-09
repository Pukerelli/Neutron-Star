import styled from "styled-components";
import config from "../../../../common/config/config.json";

export const CarCardLayout = styled.div`
  box-shadow: ${config.shadow};
  display: grid;
  padding: 7px 7px 7px 15px;
  width: 100%;
  height: 215px;
  grid-template-columns: 3fr 2fr;
  background-color: white;
  border-radius: 6px;
  grid-column-gap: 1rem;
`

export const CarCardDescription = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: repeat(6, auto);
  align-items: center;
  grid-template-columns: 1fr 1fr;
`
export const CarCardAvatar = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
`

export const CarCardAvatarContainer = styled.div`
  height: 120px;
  grid-column: span 2;
`

