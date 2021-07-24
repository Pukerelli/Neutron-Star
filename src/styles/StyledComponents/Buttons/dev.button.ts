import styled from "styled-components";
import config from "../../../common/config/config.json"

export const DevButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 10%;
  width: 4rem;
  height: 2rem;
  color: white;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: ${config.color};
`