import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Header} from './components/Header/Header.component';
import {AppWrapper} from "./styles/StyledComponents/App/AppWrapper.StyledComponent";
import {useAppDispatch} from "./store";
import {useSelector} from "react-redux";
import {selectAuthLoading} from "./selectors/auth/auth.selector";
import {authLogoutAction, authMeAction} from "./store/actions/auth.action";
import {Routes} from "./Routes";
import {Layout} from './styles/StyledComponents/Layout/Layout.styledComponent';
import {Navbar} from "./components/Common/Navbar/Navbar.component";
import {Spinner} from "./components/Common/Fetching/Spinner.fetchingComponents";

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const [notFound, toggleNotFound] = useState(false)
    const loading = useSelector(selectAuthLoading)
    const notFoundHandler = (toggle: boolean) => toggleNotFound(toggle)

    setTimeout(() =>
        () => {
            if (loading === 'idle')
                dispatch(authLogoutAction())
        }, 20000)

    useEffect(() => {
        dispatch(authMeAction())
    }, [])

    if (loading === 'idle')
        return <Spinner/>

    return (
        <Router>
            <AppWrapper>
                <Header/>
                <Layout hideScroll={notFound}>
                    <Navbar hide={notFound}/>
                        <Routes notFoundHandler={notFoundHandler}/>
                </Layout>
            </AppWrapper>
        </Router>
    )
}

export default App;
