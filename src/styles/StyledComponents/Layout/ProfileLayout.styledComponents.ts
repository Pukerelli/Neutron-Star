import styled from "styled-components";

export const ProfileLayout = styled.div`
  height: 100%;
  width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 530px 250px;
  grid-column-gap: 20px;
  box-sizing: border-box;
`
export const UserAvatarColumn = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 20px;
  grid-template-rows: 350px 120px;
`

export const UserAboutColumn = styled.div`
  grid-row-gap: 20px;
  display: grid;
  width: 530px;
  height: fit-content;
  grid-template-rows: minmax(230px, auto) minmax(180px, auto);
`
export const UserAboutCarsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 20px;
  grid-template-rows: 40px repeat(auto, 120px);
`


export const GarageCarsColumn = styled.div`
  display: grid;
  width: 530px;
  height: fit-content;
  grid-template-rows: 40px repeat(auto-fill, 215px);
  grid-row-gap: 20px;
`

export const SubscriptionsColumn = styled.div`
  display: grid;
  width: 530px;
  height: fit-content;
  grid-template-rows:  60px repeat(auto-fill, 215px);
  grid-row-gap: 20px;
`

export const SearchColumn = styled.div`
  display: grid;
  width: 530px;
  height: fit-content;
  grid-template-rows:  40px 55px repeat(auto-fill, 215px);
  grid-row-gap: 20px;
`
