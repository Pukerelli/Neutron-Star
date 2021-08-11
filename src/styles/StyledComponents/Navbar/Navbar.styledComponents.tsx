import styled from "styled-components";
import config from "../../../common/config/config.json"

interface IProps {
    show?: boolean
}

export const NavBarContainer = styled.div<{hide: boolean}>`
  height: fit-content;
  width: 160px;
  margin-left: auto;
  padding: 0.8rem;
  display: ${props => props.hide? 'none': 'flex'};
  flex-direction: column;
  transition-duration: 0.7s;
  border-radius: 6px;
  border: 1px solid ${config.linkColor};
  background-color: #fff;
  a{
    color: ${config.linkColor};
  }
`

export const NavLinkStyled = styled.div`
  font-size: 24px;
  border-bottom: 2px solid transparent;
  display: inline-block;
  width: fit-content;

  &:hover {
    border-bottom: 2px solid ${config.linkColor};
  }

  transition: .4ms linear;
  cursor: pointer;
  margin-bottom: 5px;
`

export const NavDisplayBtn = styled.button<IProps>`
  background-color: ${config.redColor};
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
  background-color: ${config.redColor};
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
