import styled from "styled-components";


export const UserDescription = styled.div`
  position: relative;
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  color: rgb(130, 130, 130);
  background-color: white;
  padding: 15px 22px;
  border-radius: 6px;
  width: 530px;
  min-height: 230px;
  height: fit-content;
  max-height: 350px;

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
  padding: 15px;
  width: 80%;
  grid-template-columns: 1fr 1fr;
`

export const UserEditFormContainer = styled.div`
  display: grid;
  width: 360px;
  margin: 20px auto 0;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-template-rows: repeat(4, 65px);
  align-items: center;
  height: 265px;
`

