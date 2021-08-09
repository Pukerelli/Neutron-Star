import styled from "styled-components";

export const NotFoundLayout = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b61a6a53029897.59257dc5a0679.jpg");
  background-size: cover;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  grid-column-start: 1;
  grid-column: span 3;
`
export const NotFoundTextContainer = styled.div`
  width: fit-content;
  height: fit-content;

`

export const NotFoundInner = styled.h1`
  font-size: 200px;
  opacity: .8;
  color: white;
  
`