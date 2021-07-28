import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Car} from "./Car/Car.component";
import {User} from "./User/User.component";
import {SubscriptionsPage} from "./Subscriptions/SubscriptionsPage.component";


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
                <SubscriptionsPage/>
            </Route>
        </Switch>
    );
};

