import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from './components/Header/Header.component';
import {AppWrapper} from "./styles/StyledComponents/App/AppWrapper.StyledComponent";
import {useAppDispatch} from "./store";
import {useSelector} from "react-redux";
import {selectAuthLoading} from "./selectors/auth/auth.selector";
import {authLogoutAction, authMeAction} from "./store/actions/auth.action";
import {Navbar} from "./components/Common/Navbar/Navbar.component";
import {ContentLayout, Layout} from './styles/StyledComponents/Layout/Layout.styledComponent';
import {Routes} from './Routes';
import {GlobalStyle} from "./styles/StyledComponents/Global/GlobalStyles.styledComponent";
import { DevButton } from './styles/StyledComponents/Buttons/dev.button';

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

    ///// dev
    const [bg, setBg] = useState(false)
    const onClick = () => {
        setBg(!bg)
    }
    /////
    if (loading === 'idle') {
        return <div><h1>LOADING</h1></div>
    }


    return (
        <Router>
            <GlobalStyle/>
            <AppWrapper>
                <Header/>
                <Layout>
                    <Navbar/>
                    <ContentLayout bg={bg? 'aqua': undefined}>
                        <DevButton onClick={onClick}>content BG</DevButton>
                        <Routes/>
                    </ContentLayout>
                </Layout>
            </AppWrapper>
        </Router>
    )
}

export default App;
