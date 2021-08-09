import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from './store';
import {GlobalStyle} from "./styles/StyledComponents/Global/GlobalStyles.styledComponent";

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle/>
        <App/>
    </Provider>,
    document.getElementById('root')
)


