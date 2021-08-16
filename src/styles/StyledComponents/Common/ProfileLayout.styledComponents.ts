import styled from "styled-components";
import {container} from "../Global/GlobalStyles.styledComponent";

export const ProfileLayout = styled.div<{unauthorised?: boolean}>`
  ${container};
  width: ${props => props.unauthorised? '40%': '60%'};
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${props => props.unauthorised? 'auto': '65% auto'};
  grid-column-gap: 20px;
  box-sizing: border-box;
  @media(max-width: 1025px){
    width: 100%;

  }
  @media(max-width: 767px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`
export const UserAvatarColumn = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 20px;
  height: fit-content;
  grid-template-rows: minmax(350px, auto) auto;
  @media(max-width: 767px) {
    grid-row-start: 1;
  }
`

export const UserAboutColumn = styled.div`
  grid-row-gap: 20px;
  display: grid;
  width: 100%;
  height: fit-content;
  grid-template-rows: minmax(230px, auto) minmax(180px, auto);
`
export const UserAboutCarsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 20px;
  grid-template-rows: 40px repeat(170px, auto);
`

export const GarageCarsColumn = styled.div<{hideBtn: boolean}>`
  display: grid;
  width: 100%;
  height: fit-content;
  grid-template-rows: ${props => props.hideBtn? '': '40px'} auto;
  grid-row-gap: 20px;
`

export const SubscriptionsColumn = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  grid-template-rows:  60px auto;
  grid-row-gap: 20px;
`

export const SearchColumn = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  grid-template-rows:  40px 55px auto;
  grid-row-gap: 20px;
`
