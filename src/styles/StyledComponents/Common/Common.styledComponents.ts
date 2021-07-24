import styled from "styled-components";

export const Name = styled.h1<IName>`
  color: #333234;
  font-size: 1.7rem;
  &::after {
    margin-top: .2rem;
    content: '';
    display: ${props => props.underline ? 'block' : 'none'};
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.14);
  }
`
export const NameMini = styled.h3`
  color: #333234;
  font-size: 1.4rem;
`
export const Title = styled.p`
  color: rgb(130, 130, 130);
  font-size: 1.2rem;
`
export const Subtitle = styled.p`
  color: rgb(130, 130, 130);

  font-size: 1.2rem;
`
export const OnlineStatus = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 1.4rem;
  color: #6d99e8;
`



interface IName {
    underline?: boolean
}

