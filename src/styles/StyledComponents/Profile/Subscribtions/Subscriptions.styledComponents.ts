import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const UserSubscriptions = styled.div`
  display: grid;
  padding: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 35px repeat(3, 25px);
  box-shadow: 0 0 4px 0 rgba(34, 60, 80, 0.2);
  color: ${config.linkColor};
  background-color: white;
  border-radius: 6px;
  width: 250px;
  height: 120px;
`

export const SubscribersCard = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 20% 80%;
  p {
    align-content: center;
    cursor: pointer;
    color: ${config.linkColor};
  }
`
export const SubsTitle = styled.p`
  cursor: pointer;
  text-align: center;
  grid-column: span 2;
  color: ${config.commonColor};
  
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