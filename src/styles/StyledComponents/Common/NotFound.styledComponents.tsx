import styled from "styled-components";
import notFound from "../../../common/images/notFound.jpg";

export const NotFoundLayout = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${notFound});
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
  @media(max-width: 767px){
    font-size: 150px;
  }

`