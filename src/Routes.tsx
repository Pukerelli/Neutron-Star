import React from 'react';
import {Navbar} from "./components/Common/Navbar/Navbar.component";
import {Layout} from "./styles/StyledComponents/Layout/Layout.styledComponent";
import {Route, Switch} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Profile} from "./components/Profile/Profile.Component";
import {SearchPage} from "./components/Seacrh/SearchPage.component";
import {Auth} from "./components/Auth/Auth.component";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Layout>
                <Navbar/>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/search'>
                    <SearchPage/>
                </Route>
                <Route path='/auth'>
                    <Auth/>
                </Route>
            </Layout>
        </Switch>
    );
};
