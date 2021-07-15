import React, {useEffect} from 'react';
import styles from './App.module.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from './components/Home/Home';
import {Header} from './components/Header/Header.component';
import {Footer} from './components/Footer/Footer.component';
import {AppWrapper} from "./styles/StyledComponents/App/AppWrapper.StyledComponent";
import {useAppDispatch} from "./store";
import {Auth} from './components/Auth/Auth.component';
import {useSelector} from "react-redux";
import {selectAuthLoading, selectAuthUser} from "./selectors/auth/auth.selector";
import {Car} from "./components/Cars/Car.component";
import {Profile} from "./components/Profile/Profile.Component";
import {authMeAction} from "./store/actions/auth.action";


const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const loading = useSelector(selectAuthLoading)
    const auth = useSelector(selectAuthUser)
    useEffect(() => {
        dispatch(authMeAction())
    }, [auth])
    if (loading === 'idle') {
        return <div><h1>LOADING</h1></div>
    }
    return (
        <Router>
            <AppWrapper>
                <Header/>
                <main className={styles.main}>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path='/profile'>
                            <Profile/>
                        </Route>
                        <Route path='/cars'>
                            <Car/>
                        </Route>
                        <Route path='/auth'>
                            <Auth/>
                        </Route>
                    </Switch>
                </main>
                <footer className={styles.footer}>
                    <Footer/>
                </footer>
            </AppWrapper>
        </Router>
    )
}

export default App;
