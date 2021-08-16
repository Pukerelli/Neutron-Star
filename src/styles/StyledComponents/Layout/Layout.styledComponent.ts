import styled from 'styled-components'
import config from "../../../common/config/config.json"
export const Main = styled.main<{hideScroll: boolean}>`
  grid-area: content;
  overflow-y: ${props => props.hideScroll? 'auto' : 'scroll'};
  max-height: 100%;
  margin-bottom: ${props => props.hideScroll? 0: '15px'};
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${config.wrapperColor};
  }
  
  @media(max-width: 1023px) {
    overflow: auto;
  }
  @media(max-width: 767px){
    margin-bottom: ${props => props.hideScroll? 0: '3px'};
    margin-top: ${props => props.hideScroll? 0: '5px'}
  }
`


