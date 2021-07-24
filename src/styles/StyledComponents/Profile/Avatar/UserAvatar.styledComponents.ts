import styled from "styled-components";
import config from '../../../../common/config/config.json'

export const UserAvatarContainer = styled.div<{ image: string }>`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: grid;
  grid-template-rows: 55% 45%;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  grid-area: av;
  width: 260px;
  height: 100%;
`

export const UserAvatarBlock = styled.div`
  grid-row-start: 2;
  position: relative;
  width: 100%;
  height: 100%;
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

export const UserAvatarImg = styled.img`
  border-radius: 50%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
`
export const UserAvatarContacts = styled.div`
  width: 70%;
  align-items: center;
  grid-row-gap: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 20px 30px 30px;
  margin: 2rem auto 0;
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