import styled from "styled-components";
import config from "../../../../common/config/config.json"

export const AboutLayout = styled.div`
  position: relative;
  display: grid;
  width: 800px;
  grid-template-rows: 400px auto;
  margin: 0 auto;
  grid-gap: 20px;
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