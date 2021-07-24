import styled from "styled-components";

export const UserSubscriptions = styled.div`
  grid-area: fl;
  display: grid;
  padding: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 15px repeat(auto, 20px);
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  color: #7ea7f5;
  background-color: white;
  border-radius: 6px;
  width: 260px;
  min-height: 60px;
  max-height: 240px;
`

export const SubscribersCard = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 20% 80%;
  

  p {
    align-content: center;
    cursor: pointer;
    color: #5e8fac;
  }
`
export const SubsTitle = styled.p`
  cursor: pointer;
  text-align: center;
  grid-column: span 2;
  color: rgb(130, 130, 130);
  

  &::after {
    grid-column: span 2;
    margin-top: .2rem;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.14);
    margin-bottom: 0.3rem;
  }
`