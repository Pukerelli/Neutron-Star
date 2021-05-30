import styled from "styled-components";
import React from "react";

interface IProps{
    display: boolean
}

export const NavLinkStyled = styled.div`
  font-size: 24px;
  padding: 0.3rem;
  &:hover {
    background-color: rgba(255,70,79,0.35);
    border-radius: 4px;
    color: white;
  }
  transition: .4ms linear;
  cursor: pointer;
`

export const NavDisplayBtn = styled.button<IProps>`
  background-color: #EB3649;
  height: 40px;
  width: 30px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 0 6px 6px 0;
  transform: ${props => (props.display ? 'translateX(-5vw)' : 'translateX(0)' )} translateY(150%);
  transition: 0.5s linear;
  outline: none;
  border: none;
  
`
export const NavHideBtn = styled.button`
  background-color: #EB3649;
  height: 40px;
  width: 12px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 6px 0 0 6px;
  transition: 0.5s linear;
  z-index: 0;
  outline: none;
  border: none;
  transform: translate(930%, -370%) scaleX(-1);
`
