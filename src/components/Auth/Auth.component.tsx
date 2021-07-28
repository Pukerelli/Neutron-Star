import React from 'react';
import {Login} from "./Login/Login.component";
import {Registration} from "./Registration/Registration.component";
import {Route} from "react-router-dom";
import {AuthLayout} from '../../styles/StyledComponents/Auth/AuthLayout.styledComponents';


export const Auth = () => {
    return (
        <AuthLayout>
            <Route path='/auth/login'>
                <Login/>
            </Route>
            <Route path='/auth/registration'>
                <Registration/>
            </Route>
        </AuthLayout>
    );
};