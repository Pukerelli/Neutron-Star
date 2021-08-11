import styled from 'styled-components'
import config from "../../../common/config/config.json"
export const Main = styled.main<{hideScroll: boolean}>`
  margin-top: ${props => props.hideScroll? '0' : '8px'};
  grid-area: content;
  overflow-y: ${props => props.hideScroll? 'auto' : 'scroll'};
  display: grid;
  max-height: 100%;
  grid-template-columns: 15% minmax(70%, 700px) 15%;
  margin-bottom: ${props => props.hideScroll? '0' : '8px'};
  
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
`


