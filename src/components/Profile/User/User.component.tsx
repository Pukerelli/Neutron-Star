import React from 'react';
import {Route, Switch} from "react-router-dom";
import {UserProfilePage} from "./UserProfile/UserProfilePage.component";

export const User = () => {
    return (
        <Switch>
            <Route path={['/profile/user/:username?', '/profile']}>
                <UserProfilePage/>
            </Route>
            <Route path={['/profile/album/:username', '/profile/album']}>
                <div>album</div>
            </Route>
        </Switch>
    );
};

