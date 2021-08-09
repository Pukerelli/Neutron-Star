import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const AboutLayout = styled.div`
  position: relative;
  display: grid;
  width: 800px;
  grid-template-rows: 400px 40px auto;
  grid-template-columns: 330px 450px;
  margin: 0 auto;
  grid-gap: 15px 20px;
`

export const AboutCarColumn = styled.div`
  position: relative;
  display: grid;
  height: 400px;
  width: 330px;
  border-radius: 6px;
  background-color: white;
  box-shadow: ${config.shadow};
`

export const AboutCarAvatarColumn = styled.div`
  display: grid;
  width: 450px;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
`
export const AboutCarAvatarContainer = styled.div`
  height: 300px;
`

export const AboutCarAvatarSubtitle = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: repeat(3, auto-fill);
  box-shadow: ${config.shadow};
  border-radius: 6px;
`

export const AboutCarDescriptionContainer = styled.div`
  display: grid;
  padding: 15px 30px;
  grid-template-rows: 40px repeat(10, 30px);
  grid-template-columns: 2fr 3fr;
  grid-row-gap: 0.3rem;

  &::after {
    content: '';
    grid-column: span 2;
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.14);
  }
`
export const CarNameContainer = styled.div`
  grid-column: span 2;
  text-align: center;
  align-items: center;
`

export const AvatarSubtitle = styled.div`
  display: grid;
  grid-template-columns: 20% 45%  20% 15%;
  grid-template-rows: repeat(2, 30px);
  width: 400px;
  margin: 0 auto;
  padding: 10px;
  align-items: center;

  p {

  }
`

export const AboutCarBtnContainer = styled.div`
  grid-column: span 2;
  height: 40px;
`
