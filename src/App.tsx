import React, {useEffect} from 'react';
import styles from './App.module.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from './components/Auth/Login/Login.component';
import {Home} from './components/Home/Home';
import {UserProfile} from './components/Profile/UserProfile/UserProfile.component';
import {Header} from './components/Header/Header.component';
import {Footer} from './components/Footer/Footer.component';
import {AppWrapper} from "./styles/StyledComponents/App/AppWrapper.StyledComponent";
import {useAppDispatch} from "./store";
import {fetchAuth} from "./store/reducers/auth-reducer/auth.slice";
import { Auth } from './components/Auth/Auth.component';
import {useSelector} from "react-redux";
import {selectAuthUser} from "./selectors/auth/auth.selector";
import {Car} from "./components/Cars/Car.component";


const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const isAuth = useSelector(selectAuthUser)
    useEffect(()=> {
        dispatch(fetchAuth(null))
    },[])
    if(!isAuth){
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
                        <Route path='/auth'>
                            <Auth/>
                        </Route>
                        <Route  path={['/profile/:username', '/profile']}>
                            <UserProfile/>
                        </Route>
                        <Route  path={'/cars'}>
                            <Car/>
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
