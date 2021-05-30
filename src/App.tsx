import React from 'react';
import styles from './App.module.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from './components/Login/Login.component';
import {Home} from './components/Home/Home';
import {UserProfile} from './components/Profile/UserProfile/UserProfile.component';
import {Header} from './components/Header/Header.component';
import {Footer} from './components/Footer/Footer.component';
import {AppWrapper} from "./styles/StyledComponents/App/AppWrapper.StyledComponent";


const App: React.FC = () => {
    return (
        <Router>
            <AppWrapper>
                    <Header/>
                <main className={styles.main}>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>

                        <Route exact path='/login'>
                            <Login/>
                        </Route>

                        <Route exact path='/profile'>
                            <UserProfile/>
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
