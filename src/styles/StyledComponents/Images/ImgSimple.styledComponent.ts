import styled from "styled-components";

export const ImgSimple = styled.img`
  width: 100%;
  height: inherit;
  overflow: hidden;
  object-fit: cover;
  @media (max-height: 600px) {
    min-height: 200px;
  }
`