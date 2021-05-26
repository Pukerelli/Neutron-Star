import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { Login } from './components/Login/Login.component';
import { Home } from './components/Home/Home';
import { UserProfile } from './components/Profile/UserProfile/UserProfile';
import { Header } from './components/Header/Header.component';
import { Footer } from './components/Footer/Footer.component';


const App: React.FC = () => {
    return (

        <Router>
            <Header/>
            <body>
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
            </body>
            <footer>
                <Footer/>
            </footer>
        </Router>
    )
}

export default App;
