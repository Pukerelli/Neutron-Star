import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Profile} from "./components/Profile/Profile.Component";
import {Auth} from "./components/Auth/Auth.component";
import {Search} from "./components/Seacrh/Search.component";

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/profile'>
                <Profile/>
            </Route>
            <Route path='/auth'>
                <Auth/>
            </Route>
            <Route path='/search'>
                <Search/>
            </Route>
        </Switch>
    );
};
