import React from 'react';
import {Route, Switch } from 'react-router-dom';
import { Login } from './Login/Login.component';
import { Registration } from './Registration/Registration.component';

export const Auth = () => {
    return (
        <Switch>
            <Route exact path='/auth/login'>
                <Login/>
            </Route>
            <Route exact path='/auth/registration'>
                <Registration/>
            </Route>

        </Switch>
    );
};

