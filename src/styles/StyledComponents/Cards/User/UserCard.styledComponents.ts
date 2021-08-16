import styled from "styled-components";
import config from "../../../../common/config/config.json";

export const UserCardLayout = styled.div`
  position: relative;
  box-shadow: ${config.shadow};
  display: grid;
  padding: 7px 7px 7px 15px;
  width: 100%;
  height: fit-content;
  grid-template-columns: 3fr 2fr;
  background-color: white;
  border-radius: 6px;
  grid-column-gap: 1rem;
  @media (min-width: 1650px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    padding: 7px;
  }
`

export const UserCardDescription = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: repeat(6, auto);
  align-items: center;
  grid-template-columns: 1fr 1fr;
`
export const UserCardAvatar = styled.div`
  height: 130px;
  margin-bottom: 50px;
  @media(min-width: 1650px){
    height: 250px;
    margin-bottom: 80px;
  }
  @media(max-width: 767px){
    height: 200px;
  }
`

export const UserCardAvatarContainer = styled.div`
  height: 130px;
  grid-column: span 2;
`

