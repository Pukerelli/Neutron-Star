import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Car} from "./Car/Car.component";
import {User} from "./User/User.component";
import {Subscriptions} from "./Subscriptions/Subscriptions.component";


export const Profile = () => {
    return (
        <Switch>
            <Route path={'/profile/user'}>
                <User/>
            </Route>
            <Route path={'/profile/cars'}>
                <Car/>
            </Route>
            <Route path={'/profile/subscriptions'}>
                <Subscriptions/>
            </Route>
        </Switch>
    );
};

