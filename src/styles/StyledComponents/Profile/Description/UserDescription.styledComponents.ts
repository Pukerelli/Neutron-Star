import styled from "styled-components";

export const UserDescription = styled.div`
  grid-area: ds;
  position: relative;
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  color: rgb(130, 130, 130);
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  width: 530px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.14);
  }

  h1, h2, h3, h4 {
    color: #333234
  }
`
export const UserInfo = styled.div`
  display: grid;
  grid-row-gap: .3rem;
  padding: 1rem 0;
  width: 80%;
  grid-template-columns: 1fr 1fr;
`

export const UserAbout = styled.div`
  grid-area: ab;
  width: 530px;
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  color: rgb(130, 130, 130);
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 6px;
`


