import styled from "styled-components";
import React from "react";

interface IProps{
    show?: boolean
}

export const NavLinkStyled = styled.div`
  color: white;
  font-size: 24px;
  padding: 0.2rem;

  &:hover {
    background-color: rgb(205, 53, 68);
  }
  transition: .4ms linear;
  cursor: pointer;
  margin-bottom: 0.2rem;
`

export const NavDisplayBtn = styled.button<IProps>`
  background-color: #EB3649;
  height: 40px;
  width: 30px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 100%;
  top: 50%;
  opacity: ${props => (props.show ? 0 : 1)};
  border-radius: 0 6px 6px 0;
  transform: translateY(-50%);
  transition: 0.2s linear;
  outline: none;
  border: none;
  
`
export const NavHideBtn = styled.button`
  background-color: #EB3649;
  height: 40px;
  width: 16px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 6px 0 0 6px;
  transition: 0.5s linear;
  z-index: 0;
  left: 100%;
  top: 50%;
  outline: none;
  border: none;
  transform: translateY(-50%) scaleX(-1);
`
