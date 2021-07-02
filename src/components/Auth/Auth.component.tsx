import React from 'react';
import {LoginForm} from "./Login/LoginForm.component";
import {RegistrationForm} from "./Registration/RegistrationForm.component";
import {Route, Switch} from "react-router-dom";


export const Auth= () => {
    return (
            <Switch>
                <Route path='/auth/login'>
                    <LoginForm/>
                </Route>
                <Route path='/auth/registration'>
                    <RegistrationForm/>
                </Route>
            </Switch>
    );
};