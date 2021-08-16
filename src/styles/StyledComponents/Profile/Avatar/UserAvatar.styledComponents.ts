import styled from "styled-components";
import config from '../../../../common/config/config.json'

export const UserAvatarContainer = styled.div<{ image: string }>`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: 240px minmax(160px, auto);
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  width: 100%;
  @media(max-width: 767px){
    grid-template-rows: 170px minmax(160px, auto);
  }
  @media(min-width: 1650px){
    grid-template-rows: 290px minmax(160px, auto);
  }
`

export const UserAvatarBlock = styled.div`
  grid-row-start: 2;
  position: relative;
  width: 100%;
  background-color: white;
  opacity: .9;
  border-radius: 0 0 6px 6px;
`
export const UserAvatarImageContainer = styled.div`
  border: 2px solid white;
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
  top: -35%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const UserAvatarContacts = styled.div`
  width: 70%;
  align-items: center;
  grid-row-gap: 10px;
  justify-content: center;
  display: grid;
  grid-template-columns: 30px auto;
  grid-template-rows: 20px 30px 30px;
  margin: 35px auto 0;
  a{
    text-transform: none;
  }
  @media(min-width: 1650px){
    font-size: 20px;
  }
`
export const UserAvatarContactsTitle = styled.p`
  color: rgb(130, 130, 130);
  grid-column: span 2;
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.14);
  }
`
export const UserAvatarContactsLinks = styled.a`
  cursor: pointer;
  margin-left: 1rem;
  color: ${config.linkColor}
`

export const UserAvatarEditFormContainer = styled.div`
  background-color: transparent;
  position: relative;
  padding: 20px 10px;
  height: fit-content;
  display: grid;
  grid-row-gap: 20px;
  grid-template-rows: 20px 30px 20px 30px 30px;
`
export const AbortBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${config.linkColor};
  position: absolute;
  z-index: 100;
  top: 5%;
  right: 5%;
`
