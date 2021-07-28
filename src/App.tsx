import React, {useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from './components/Header/Header.component';
import {AppWrapper} from "./styles/StyledComponents/App/AppWrapper.StyledComponent";
import {useAppDispatch} from "./store";
import {useSelector} from "react-redux";
import {selectAuthLoading} from "./selectors/auth/auth.selector";
import {authLogoutAction, authMeAction} from "./store/actions/auth.action";
import {GlobalStyle} from "./styles/StyledComponents/Global/GlobalStyles.styledComponent";
import {Routes} from "./Routes";

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const loading = useSelector(selectAuthLoading)

    setTimeout(() =>
        () => {
            if (loading === 'idle') {
                dispatch(authLogoutAction())
            }
        }, 20000)
    useEffect(() => {
        dispatch(authMeAction())
    }, [])

    /////
    if (loading === 'idle') {
        return <div><h1>LOADING</h1></div>
    }

    return (
        <Router>
            <GlobalStyle/>
            <AppWrapper>
                <Header/>
                <Routes/>
            </AppWrapper>
        </Router>
    )
}

export default App;
